class myStack{
  constructor(arr){
    this.item = arr
  }
  /**
   * 向栈添加元素
   */
  push(element){
    this.item.push(element)
  }
  /**
   * 从栈溢出元素
   */
  pop(){
    this.item.pop()
  }
  /**
   * 查看栈顶元素
   */
  peek(){
    return this.item[this.item.length - 1]
  }
  /**
   * 查看栈是否为空
   */
  isEmpty(){
    return this.item.length === 0
  }
  /**
   * 栈长度
   */
  size(){
    return this.item.length
  }
  /**
   * 清空栈
   */
  clear(){
    this.item = []
  }
}

const stack1 = new myStack([1,2,3])
console.log(stack1.push(4,5,6)); 

/**
 * leetcode 第20题，括号匹配
 */

// function closeTheSymbol(string){
//   let arr = string.split('')
//   if(arr.length % 2 !== 0 && arr.length === 0){
//     return false
//   }
//   let stack = []
//   stack.push(arr[0])
//   for(let i = 1; i < arr.length; i++){
//     let topIndex = stack.length-1
//     if(arr[i] === "(" || arr[i] === "[" || arr[i] === "{"){
//       stack.push(arr[i])
//     }else if((arr[i] === ")" && stack[topIndex] === "(") || 
//     (arr[i] === "]" && stack[topIndex] === "[") || 
//     (arr[i] === "}" && stack[topIndex] === "{")){
//       stack.pop()
//     }else{
//       return false
//     }
//   }
//   if(stack.length === 0){
//     return true
//   }else{
//     return false
//   }
// }
// console.log(closeTheSymbol("({()}{(}]")); 


/**
 * leetcode 加一
 */
//  function plusOne(digits) {
//   let len = digits.length
//   if(len === 1 && digits[0] === 9){
//     return [1,0]
//   }
//   for(let i = len-1; i >=0; i--){
//       if(digits[i] === 9){
//         digits[i] = 0
//       }else{
//         digits[i] = digits[i] + 1 
//         console.log(digits);
//         return digits
//       }
//   }
//   if(digits[0] === 0){
//       digits.unshift(1)
//   }
//   console.log(digits);
//   return digits
// };

// plusOne([1,2,3])