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
Array.prototype.operateInAnyPosition = function(index,len,...value){
  console.log(value);
  //删除元素
  let newArr = []
  let endIndex = index + len
  let valueLen = value.length
  for(let i = 0; i < this.length; i++){
    if(i <= index || i > endIndex){
      newArr.push(this[i])
    }
  }
  if(valueLen !== 0){
    let addArr = []
    for(let j = 0; j <= index; j++){
      addArr[j] = newArr[j]
    }
    for(let x = 0; x < value.length; x++){
      addArr.push(value[x])
    }
    for(let y = index+1; y < newArr.length; y++){
      addArr.push(newArr[y])
    }
    return addArr
  }else{
    return newArr
  }

  
}
/**
 * 数组是否包含当前元素
 * include()
 */
Array.prototype.isInclude = function(val){
  for(let i = 0; i < this.length; i++){
    if(this[i] === val){
      return true
    }
  }
  return false
}

/**
 * 当前元素在数组中的位置，没有返回-1
 * indexOf
 */
Array.prototype.getIndex = function(val){
  for(let i = 0; i < this.length; i++){
    if(this[i] === val){
      return i
    }
  }
  return -1
}
const arr = new Array(1,2,3,4,5,6,7,8)
// console.log(arr.getIndex(7));

/**
 * 使用reducer方法
 */
let reducerArr = [1,2,3,4,5]
let result = reducerArr.reduce((previous,current)=>{
  console.log(previous,current);
  return previous + current

})
console.log(result);
