/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
   运载能力最少为1，最多为weight的和，在其中查找满足条件的最小值
 */
   var shipWithinDays = function(weights, days) {
    let l = 1,r = 0 
    weights.forEach(val => {
        r = r + val
    })
    console.log(r);
    while(l < r){
        console.log(l,r);
        let mid = l + Math.floor((r-l)/2)
        console.log(mid);
        let planDay = getDays(weights,mid)
        console.log(planDay);
        if(planDay <= days){
            l = mid + 1
        }else{
            r = mid
        }
    }
    return l
 };
 
 function getDays(weights,mid){
     let d = 0
     let wei = 0
     weights.forEach(val => {
       console.log(val);
       console.log(wei + val);
       if(wei + val <= mid){
          wei = wei + val
       }else{
           d = d + 1
           wei = val
       }
     })
     return d
 }
 let arr = [1,2,3,4,5,6,7,8,9,10]
 console.log(shipWithinDays(arr,5));
 