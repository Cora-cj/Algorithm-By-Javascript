/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
  /**
    在最小值和最大值中间查找到k,使H小时能吃完的情况下的最小k值
   */
   let sortArr= sortArrOri(piles)
  //  let min = sortArr[0],max = sortArr[sortArr.length-1]
  let max = piles[0]
  for(let j = 1; j<piles.length;j++){
    if(piles[j] > max){
      max = piles[j]
    }
  }
   let newArr = []
   for(let i = 1; i <= max;i++){
       newArr.push(i)
   }
   let l = 0, r = newArr.length
   while(l<r){
       let mid = l + parseInt((r-l)/2)
       let times = getK(newArr[mid],piles) //找到复合times的最小值
       if(times <= h){
         r = mid
       }else{
         l = mid+1
       }
   }
   return newArr[l]
};
//判断对应K需要吃多少天
function getK(k,piles){
  let times = 0
  piles.forEach(num => {
    if(k < num){
      times = times+parseInt(num/k)
      if(k%num !== 0){
          times++
      }
    }else{
        times++
    }
  })
  return times
}
function sortArrOri(arr){

  for(let i = 0; i < arr.length; i++){
    let minNum = arr[i]
    for(let j = i ; j < arr.length;j++){
      if(arr[j] < minNum){
        minNum = arr[j]
      }
    }
    //交换位置
    let minIndex = arr.indexOf(minNum)
    arr[minIndex] = arr[i]
    arr[i] = minNum
  }
  return arr
}

let arr = [312884470]
// let arr = [2,1,1,1,1]
console.log(minEatingSpeed(arr,312884470));