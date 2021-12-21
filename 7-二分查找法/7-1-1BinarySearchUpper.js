//查找大于target的的最小元素所在位置

function BinarySearchUpper (arr,target) {
  let l = 0, r = arr.length
  
  while(l < r ){
    let mid = l + parseInt((r - l)/2)
    if(arr[mid] <= target){
      l = mid + 1
      console.log(l);
    }else if(arr[mid] > target){
      r = mid
    }
  }
  return l
}

//如果存在目标元素，返回目标元素里的最大下标，否则返回大于目标元素的最小元素下标
function BinarySearchCeil (arr,target){
  let upper = BinarySearchUpper(arr,target)
  console.log(upper);
  if(upper-1>=0 && arr[upper - 1] === target){
    console.log('upper-1');
    return upper-1
  }else{
    console.log('upper');
    return upper
  }
}

//如果存在目标元素，返回目标元素里的最小下标，否则返回大于目标元素的最小元素下标
function BinarySearchLowerCeil (arr,target){
  let upper = BinarySearchUpper(arr,target)
  let lower = upper-1
  if(upper-1>=0 && arr[upper-1] === target){
    while(arr[lower] === target){
      lower--
    }
  }else{
    return upper
  }
  return lower + 1
}
let arr = [2,6,14,14,14,14,14,20]
console.log(BinarySearchLowerCeil(arr,15));