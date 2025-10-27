// Fundamentals of Javascript;
// arrays and objects 
// functions return 
// asycn js coding 
// let var cons 

// var arr = [1,2,3,4,"hey",{},true, function(){},[];

// foreach map filter fin indexOf

var arr = [1,2,3,4];


// array ke har ek ke liye function chalao... aur val mei bari bari value aayeagi 
// arr.forEach(function(val){
//     console.log(val + "hello");
// })



// map mtlb aapke diye hue array se new array create krna h toh tbi ke liye 
// var ans= arr.map(function(val){
//     return val*3;
// })
// console.log(ans);


// now filter 
// var ans = arr.filter(function(val){
//     if(val>=3)  {return true;}
//     else return false;
// })
// console.log(ans);




// Find 
// var ans = arr.find(function(val){
//     if(val == 2)return val;
// })
// console.log(ans);


// INdex off 
// arr.indexOf(12); 
// arr.indexOf(2);







// NOw we will understand about objects 
var obj= {
    name:"harsh",
    age: 25
}
// to access u can type this 
// obj.name or obj['name'];

Object.freeze(obj); // now u cannot change the value insie the object okay 





// app funciton ki bhi length nikal skte ho 
function abcd(a,b,c){

}
// use abcd.length










function abcd(){
    return 12;
}




// var ans = abcd();









// Now async js coding 

// line by line code chale isey kehte h synchronous 
// jo bhi code async nature ka ho usey side stack mein bhej do and agel code ko chlao jo bhi sync nature ka ho, jab bhi saara sync code chal jaaye , tab check kro ki async code complete hua ya nahi and agar wo complete hua ho to usey main stack mein laao and chalao 


async function abcd(){
    var blob = await fetch(`https://randomuser.me/api/`) // third party mei dependent h kahai aur se data la rha h okay 
    // jo fetech data deta h vo readeable ni hota h fir usse json mei convert krte h okay 
    var ans= await blob.json();

    console.log(ans.results[0].name)
}

abcd();






