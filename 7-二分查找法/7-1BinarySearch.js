
/**
 * 递归方法
 * @param {被查找的数组} arr 
 * @param {需要查找的值} val 
 * @param {范围左边的下标} l 
 * @param {范围右边的下标} r 
 * @returns 返回被查找值的下标，如果没有该值则返回undefined
 */
// function BinarySearch( arr,val,l,r ) {
//   if(arr.length === 1 && arr[0] === val){
//     return 0
//   }
//   if(l < r){
//     let mid = parseInt(l+(r-l)/2)
//     if(arr[mid] === val){
//       console.log('中间值与val相等');
//       return mid
//     }
//     if(arr[mid] > val){
//       console.log('val在中间值前面',l,r);
//       return BinarySearch(arr,val,l,mid-1)
//     }
//     if(arr[mid] < val){
//       console.log('val在中间值后面');
//       return BinarySearch(arr,val,mid+1,r)
//     }
//   }
//   return -1
// }

// function search( arr,val ) {

//     let l = 0;
//     let r = arr.length - 1
//     return BinarySearch(arr,val,l,r)
// }



/**
 * 非递归查找法
 * @param {*} arr 
 * @param {*} val 
 * @returns 
 */
function search(arr,val){
  if(arr.length === 1 && arr[0] === val){
    return 0
  }
  let l = 0;
  let r = arr.length-1
  
  while(l <= r){
    let mid = parseInt(l+(r-l)/2)
    console.log(mid);
    if(arr[mid] === val){
      console.log('中间值与val相等');
      return mid
    }
    if(arr[mid] > val){
      console.log('val在中间值前面',l,r);
      r = mid - 1
    }
    if(arr[mid] < val){
      console.log('val在中间值后面');
      l = mid + 1
    }
  }
  return -1
}

let arr = [2,5]
let index = search(arr,5)
console.log(index);
console.log(arr[index]);