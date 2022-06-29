//HAS ODD NUMBER

function hasOddNumber(arr){
    return  arr.some(function(val){
      return val%2===1;
      });
    return false;
  }


  //HAS ZERO


function hasZero(num){
    let numArr=num.toString().split("");
    return numArr.some(function(val){
      return val==='0';
    });
   return false;
  }

  //HAS ONLY ODD NUMBERS


function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
      return val%2!==0;
    });
   return false;
 }

 //HAS NO DUPLICATES

 function hasNoDuplicates(arr){
    return arr.every(function(val){
      return arr.indexOf(val)===arr.lastIndexOf(val);
    });
    return false;
  }


  //HAS A CERTAIN KEY

  function hasCertainKey(arr,key,){
    return arr.every(function(val){
      return key in val;
    });
    return false;
  }

  //HAS CERTAIN VALUE

 
  function hasCertainValue(arr,key,theVal){
    return arr.every(function(val){
        return val[key]===theVal;
    });
 return false;
}