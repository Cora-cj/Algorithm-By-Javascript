/**
 * 数组开头插入元素
 * unshift()
 * @param {插入的元素} value
 */
Array.prototype.insertFirstPosition = function(value){
  for(let i = this.length; i >= 0 ; i--){
    this[i] = this[i-1]
  }
  this[0] = value
}
/**
 * 数组开头删除元素
 * shify()
 */
Array.prototype.deleteFirstPosition = function(){
  const newArr = []
  for(let i = 0; i < this.length-1; i++){
    newArr.push(this[i+1])
  }
  return newArr
}

/**
 * 数组结尾添加元素
 * push()
 */
Array.prototype.addLastPositon = function(value){
   let len = this.length
   this[len] = value
   return arr
}

/**
 * 数组结尾删除元素
 * pop()
 */
Array.prototype.deleteLastPosition = function(){
  let newArr  = []
  for(let i = 0; i < this.length-1; i++){
    newArr.push(this[i])
  }
  return newArr
}
/**
 * 任意位置添加或者删除元素
 * splice()
 */
Array.prototype.operateInAnyPosition = function(position,len,value){
  
}
const arr = new Array(1,2,3,4,5)
// arr.insertFirstPosition(0)
console.log(arr.deleteLastPosition());