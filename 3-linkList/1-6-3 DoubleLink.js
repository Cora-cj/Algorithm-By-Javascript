/**
 * 双向链表
 */
import Node from './1-6linkedList'
import LinkedList from './1-6linkedList'

class DoublyNode extends Node {
  constructor(element,next,pre){
    super(element,next)
    this.pre = pre
  }
}

class DoublyLinkNode extends LinkedList {
  constructor(){
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn
    this.tail= undefined
  }
  insert(element,index){
    
  }
}