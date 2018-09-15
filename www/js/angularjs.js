// JavaScript Document
var App = angular.module('App', ['ngSanitize'] );

App.controller('CenterCTRL', function ($scope,$http,todoServicez,$sce) {
//////////////////////////////////////open links
$scope.wopen = function(links) {
 window.open(links, '_system', '');
};

//////////////////////////////////////check online
setTimeout(function(){
$scope.uid = device.uuid;

window.resolveLocalFileSystemURL("file:///storage/sdcard0/baan/reg/"+$scope.uid+".json", onSuccesfsl, onFaidll);
function onSuccesfsl() {
$http.get("file:///storage/sdcard0/baan/reg/"+$scope.uid+".json").then(function(response) {
	$scope.flag_pro = response.data.reg[0].flag_pro;
	document.getElementById('userid').value=response.data.reg[0].id;
	$scope.xflag=0;
	//alert($scope.flag_pro);
	if($scope.flag_pro==0){
		$scope.fflag=1; 
	$scope.factor = response.data.factor;
 }else{
	$scope.xflag=2; 
 }
 
});		
}
function onFaidll() {$scope.fflag=1; $scope.xflag=0; }


var store = "file:///storage/sdcard0/baan/json/";
var File_Name = "one.json";
  window.resolveLocalFileSystemURL(store + File_Name, onSuccesfs, onFaidl);
function onSuccesfs() {
	todoServicez.list_dl().then(function(items)
{
	if(items.length<=3){
	var Onlins=document.getElementById('online').value;
if(Onlins==1){
$scope.startone=false;
$scope.loadshow=true;		
}else{
$scope.startone=false;
$scope.loadshow=true;
}
}else{
$scope.startone=true;
$scope.loadshow=false;	
}});
	
	$http.get("file:///storage/sdcard0/baan/json/one.json").then(function(response) {
	$scope.genr =	response.data.genrate[0];
	
	$scope.cats = response.data.cats;
	$scope.books = response.data.books;
	$scope.eventsx = response.data.events;
	//var counts = Object.keys($scope.slider).length;
 angular.forEach($scope.cats, function(value, key) {
 	$scope.check_file('file:///storage/sdcard0/baan/pic/',value.photo,value.pic,'pic'); 
});

 angular.forEach($scope.books, function(value, key) {
 	$scope.check_file('file:///storage/sdcard0/baan/pic/',value.photo,value.pic,'pic'); 
});
 
 angular.forEach($scope.eventsx, function(value, key) {
 	$scope.check_file('file:///storage/sdcard0/baan/pic/',value.photo,value.pic,'pic'); 
});
angular.forEach($scope.eventsx, function(value, key) {
 	$scope.check_file('file:///storage/sdcard0/baan/music/',value.audio,value.music,'music'); 
});	

 var Onlins=document.getElementById('online').value;
if(Onlins==1){

$http.get("http://gheseban.ir/upload/json/one.json").then(function(response) {
 if($scope.genr==response.data.genrate[0]){
	 $scope.slider = response.data.slider;
	document.getElementById('slider_flag').value=1;//alert($scope.genr);
	angular.forEach($scope.slider, function(value, key) {
 	$scope.check_file('file:///storage/sdcard0/baan/pic/',value.photo,value.pic,'pic'); 
});	
	 }else{
		 
	$scope.start();
	//	
 }
});
}else{
 $scope.slider = response.data.slider;
	document.getElementById('slider_flag').value=1;	
}

});	
 var Onlins=document.getElementById('online').value;
if(Onlins==1){

 
///////////////////////////
window.resolveLocalFileSystemURL("file:///storage/sdcard0/baan/reg/"+$scope.uid+".json", onSuccesfsd, onFaidld);
function onSuccesfsd() {
	$scope.loginon=true;
	$http.get("file:///storage/sdcard0/baan/reg/"+$scope.uid+".json").then(function(response) {
	$scope.fname = response.data.reg[0].fname;
	$scope.flag_pro = response.data.reg[0].flag_pro;
	document.getElementById('userid').value=response.data.reg[0].id;
	if($scope.flag_pro==1){$scope.pro="فعال";}else{$scope.pro="غیر فعال";}
	document.getElementById('reg_flag').value=1;
	$scope.factor = response.data.factor;
	});
}
function onFaidld() {
$scope.loginoff=true;
}
////////////////
$http.get("http://gheseban.ir/manage/api.php?online="+$scope.uid).then(function(response) {
// alert(response.data.reg[0].fname);
 if(response.data.reg[0].fname==0){
	var path = "file:///storage/sdcard0/baan/reg/";
	var filename=$scope.uid+".json";
	$scope.deletefile(path,filename);
}else{
 var urls='http://gheseban.ir/upload/json/'+$scope.uid+'.json';
var File_Name=$scope.uid+'.json';
$scope.download(urls,File_Name,'reg');
}
});
///////////
}
}

function onFaidl() {
	$scope.startone=true;
	$scope.loadshow=false;
 var Onlins=document.getElementById('online').value;
if(Onlins==0){
	new $.nd2Toast({ message :"اتصال شما به اینترنت برقرار نیست !!",ttl : 6000});
return 0;
}

$scope.start();	
}
}, 2000);

////////////////////////////////////////////  start	one
$scope.start = function() {
var urls='http://gheseban.ir/upload/json/one.json';
var File_Name='one.json';
$scope.download(urls,File_Name,'json');
//alert('jhgj');
 var urle='http://gheseban.ir/manage/.nomedia';
var File_Namee='.nomedia';
$scope.download(urle,File_Namee,'music');
setTimeout(function(){
$scope.download(urle,File_Namee,'pic');
}, 1000);

};
 
////////////////////////////////////////////////////////////////check file and download
 	$scope.check_file = function(store,File_Name,url,type) {
window.resolveLocalFileSystemURL(store + File_Name, onSuccesfs, onFaidl);
function onSuccesfs() {
}
function onFaidl() {
 // alert(File_Name);
	$scope.download(url,File_Name,type);
}};

setTimeout(function(){
	var nn=0;
var Onlins=document.getElementById('online').value;
if(Onlins==1){
 var int_ghdds=setInterval(function(){ 
 nn= parseInt(nn)+1;
 var dssf=document.getElementById('download_flag').value;
 var d_num=document.getElementById('download_num').value;
 if(nn>=15){document.getElementById('download_flag').value=0;}
 if(dssf==0){ 
todoServicez.list_dl().then(function(items)
{document.getElementById('download_num').value=items.length;
document.getElementById('exnum').innerHTML=items.length;
 	if(items.length==0){
	clearInterval(int_ghdds);
$scope.startone=false;
$scope.loadshow=true;
	}else{
		if(items.length!=d_num || nn>=20){ nn=0;
	// alert(items[0].pic+' '+items[0].links+' '+items[0].type);
	$scope.download(items[0].pic,items[0].links,items[0].type);
	}}
});
}
 }, 2000);}

}, 12000);


///////////////////////////////////////////search 
 
setTimeout(function(){
	$scope.check_file('file:///storage/sdcard0/baan/json/','search.json','http://gheseban.ir/manage/search.json','json');
}, 1500);
setTimeout(function(){
$http.get("file:///storage/sdcard0/baan/json/search.json").then(function(response) { 
//  	$scope.progrshow=false;
//	$scope.loadshow=true;
 var dsdf=response.data; 
new $.nd2Search({
	  placeholder : "جستجو ...",   // Placeholder in the search field
  defaultIcon : "globe-alt",  // optional: icon | null
source : dsdf,
  fn : function(result) { // this function will be executed when a valid result item is selected
    $scope.pbooks(result);
	$.mobile.changePage( "#booky", { transition: "slideup"} );
  }
});
	
});  
}, 3000);


//setTimeout(function(){
//var urlse='http://gheseban.ir/manage/';
//var File_Namese='search.json';
//$scope.download(urlse,File_Namese,'json');
//}, 2000);

/////////////////////////////////////////////////////////downloder
$scope.download=function(urls,File_Name,type){
	document.getElementById('download_flag').value=1;
	if(File_Name=='.nomedia' || type=='json'){
		todoServicez.dlfile(File_Name,urls,1,type);
		document.getElementById('download_flag').value=0;
	}else{
todoServicez.dlfile(File_Name,urls,0,type);
	}
//alert('onOnlfine');	

var fileTransfer = new FileTransfer();
var uri = encodeURI(urls);
fileTransfer.download(
uri,
"file:///storage/sdcard0/baan/"+type+"/"+File_Name,
function(entt) {
},
function(error) {
	document.getElementById('download_flag').value=0;
todoServicez.dlfile(File_Name,urls,0,type);
  console.log("upload error code" + urls);
},
false,
{
  headers: {
	  "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
  }
});
fileTransfer.onprogress = function(progressEvent) {//alert(urls);
		if (progressEvent.lengthComputable) {
			var perc=0;
			perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
			document.getElementById('bloader').innerHTML=perc+'%';
			if(perc>=95){
			document.getElementById('download_flag').value=0;
			todoServicez.dlfile(File_Name,urls,1,type);
if(File_Name=='one.json'){
	
	setTimeout(function(){
location.reload(); 
}, 11000);
$scope.startone=true;
$scope.loadshow=false;
			setTimeout(function(){
	$http.get("file:///storage/sdcard0/baan/json/one.json").then(function(response) {
	$scope.sliderx = response.data.slider;
	$scope.booksy = response.data.books;
	$scope.eventk = response.data.events;
angular.forEach($scope.sliderx, function(value, key) {
 	$scope.check_file('file:///storage/sdcard0/baan/pic/',value.photo,value.pic,'pic'); 
});
setTimeout(function(){	

$scope.cats = response.data.cats;
angular.forEach($scope.cats, function(value, key) {
 	$scope.check_file('file:///storage/sdcard0/baan/pic/',value.photo,value.pic,'pic');
	todoServicez.dlfile(value.photo,value.pic,0,'pic'); 
});	}, 2000);
setTimeout(function(){$scope.slider=$scope.sliderx;
document.getElementById('slider_flag').value=1;
angular.forEach($scope.booksy, function(value, key) {
 	//$scope.check_file('file:///storage/sdcard0/baan/pic/',value.photo,value.pic,'pic'); 
	todoServicez.dlfile(value.photo,value.pic,0,'pic');	
	todoServicez.addbook(value.id,value.name,value.photo,0,value.id_cat);
});	}, 5000);
setTimeout(function(){
 angular.forEach($scope.eventk, function(value, key) {
	todoServicez.dlfile(value.audio,value.music,0,'music');
});}, 7000);
 setTimeout(function(){
angular.forEach($scope.eventk, function(value, key) {
todoServicez.dlfile(value.photo,value.pic,0,'pic');
});	}, 9000);
});	}, 500);
			}
if(type=='reg'){
		setTimeout(function(){
	$http.get("file:///storage/sdcard0/baan/reg/"+File_Name).then(function(response) {
	$scope.fname = response.data.reg[0].fname;
	$scope.flag_pro = response.data.reg[0].flag_pro;
	if($scope.flag_pro==1){$scope.pro="فعال";}else{$scope.pro="غیر فعال";}
	document.getElementById('reg_flag').value=1;
	
});	}, 1000);
 }			
}

//statusDom.innerHTML = perc + "% loaded...";
} else {	
}
};
	};

$scope.pbooks = function(ides) {
	$scope.progrshow2=true;
	$scope.loadshow2=false;
	$http.get("file:///storage/sdcard0/baan/json/one.json").then(function(response) {
	$scope.bookm = response.data.books;
	$scope.progrshow2=false;
	$scope.loadshow2=true;
});	
$scope.catid=ides;
//alert(ides);
};

$scope.tbooks = function(ides) {
	$scope.progrshow2=true;
	$scope.loadshow2=false;
	$scope.booktid=ides;
	$scope.booid=ides;
	$scope.booksid=ides;
	 var Onlins=document.getElementById('online').value;
	 var userid=document.getElementById('userid').value;
if(Onlins==1){
	if(userid!=0){
	$scope.starshow=true;
	$scope.commshow=true;	
	}else{
 	$scope.starshow=false;
	$scope.commshow=false;
	}
	 $http.get("http://gheseban.ir/manage/api.php?comment").then(function(response) {
	$scope.comment = response.data.comment;
		});
		}
	$http.get("file:///storage/sdcard0/baan/json/one.json").then(function(response) {
	$scope.bookt = response.data.books;
todoServicez.iffav(ides).then(function(items)
{ //alert(items[0].fav);
$scope.efaver=items[0].fav;
if(items[0].fav==0){
$scope.efaver=items[0].fav;
	$scope.iconslike="zmdi-favorite-outline";
	}else{
		$scope.efaver=items[0].fav;
		$scope.iconslike="zmdi-favorite";
}
});
	$scope.progrshow2=false;
	$scope.loadshow2=true;
});	
 
};
/////////////////////////////////////////////// star rating
$scope.star = function(num,pageid) {
	new $.nd2Toast({   message :"با موفقیت "+num+" ستاره برای این قصه ثبت شد",ttl : 4000});
	$scope.starshow=false;
	 $http({	
  method  : 'POST',
  url     : 'http://www.gheseban.ir/coden.php',
  data    : $.param({ points:num, post_id:pageid}),  // pass in data as strings
  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
 })
.success(function(data) {
 

   });
};
////////////////////////////////////////////// show slide book
$scope.showbook = function(idds) {
	$scope.id_bookf =idds;
	//$scope.showbook(idds);
 var oval=document.getElementById("onemus").value;
 	var uids=device.uuid;
$.mobile.changePage( "#fullslide", { transition: "slideup"} );
if(oval==1){	
$http.get("file:///storage/sdcard0/baan/json/one.json").then(function(response) {
 $scope.events2 = response.data.events;
//  angular.forEach($scope.events2, function(value, key) {
//	  if(value.id_book==idds){
// 	$scope.check_file('file:///storage/sdcard0/baan/pic/',value.photo,value.pic,'pic'); 
//	  }
//});
//angular.forEach($scope.events2, function(value, key) {
//	if(value.id_book==idds){
// 	$scope.check_file('file:///storage/sdcard0/baan/music/',value.audio,value.music,'music'); 
//	}
//});	
});
 }else{
  $http.get("file:///storage/sdcard0/baan/json/one.json").then(function(response) {
	 $scope.events = response.data.events; 
	 //  angular.forEach($scope.events, function(value, key) {
//	  if(value.id_book==idds){
// 	$scope.check_file('file:///storage/sdcard0/baan/pic/',value.photo,value.pic,'pic'); 
//	  }
//});
//angular.forEach($scope.events, function(value, key) {
//	if(value.id_book==idds){
// 	$scope.check_file('file:///storage/sdcard0/baan/music/',value.audio,value.music,'music'); 
//	}
//});	
 });
 }
 
angular.forEach($scope.factor, function(value, key) {
		if(value.id_book==idds){$scope.xflag=2;}
 });  
$scope.bookid=idds;	
};
 
$scope.showfilter = function(eventu){  
    return eventu.id_book == $scope.id_bookf && 
      eventu.flag == $scope.fflag ||
        eventu.flag == $scope.xflag ;
};
///////////////////////////////////////////////exit user
$scope.exits = function(){  
$scope.uid = device.uuid;
var path = "file:///storage/sdcard0/baan/reg/";
var filename=$scope.uid+".json";
$scope.deletefile(path,filename);
 $http.get("http://gheseban.ir/manage/api.php?exit="+$scope.uid).then(function(response) {
	  if(response.statusText){
		  document.getElementById('userid').value='0';
		  $scope.loginon=false;
		  $scope.loginoff=true;
		  $scope.starshow=false;
		  $scope.commshow=false;
	  }

 });
};


$scope.inappb = function(links,type){ 
//alert(links);
 var browser = cordova.InAppBrowser.open(links, '_blank', 'location=no','hideurlbar=yes');
  browser.addEventListener('exit', function(){
  browser.executeScript({code: $scope.loadStartCallBack()});
});
};


$scope.loadStartCallBack = function() {
  $scope.uid = device.uuid;	
 	$http.get("http://gheseban.ir/manage/api.php?online="+$scope.uid).then(function(response) {
	//alert( response.data.reg[0].fname);
	if(response.data.reg[0].fname==0){}else{
       var urls='http://gheseban.ir/upload/json/'+$scope.uid+'.json';
var File_Name=$scope.uid+'.json';
$scope.download(urls,File_Name,'reg');
//alert(response);
    $scope.starshow=true;
	$scope.commshow=true;
setTimeout(function(){
window.resolveLocalFileSystemURL("file:///storage/sdcard0/baan/reg/"+$scope.uid+".json", onSuccesfsl, onFaidll);
function onSuccesfsl() {
$http.get("file:///storage/sdcard0/baan/reg/"+$scope.uid+".json").then(function(response) {
	$scope.flag_pro = response.data.reg[0].flag_pro;
	document.getElementById('userid').value=response.data.reg[0].id;
	
	$scope.xflag=0;
	//alert(response.data.reg[0].id);
	if($scope.flag_pro==0){
		$scope.fflag=1; 
	$scope.factor = response.data.factor;
 }else{
	$scope.xflag=2; 
 }
 
});		
}
function onFaidll() {
//alert('sss');	
}
}, 2000);
$scope.loginon=true;
		  $scope.loginoff=false;
	}
    });
 
};
$scope.deletefile = function(path,filename){ 
window.resolveLocalFileSystemURL(path, function(dir) {
	dir.getFile(filename, {create:false}, function(fileEntry) {
              fileEntry.remove(function(){
                 //alert('sds'); // The file has been removed succesfully
              },function(error){
                  // Error deleting the file
              },function(){
                 // The file doesn't exist
              });
	});
});
};
 
$scope.showfaver = function () {
  $.mobile.changePage( "#favert", { transition: "slideup"} ); 
todoServicez.getfaver().then(function(items)
{ //alert(items[0].idb);
	$scope.myfaver = items;
});

};
$scope.faver = function (faver,id_var) 
{
	//alert(id_var);
if(faver==1){
 $scope.iconslike="zmdi-favorite-outline";
$scope.efaver=0;
	new $.nd2Toast({   message :"با موفقیت از لیست علاقه مندی ها حذف شد",ttl : 4000});
$scope.favt=0;}else{
$scope.iconslike="zmdi-favorite";
$scope.efaver=1;
	new $.nd2Toast({   message :"با موفقیت در لیست علاقه مندی ها ثبت شد",ttl : 4000});
$scope.favt=1;}
todoServicez.faverat(id_var,$scope.favt);

};
//////////////////////////////////
$scope.forms = {};	
$scope.forms.message="";

 $scope.sendform = function () {
 message=$scope.forms.message;
 idregs=document.getElementById('userid').value;
if(message==""){
		new $.nd2Toast({   message :"لطفا جهت ارسال پیام فیلد ها را کامل کنید",ttl : 4000});
 		return 0;}
		$scope.commshow=false;
		new $.nd2Toast({   message :"پیام شما با موفقیت به ارسال شد",ttl : 4000});	
  $http({
  method  : 'POST',
  url     : 'http://www.gheseban.ir/coden.php',
  data    : $.param({Messagec: message, idreg:idregs, idpc:$scope.booktid, typec:2}),  // pass in data as strings
  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
 })
.success(function(data) {
$scope.forms.message="";

   });
 };
////////////////////////////////////end controler
});	

App.service('todoServicez', function($q) 
{
	this.dlfile = function(links,pic,fave,type) 
    {//alert(pic+' '+fave);
		var db = window.openDatabase("Database", "1.0", "Cordova Ghesbandl", 200000);
        db.transaction(function(tx) 
        {tx.executeSql("SELECT id_file FROM downloads where links='"+links+"' ", [], function(tx, res) 
	  { //alert(res.rows.length);
	  if(res.rows.length==0 && fave==0){result=0;
	  
return tx.executeSql("INSERT into downloads(flag,pic,links,type) values("+fave+",'"+pic+"','"+links+"','"+type+"')" , [], function(tx, res) 
	  {
		  return true;
	  });
}else{  if(fave==1){return tx.executeSql("UPDATE `downloads` SET flag="+fave+" WHERE  links='"+links+"'" , [], function(tx, res) 

	  {
		  return true;
	  });}}
  });
  });
  return false;
},
this.list_dl = function()
  {   
	  var deferred, result = [];
	  deferred = $q.defer();
	  var db = window.openDatabase("Database", "1.0", "Cordova Ghesbandl", 200000);
	  db.transaction(function(tx) 
	  {
	   tx.executeSql("select * from downloads where flag=0", [], function(tx, res) 
		  {//alert(res.rows.length);
		for(var i = 0; i < res.rows.length; i++)
		{
		  result.push({links : res.rows.item(i).links, type : res.rows.item(i).type, pic: res.rows.item(i).pic });
		}
		  deferred.resolve(result);
		});
	  });
	  return deferred.promise;
    },
	
	this.iffav = function(para)
{   var idcom=para;

var deferred, result = [];
deferred = $q.defer();
var db = window.openDatabase("Database", "1.0", "Cordova Ghesbandl", 200000);
db.transaction(function(tx) 
{ tx.executeSql("select fav from ghese where idb="+idcom, [], function(tx, res) 
  { //alert(res.rows.length);
	  for(var i = 0; i < res.rows.length; i++)
	  { 
  result.push({fav : res.rows.item(i).fav});
  }
  deferred.resolve(result);
});
});
return deferred.promise;
},

this.addbook = function(id,name,pic,fave,id_cat) 
    { //
 
  var db = window.openDatabase("Database", "1.0", "Cordova Ghesbandl", 200000);
        db.transaction(function(tx) 
        {
return tx.executeSql("INSERT into ghese(idb,name,pic,fav,id_cat) values("+id+",'"+name+"','"+pic+"',"+fave+","+id_cat+")" , [], function(tx, res) 
            {//alert(id+name+pic+id_cat);
                return true;
            });
        });
        return false;
},
this.faverat = function(idss,fave) 
    {//alert(idss+fave);
		var db = window.openDatabase("Database", "1.0", "Cordova Ghesbandl", 200000);
        db.transaction(function(tx) 
        {
return tx.executeSql("UPDATE ghese SET fav="+fave+" where idb="+idss , [], function(tx, res) 
		{
			return true;
		});
        });
        return false;
    },
 
 this.getfaver = function()
  {   
	  var deferred, result = [];
	  deferred = $q.defer();
	  var db = window.openDatabase("Database", "1.0", "Cordova Ghesbandl", 200000);
	  db.transaction(function(tx) 
	  {
	   tx.executeSql("select DISTINCT * from ghese where fav=1", [], function(tx, res) 
		  {//alert(res.rows.length);
		for(var i = 0; i < res.rows.length; i++)
		{
		  result.push({idb : res.rows.item(i).idb, name : res.rows.item(i).name, pic: res.rows.item(i).pic,fav : res.rows.item(i).fav });
		}
		  deferred.resolve(result);
		});
	  });
	  return deferred.promise;
    },
this.list_dl2 = function(count,list) 
    {//alert(idss+fave);
	// alert(count);
	 }
    });