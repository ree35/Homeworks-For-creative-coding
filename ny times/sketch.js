var myData;
var globalData;
var url;
var baseUrl;
var myList;
var APIkey;



function setup(){

	createCanvas(600,600);

	baseUrl = "http://www.nytimes.com/";
	city = "New York,ny";
	APIkey = "5c6c0472869d4227bd44bb3c100d8d3c";
	url = baseUrl + "q=" + list + "&appid=" + APIkey;
	myData = loadJSON(url, gotData);

}

function gotData(myData){
	counter:(2500)
	globalData = myData;
	console.log(globalData);


}

function draw(){
background (255);
counter: 0

 		for(var i = 0;i<myData.list.length; i++){
        }
        if(globalData){ //test if data is available
		println(globalData.list[4].hex);
}

function mouseClicked(){

	list = "soccer";
	url = baseUrl + "q=" + list + "&appid=" + APIkey;
	myData = loadJSON(url, gotData);

