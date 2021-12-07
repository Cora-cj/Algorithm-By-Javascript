// function quickSort(arr){
//   return quick(arr,0,arr.length-1)
// }
// function quick(arr,left,right){
//   if(arr.length > 1){
//     let midIndex = (right-left)/2
//     let midVal = arr[]
//   }
// }

function Partition(arr,l,r){
  let element = arr[l]
  arr.forEach(e => {
    /**
     * 1、当右边的元素e小于arr[l]时(只比较l与r之间的元素)，剪切元素e到arr[l]的位置
     * 
     */
    if(e < element && arr.indexOf(e) > arr.indexOf(element)){
      let a = e
      let eIndex = arr.indexOf(e)
      let elementIndex = arr.indexOf(element)
      arr.splice(eIndex,1)
      arr.splice(elementIndex,0,a)
    }
  });
  let index = arr.indexOf(element)
  
  return index
}

/**
 * 
 * 此函数没有用到数组的原型方法splice()1
 */
function Partition2(arr,l,r){
  let element = arr[l]
  let j = l
  for(let i = l; i <= r; i++){
    if(arr[i] < element){
      j++
      let val = arr[j]
      arr[j] = arr[i]
      arr[i] = val
    }
  }
  let v = arr[j]
  arr[j] = arr[l]
  arr[l] = v
  console.log(arr);
  return j
}



let a = [1,2,3,4,5,6,7]
function QuickSort(arr,l,r){
  if(l < r){
    let p = Partition2(arr,l,r)
    // console.log(p);
    // if(p !== l && p !== r){
      QuickSort(arr,l,p-1)
      QuickSort(arr,p+1,r)
    // }else if(p === l){
    //   QuickSort(arr,p+1,r)
    // }else if(p === r){
    //   QuickSort(arr,l,p-1)
    // }
  }
  

  console.log(arr);
    return arr
}
console.log(QuickSort(a,0,7));
console.log(a);