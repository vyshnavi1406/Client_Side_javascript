
//window.navigator.geolocation.getCurrentposition(position)  
   //console.log("LATITIDE" , position.coords.latitude,
            //   "LONGITUDE" , position.coords.longitude);

//function FindMe() {
   //let status = document.getElementById("status");
    //let map = document.getElementById("mapLink");

    //map.href ="";
  // map.innerHTML = "";
   //function success(position) {
        //const lat =position.coords.latitude;
       //const long = position.corrds.longitude;
       // status.innerHTML = "";
      // map.href = 'https://www.openstreetmap.org/#map=4/21.84/82.79/${lat}/${long}';
       // map.innerHTML = 'Latitude:${lat} Longitude ${long}';
   // }
    //if (window.navigator.geolocation) {
       // window.navigator.geolocation.getCurrentPosition(success);
  // } else {
     //  status.innerHTML = 'geolocation is not supported';
   // }
//  }

//function GetLiveIplMatch() {
  //   window.navigator.mediaDevices
  //   .getUsermedia({video:true , audio:true})
   //  .then((mediastream)=> {
    // videoData.srcobject=mediastream;
// })
 //.catch((err)=>console.log(err));
//}

//var url=$(location).attr('href');
  // alert("Current URL:" +url);
//var path=$(location).attr('pathname');
//alert("Current pathname: " +path);
//document.write(url,path)


//---ASSIGNMENT // 1 ST WAY----//

//var x=function(href) {
  //var y=document.createElement("a");
  //y.href=href;

  //document.write(y.pathname);
//};
//var y= x ( prompt ("enter the url here"));


//======ANOTHER WAY====//

//var y= document.createElement("a");
//y.href = "https://www.youtube.com/watch?v=B8L6e6JM5fk";
//document.write(y.pathname);


// foreach method

const array1 = ["a", "b","c","d"];
let forEach  = array1.forEach((char)=> console.log(char));

const example2 = [25,55,88,99,77,44]

example2.forEach((numbers)=> console.log(numbers));

//array.prototype.map

let num=[1,40,30,60,50,500,400];
let languages=["java","python","jquery","ruby","javascript"];
let checkwithforeach=num.forEach((n) => n);
let checkwithmap=num.map((n) => n);
console.log(checkwithforeach);
console.log(checkwithmap);

// Array.prototype.filter()


//Array.prototype.reduce()
//exmp1:
let text=["h","t","m","l"];
let result=text.reduce(function(a,b) {
  return a+b;
});
console.log(result);

//exmp2:
let exmp2=[1,30,40,50,60,80,90];
let result2=exmp2.reduce((a,b) => {
  console.log("this is left to right");
  console.log(a);
  console.log(b);
  console.log(a+b);
});
console.log(result2);

//exaple3:
//reduceRight
let exam3 = ["l","m","t","h"];
let total = exam3.reduceRight(function(a,b){
    return a+b;
});

//Array.prototype.find()
//return value of the first element in ana array
let numbers=[1,10,50,40,300,600,10000];
let getvalue=numbers.find(function(num) {
  //console.log(num);
  return num>1000;
});
 console.log(getvalue);


 /*letfindone=user.find(findsumit);
 function findsumit(user,index,array) {

 }*/


//Array.prototype.findIndex()
let frouts=["apple","mango","graps","painapple"];
let findIndex=frouts.findIndex(index => index==="mango");
console.log(findIndex);

//Array.prototype.fill()
let filldata=["vyshnavi","hema","anu","20"];
console.log(filldata);
filldata.fill("fullstack");
console.log(filldata);

let test=Array(10).fill("fullstack");
console.log(test);

//Array.prototype.every()
let users=[{name:"mani",age:20,company:"tcs"},
           {name:"vyshnavi",age:20,company:"tcs"},
           {name:"hema",age:18,company:"tcs"},
            {name:"anu",age:25,company:"tcs"},];
let test1=users.every(function(users) {
  return users.name!==undefined;
});
console.log(test1);

//Array.prototype.some()
let exmp=[1,5,7,8,3,4];
let test2=exmp.some(four);
function four(value) {
  return value <0;
}
console.log(test2);


//Array.prototype.includes()
let lang=["java","python","nodejs","javascript","angular"];
if(lang.includes("nodejs")) {
  alert("java include here");
} else {
  alert("java is not include here");
}


//Array.prototype.reduce()
let exmp1=["j","a","v","a"];
let result1=exmp1.reduce(function(a,b) {
  return a+b;
});
let exmp3=[1,30,20,200,400,600,1000];
let result3=exmp3.reduce((a,b) => a+b);
console.log(result3);
console.log(result1);

//Array.prototype.indexof()
let user=["A","B","C", "A","D","E"];
document.write(user.indexOf("A"));//0
document.write(user.lastIndexOf("A"));//4

//Array.prototype.push()
let array=["java","js","python","nodejs"];
console.log('Beforepush ${array}');
array.push("angular");//insert value at the last position
console.log('After push ${array}');

//Array.prototype.unshift()
/*array.unshift(element[, ...[,elementN]])
console.log('Before unshift ${array}');
array.unshift("REFT");
console.log('after unshift ${array}');*/


console.log(`before unshift ${array}`); //before unshift a,b,c,d,java
array.unshift("nodejs"); // insert element at the first position
console.log(`after unshift ${array}`);   //after unshift angular,a,b,c,d,java


//Array.prototype.shift()
array.shift();
console.log(array);

//Array.prototype.pop()
array.pop();
console.log(array);

//Array.prototype.splice()
let arrDeleteItems=array.splice(start[deletecount,[item1,[item2,]]]);
let user1=["vyshnavi","hema","anu","srinu"];
user1.shift();
user1;pop();
console.log(user1);
user1.splice(position,deletecount,insertnewvalue);
user1.splice(2,1,"anu","hema");
console.log(user1);