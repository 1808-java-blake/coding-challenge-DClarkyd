/* You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, 
discarding the shortest pieces until there are none left. At each iteration you will determine the length of the 
shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that 
shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.
Given the lengths of some number of sticks, return an array containg the numbers of sticks remaing before each cut was made.

If any input is provided other than an array you should return an empty array because no sticks were ever there.

For example, 
provided an array such as: [5,4,4,2,2,8]
we would expect: [6,4,2,1]
explination:
stick lengths     length of cut     sticks before cut
5 4 4 2 2 8         2                 6
3 2 2 - - 6         2                 4
1 - - - - 4         1                 2
- - - - - 3         3                 1
- - - - - -         done              done
*/
function solution(arr) {
  // TODO: Create the solution

  if (!Array.isArray(arr)) {
    return []
  }

  if (arr === null) {
    return []
  }
  else if (arr === undefined) {
    return []
  }
  let shortestPiece = 9001

  let breakPoint = 0
  for (let k = 0; k < arr.length; k++) {
    if (arr[k] === 9001) {
      breakPoint = k
      break
    }
  }

  let newArr = new Array(breakPoint)
  let returnArr = new Array(arr.length - newArr.length - 1)

  for (let o = 0; o < breakPoint; o++) {
    newArr[o] = arr[o]
  }

  for (let n = breakPoint + 1; n < arr.length; n++) {
    returnArr[n] = arr[n]
  }

  for (let i = 0; i < arr.length; i++) {
    if (newArr[i] < shortestPiece) {
      shortestPiece = arr[i]
    }
  }

  var index = newArr.indexOf(shortestPiece);
  if (index !== -1) newArr.splice(index, 1)

  for (let j = 0; j < arr.length; j++) {
    arr[j] -= shortestPiece
  }

  let breakPointArray = [9001]
  let totalArray = newArr.concat(breakPointArray)
  totalArray = totalArray.concat(returnArr)

  for (m = 0; m < breakPoint; m++) {
    if (arr[m] === arr[m + 1]) {
      continue
    }
    else {
      solution(totalArr)
    }
  }
  return returnArr

}

module.exports = solution;
