function defaultEquals(a,b){
  return a === b
}

export class Node {
  constructor(element){
    this.element = element;
    this.next = undefined
  }
}

export class LinkedList{
  constructor(equalsFn = defaultEquals){
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn
  }
  /**
   * 向链表尾部添加元素
   * @param {} element 
   */
  push(element){
    const node = new Node(element)
    let current
    if(this.head == null){
      this.head = node
    }else{
      current = this.head
      while(current.next != null){
        current = current.next
      }
      current.next = node
    }
    this.count++
  }
  /**
   * 根据指定位置进行移除
   * 从链表中移除元素
   */
  removeAtByIndex(index){
    if(index >= 0 && index < this.count){
      let current = this.head
      if(index === 0){
        this.head = current.next
      }else{
        let previous 
        for(let i = 0; i < index; i++){
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      this.count--
      return current
    }
    return undefined
  }
  /**
   * 封装方法，根据index找到对应元素
   */
  getElementAt(index){
    if(index >= 0 && index < this.count){
      let node = this.head
      for(let i = 0; i < index && node != null; i++){
        node = node.next
      }
      return node
    }
    return undefined
  }
  remove(index){
    let current
    current = this.head
      if(index === 0){
        this.head = current.next
      }else{
        let previous = this.getElementAt(index-1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current
  }
 
  /**
   * 在任意位置插入元素
   */
  insert(element,index){
    const node = new Node(element)
    let current
    if(index == 0 ){
      current = this.head
      this.head = node
      this.head.next = current
    }else{
      let previous = this.getElementAt(index - 1)
      current = previous.next
      previous.next = node
      node.next = current
    }
    this.count++
  }
  /**
   * 返回一个元素的位置
   * 可以使用indexOf方法实现移除元素
   */
  indexOf(element){
    let current 
    let index 
    if(this.head == null){
      return undefined
    }else{
      current = this.head
      index = 0
    }
    while (current.element !== element) {
      current = current.next
      index++
      if(current == null){
        return -1
      }
    }
    return index
  }
  isEmpty(){
    return this.count === 0
  }
  size(){
    return this.count
  }
  getHead(){
    return this.head
  }
  toString(){
    if(this.count === 0){
      return ''
    }
    let current = this.head.next
    let objStr = `${this.head.element}`
    // for(let i = 1; i < this.count ; i++){
    //   objStr = `${objStr},${current.element}`;
    //   current = current.next
    // }
    while(current != null){
        objStr = `${objStr},${current.element}`;
      current = current.next
    }
    return objStr
  }
}
const list = new LinkedList()
list.push(10)
list.push(15)
list.push(20)

// console.log(list.indexOf(2));
// console.log(list);
// let index = list.indexOf(15)
// console.log(list.remove(index));
// console.log(list.remove(0));
// console.log(list.getHead());
console.log(list.toString());

// remove方法有错误！！！

