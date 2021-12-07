const head = {
  val:1,
  next:{
    val:2,
    next:{
      val:3,
      next:{
        val:4,
        next:{
          val:5,
          next:null
        }
      }
    }
  }
}

/**
 * 方法一
 */
// function reserveList(head) {
//   if(head.next === null){
//     return head
//   }
//   let list = reserveList(head.next)
//   head.next = null
//   let current 
//   current = list
//   while(current.next != null){
//     current = current.next
//   }
//   current.next = head
//   return list
// };
/**
 * 方法二  迭代
 */
 function reverseList(head) {
  //  console.log(head);
  // if(head == null || head.next === null){
  //   return head
  // }
  let pre = null
  let current = head
  console.log(current)
  while(current != null){
    let next1 = current.next
    console.log(next1);
    current.next = pre
    console.log(current);
    pre = current
    console.log(pre);
    current = next1
    console.log(current);
    // return
  }
  return pre
};


console.log(reverseList(head));