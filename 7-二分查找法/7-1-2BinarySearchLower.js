
//查找小于目标元素的最大值下标
function BinarySearchLower(arr,target){
   let l=-1,r=arr.length-1
   while(r>l){
     console.log(l,r);
     let mid = l+parseInt((r-l+1)/2) //避免进入死循环，取上取整的方式，因为r是会根据mid-1
     if(arr[mid] >= target){
       r = mid -1
     }else{
       l=mid
     }
     if(l=== 5){
       console.log(l,r);
       break
     }
   }
   return l
}
let arr = [1,2,5,5,5,9,10,12]
// console.log(BinarySearchLower(arr,1));

//如果存在目标元素，返回等于目标元素的最小索引，否则返回小于目标元素的最大索引
function BinarySearchLower_Floor(arr,target){
  let lower = BinarySearchLower(arr,target)
  if(arr[lower + 1] === target){
    return lower + 1
  }else {
    return lower
  }
}

console.log(BinarySearchLower_Floor(arr,0));