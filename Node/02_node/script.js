// npm init -y  ismei question ni puchega 
// npm init   ismie sara puchega author vgera name sb 
// callback mtlb function in javascript 

const fs = require('fs');  // ab aap ise use kr skte h okay ... mltb jo bhi aapka node mei fs kr skta h ab aapka ye const fs kr skta h okay 

// first lets learn abt writeFile ...write file mtlb aap file create kr rhe ho okay 
    // fs.writeFile("hey.txt", "hey hello kaise ho ",function(err){
    // if(err) console.error(err); // agr error h toh console pe error print krdo console error 
    // else console.log("done");




    // append file mtlb likhi hui file ko extend kr rhe h okay 
//  fs.appendFile("hey.txt", "Meine toh append kr di file  ", function (err) {
//         if (err) console.error(err); // agr error h toh console pe error print krdo console error 
//         else console.log("done");



        // how ot rename a file see 
        // fs.rename("hey.txt","hello.txt",function(err){
        //     if(err) console.error(err);
        //     else console.log("done");
        // })



    // fs.copyFile("hello.txt","./copy/chacha.txt",function(err){
    //   if(err) console.error(err.message);
    //   else console.log("done");  
    // })    



    // NOw we will understand Unlink 
    // fs.unlink("hello.txt", function(err){
    //     if(err) console.error(err);
    //     else console.log("removed");
    // })



    // to remove directoryy... yaha neeche recursive ki value true likhte hue na folder delete ho jaega with contentss too 
    // fs.rm("./copy",{recursive:true},function(err){
    //     if(err) console.log(err);
    //     else console.log("removed");
    // })

    


    // youself learn how to create folder , read folder , read file , 


// Create a folder named "myFolder"
// fs.mkdir("myFolder", function (err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("Folder created successfully!");
//     }
// });





// Read the contents of a folder named "myFolder"
// fs.readdir("myFolder", function (err, files) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("Folder contents:", files);
//     }
// });



    // now we will understand http and https 

    // http protocol yahi protocal hai ya rule hai jisko follow kre bina app internet pe naa hi kuch bej skte ho na hi kuch manga skte ho 




    // how to use http protocols 
    const http = require('http');


   const server =  http.createServer(function(req, res){
        res.end("hello world");
    })

    server.listen(3000);
    




// })