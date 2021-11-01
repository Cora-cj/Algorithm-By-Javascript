/**
 * 传递次数结束时，队列第一个是拿花的（被淘汰的）
 * 方法接收一个队列和传递次数
 */

function hotPopato(elementList,num){
   let outList = []

   while(elementList.length > 1){
     for(let i = 0 ; i < num ; i++){
       let outEl = elementList.shift()
       elementList.push(outEl)
     }
     outList.push(elementList.shift())
   }

   return {
     outList,
     winner:elementList.shift()
   }
}

let queue = ['1','2','3','4','5','6']
console.log(hotPopato(queue,7)); 