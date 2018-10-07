module.exports = function longestConsecutiveLength(array) {

  if (array.length===0){
    return 0;
  }
  var set = new Set();
  let max = 1;
  for (let i = 0; i<array.length; i++){
    set.add(array[i]);
  }
  for (let i = 0; i<array.length; i++){
    let left = array[i]-1;
    let right = array[i]+1;
    let count = 1;
    while (set.has(left)){
      count++;
      set.delete(left);
      left--;
    }
    while (set.has(right)){
      count++;
      set.delete(right);
      right++;
    }
    max = Math.max(count, max);
  }
  return max;
}