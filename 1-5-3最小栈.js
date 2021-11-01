var MinStack = function() {
  this.stack1 = []
  this.stack2 = []
  this.minNum = 0
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  console.log(val);
 if(this.stack1.length === 0){
     this.minNum = val
     console.log(val);
     this.stack2.push(val)
 }else{
     if(val <= this.minNum){
         this.stack2.push(val)
         this.minNum = val
     }

 }
 this.stack1.push(val)
 console.log(this.stack2)
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
   let popVal =  this.stack1.pop()
   if(popVal === this.minNum){
       this.stack2.pop()
       this.minNum = this.stack2[this.stack2.length-1]
   }
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
   return this.stack1[this.stack1.length-1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {

   return this.minNum

};

let obj = new MinStack()

obj.push(-1)
obj.top()
obj.getMin()
obj.push(1)
obj.top()
console.log(obj.getMin());

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/