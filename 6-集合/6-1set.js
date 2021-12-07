class Set{
  constructor(){
    this.item = {}
  }
  has(element){
    return Object.prototype.hasOwnProperty.call(this.item,element)
  }
  add(element){
    if(!this.has(element)){
      this.item[element] = element
      return true
    }
    return false 
  }
  delete(element){
    if(this.has(element)){
      delete this.item[element]
      return true
    }
    return false
  }
  clear(){
    this.item = {}
  }
  size(){
    return Object.keys(this.item).length
  }
  value(){
    return Object.value(this.item)
  }
  //并集union
  union(otherSet){
    const unionSet = new Set()
    console.log(this);
    this.values().forEach(value => {
      unionSet.add(value)
    });
  }
}