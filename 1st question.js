1. anonymous function & IIFE
//a.Print odd numbers in an array
//IIFE
(function odd(){
    var number=[1,2,3,4,5,6,7,8,9,10];
        for(i=0;i<number.length;i++){
             if(number[i]%2!==0){
           console.log(number[i]);
        } 
        }
    })();
        
//anonymous function
var odd=function (){
    var number=[1,2,3,4,5,6,7,8,9,10];
    for(i=0;i<number.length;i++){
         if(number[i]%2!==0){
       console.log(number[i]);
    } 
        
    }
};
odd();

//b.Convert all the strings to title caps in a string array
//IIFE
(function(){
    var str=("hello world".toLowerCase().split(" "));
 
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(" "));
 })();
 
//anonymous function

function titleCase() {
    var str=("hello world".toLowerCase().split(" "));
 
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(" "));
}
titleCase();

//c.Sum of all numbers in an array
//IIFE

(function(){
    var str=[10,20,30];
   var sum=0;
 for (var i = 0; i < str.length; i++) {
   sum +=str[i];
 }
console.log(sum);
})();

//anonymous function

function sum() {
    var str=[10,20,30];
    var sum=0;
  for (var i = 0; i < str.length; i++) {
    sum +=str[i];
  }
 console.log(sum);
}
sum();

//d.Return all the prime numbers in an array
//IIFE
(function(){
    var numArray = [1,2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    numarr = numarr.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    
    console.log(numarr);
    })();

  //anonymous function
  var primenumber=function(){
    var numarr = [1,2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    numarr = numarr.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    
    console.log(numarr);
    };
    primenumber();
    
 //E.Return all the palindromes in an array
 //IIFE
 function(){
    var arr = ["dad", "note", "book", "madam"];   
   var a = arr.filter(function(b,c,d){
   var Cur = b.split("").reverse().join("");
   if(b == Cur){
   console.log( arr[c] );
   }
   });
   
   })();
//anonymous function
var palindrome=function(){
    var arr = ["dad", "note", "book", "madam"];   
   var a = arr.filter(function(b,c,d){
   var Cur = b.split('').reverse().join('');
   if(b == Cur){
   console.log( arr[c] );
   }
   });
   }; palindrome();

//g.Remove duplicates from an array
//IIFE
(function(){
   
    var chars = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
    var uniqueChars = [...new Set(chars)];
    console.log(uniqueChars);
        
    })();

//anonymous function
var remove= function(){
    var chars = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
    var uniqueChars = [...new Set(chars)];
    
    console.log(uniqueChars);
    };
    remove();

//h.Rotate an array by k times
//IIFE
(function(){
    var num=[1,2,3,4,5];
     var k=2;
   for (var i = 0; i < k; i++) {
       num.unshift(num.pop()) ;
   }
 console.log(num);
})();

//anonymous function
var rotate = function() {
    var num=[1,2,3,4,5];
     let k=2;
   for (var i = 0; i < k; i++) {
       num.unshift(num.pop()) ;
   }
  console.log(num);
};
rotate();






