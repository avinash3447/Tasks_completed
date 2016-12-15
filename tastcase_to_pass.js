
process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
     input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
  var nArr = input.split("\n");
  if(nArr){
     myarr = nArr[0].split(" ");
     arrLen = myarr[0];
     
  } 
    myList = [];
    

myList.length = arrLen; //creating a array based on the standard input
    var i = arrLen;
    while(i--){
        myList[i]=0;//to initialize the array elements to zero
        }
    

//console.log(nArr);
    for(var j=1;j<nArr.length;j++){ //used to loop on each line
        sArr = nArr[j].split(" ");
        //console.log(sArr);
        
            a = sArr[0];
            b = sArr[1];
            k = sArr[2];
            for(var p=a-1;p<=b-1;p++){
                
                myList[p] = parseInt(myList[p])+ parseInt(k) ;//adding the element based on the position given in the stdin
                //console.log("current value of p "+ p +" "+"and myList[p] is "+parseInt(myList[p]));
                
            }
           
    }
    
        console.log(myList);
        console.log("The highest number in the list is"+" "+myList.sort().reverse()[0]);//sorting and printing the first element in reverse to get the highest
});

 