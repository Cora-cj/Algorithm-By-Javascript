console.log('lineSearch');
function LineSearch(arr,target){
   for(let i =0; i < arr.length; i++){
     if(arr[i] === target){
       return target
     }
   }
   return -1
}

const arr1 = ["1",4,"7",12,45,33,"88"]
let res = LineSearch(arr1, "88")
console.log(res);