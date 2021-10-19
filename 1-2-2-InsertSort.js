
/**
 * 插入排序法
 */
// function InsertSort(arr){
//   for(let i = 1 ; i < arr.length ; i++ ){
//     let num = arr[i]
//     let j;
//     for( j = i ; j > 0 ; j--){

//         // let temp = arr[j]
//         // arr[j] = arr[j-1]
//         // arr[j-1] = temp

//         if( num < arr[j-1]){
//           arr[j] = arr[j-1]
//         }else{
//           break
//         }
        
//       }
//       arr[j] = num
//     }

//   return arr
// }

// let arrTest1 = [4,3,6,1,5,2,0,-1]

// console.log(InsertSort(arrTest1));

/**
 * i从后向前开始完成排序
 */
function InsertSortReserve(arr){
  for(let i = arr.length-1;i>=0;i--){
    let maxNum = arr[i]
    let j
    for(j = i; j < arr.length && maxNum > arr[j +1]; j++){
       arr[j] = arr[j + 1]
    }
    arr[j] = maxNum
  }
  return arr
}
let arrTest2 = [4,3,6,1,5,2,0,-1]

console.log(InsertSortReserve(arrTest2));