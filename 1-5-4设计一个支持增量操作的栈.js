/**
 * 让increment方法时间复杂度为O(1) !!!
 * @param {number} maxSize
 */
 var CustomStack = function(maxSize) {
  this.stack1 = []
  this.add = []
  this.maxLength = maxSize
};

/** 
* @param {number} x
* @return {void}
*/
CustomStack.prototype.push = function(x) {
  if(this.stack1.length < this.maxLength){
      this.stack1.push(x)
  }
};

/**
* @return {number}
*/
CustomStack.prototype.pop = function() {
   if(this.stack1.length === 0){
       return -1
   }
   return this.stack1.pop()
};

/** 
* @param {number} k 
* @param {number} val
* @return {void}
*/
CustomStack.prototype.increment = function(k, val) {
   
};

