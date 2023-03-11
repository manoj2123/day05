//2.arrow function
//a.Print odd numbers in an array
var odd=()=>{
    var number=[1,2,3,4,5,6,7,8,9,10];
        for(i=0;i<number.length;i++){
             if(number[i]%2!==0){
           console.log(number[i]);
        } 
        }
    };
    odd();
        

//b.Convert all the strings to title caps in a string array

var tittlecaps=()=>{
    var str=("hello world".toLowerCase().split(" "));
 
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(" "));
 }; 
 tittlecaps();

 //c.Sum of all numbers in an array

 var sum=()=>{
    var str=[10,20,30];
       var sum=0;
     for (var i = 0; i < str.length; i++) {
       sum +=str[i];
     }
    console.log(sum);
    };
    sum();

 //d.Return all the prime numbers in an array
 
 var prime=()=>{
    var numArray = [1,2, 3, 4, 5, 6, 7, 8, 9, 10];
       
       numArray = numArray.filter((number) => {
         for (var i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0) return false;
         }
         return true;
       });
       console.log(numArray);
   };
   prime();

   //E.Return all the palindromes in an array
   var palindrome=() =>{
    var arr = ["dad", "note", "book", "madam"];   
   var a = arr.filter(function(b,c,d){
   var Cur = b.split("").reverse().join("");
   if(b == Cur){
   console.log( arr[c] );
   }
   });
   
 };palindrome();