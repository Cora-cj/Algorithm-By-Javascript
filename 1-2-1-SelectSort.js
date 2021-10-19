// 排序算法

/**
 * 将数组从小到大进行排序
 */

//1、使用另外一个空数组进行排序
// function sortArrBase(arr){
//   let arrResult = []
//   let length = arr.length
//   for(let i = 1 ; i <= length;i++){ 
//      let numBase = arr[0]
//      arr.map( num => {
//        if(num < numBase){
//          numBase = num
//        }
//      })
//      arr.splice(arr.indexOf(numBase),1)
//      arrResult.push(numBase)
//   }
//   return arrResult
// }

// let test1 = [-1,14,1,3,7,98,0]
// console.log(sortArrBase(test1));

//在原数组上进行排序
//思路：i是不变量，始终指向输入数组从[0,n)
//     j是指向i下一个元素，到末尾，[i+1,n)
//      [0,i)是已经完成排序的部分
// function sortArrOri(arr){

//   for(let i = 0; i < arr.length; i++){
//     let minNum = arr[i]
//     for(let j = i ; j < arr.length;j++){
//       if(arr[j] < minNum){
//         minNum = arr[j]
//       }
//     }
//     //交换位置
//     let minIndex = arr.indexOf(minNum)
//     arr[minIndex] = arr[i]
//     arr[i] = minNum
//   }
//   console.log(arr);
//   return arr
// }

// console.log(sortArrOri([22,33,4,12,43,78,0,1.5]));

/*
对类或者对象进行排序
根据对象里某个属性值的大小进行排序
**/
// function sortObj(arr,param){
//    for(let i = 0; i < arr.length; i++){
//     let minStudent = arr[i]
//     for(let j = i+1; j < arr.length;j++){
//       if(arr[j][param] < minStudent[param]){
//         minStudent = arr[j]
//       }
//     }
//     let minIndex = arr.indexOf(minStudent)
//     let temp = arr[i]
//     arr[i] = arr[minIndex]
//     arr[minIndex] = temp
//    }
//    return arr
// }

// let students = [ 
//   {
//     name:"张三",
//     score:"78",
//     age:"20"
//   },
//   {
//     name:"李四",
//     score:"99",
//     age:"18"
//   }, 
//   {
//     name:"王麻子",
//     score:"60",
//     age:"25"
//   },
//   {
//     name:"小陈",
//     score:"10",
//     age:"1"
//   }
// ]

// console.log(sortObj(students,"age"));

/**
 * 循环不变量i,从数组末尾开始
 */

function selectSortReserve(arr){
  for(let i = arr.length-1; i >= 0; i--){
    let maxNum = arr[i]
    for(let j = i-1; j >= 0; j--){
      if(arr[j] > maxNum){
        maxNum = arr[j]
      }
    }
    let temp = arr[i]
    let maxIndex = arr.indexOf(maxNum)
    arr[i] = arr[maxIndex]
    arr[maxIndex] = temp
  }
  return arr
}

let arr1 = [2,4,8,98,12,34,5,6,7,44,67,90]

console.log(selectSortReserve(arr1));



