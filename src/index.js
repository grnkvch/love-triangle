/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  var a, b, c;
  var arr=preferences.slice();
  for (var i = 0; i<arr.length; i++) {
    if (arr[i]) {
      a = arr[i];
      b = arr[a-1];
      c = arr[b-1];
        if (a != b || b !=c){
         if (i+1 === c) {
          count++;
          arr[i] = '';
          arr[a-1] = '';
          arr[b-1] = '';
        }
      }
    }
  }
  return count;
};
