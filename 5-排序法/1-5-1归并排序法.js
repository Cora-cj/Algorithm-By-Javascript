
// function merge (arr,l,mid,r){
//   let result = [].concat(arr)
//   let i = l;
//   let j = mid+1
//   for(let x = l; x <= r; x++){
//     /**
//      * 重要的是判断i超出mid和j超出r时，两种情况
//      */
//     if(i>mid){
//       arr[x] = result[j]
//       j++
//     }else if(j > r){
//       arr[x] = result[i]
//       i++
//     }else if(result[i]>result[j]){
//       arr[x] = result[j]
//       j++
//     }else if(result[i] < result[j]){
//       arr[x] = result[i]
//       i++
//     }
    
//   }
// }
// function mergeSort(arr){
//   sort(arr,0,arr.length-1)
// }
// function sort(arr,l,r){
//   if(l >= r){
//     return 
//   }
//   let mid = parseInt((l+r)/2) 
//   sort(arr,l,mid)
//   sort(arr,mid+1,r)
//   merge(arr,l,mid,r)
// }
// const arr = [2,5,9,6,3,8,4,7,0,88]
// mergeSort(arr)
// console.log(arr);
console.log([2,6,3,9,1,0,8].sort());

/**
 * 自己实现一遍归并排序
 */

// function mergeSort(array){
//   let mid = array.length/2
//   if(array.length <= 1){
//     return array
//   }
//   let left = mergeSort(array.slice(0,mid))
//   let right = mergeSort(array.slice(mid+1,arr.length))
//   return sort(left,right)
// }
// function sort(left,right){
//   let i = 0,j = 0,resultArr = [];
//   while(i < left.length && j < right.length){
//     if(left[i]<=right[j]){
//       resultArr.push(left[i])
//       i++
//     }else{
//       resultArr.push(right[j])
//       j++
//     }
//   }
//   if(i>=left.length){
//     resultArr.concat(left.slice(j,right.length))
//   }else{
//     resultArr.concat(right.slice(i,left.length))
//   }
//   return resultArr
// }
function test(arr){
  console.log(arr);
  arr.name = 'a'
  console.log(arr);
}

// console.log(mergeSort([3,1,2,7,5,9,5,0]));
let arr1 = {}
test(arr1)
console.log(arr1);