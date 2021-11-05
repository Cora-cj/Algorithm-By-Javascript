class Queue{
  constructor(){
    this.count = 0;
    this.lowerCount = 0;
    this.item = {}
  }
  enqueue(element){
    this.item[this.count] = element
    this.count++
    return this.item
  }
  dequeue(){
    delete this.item[this.lowerCount]
    this.lowerCount++
    return this.item
  }
  peek(){
    return this.item[this.lowerCount]
  }
  isEmpty(){
    return this.count - this.lowerCount === 0
  }
}
class deque{
  constructor(){
    this.count = 0;
    this.lowerCount = 0;
    this.items = {}
  }
  isEmpty(){
    return this.count - this.lowerCount === 0
  }
  addFront(element){
    if(this.isEmpty()){
      
    }
  }
}