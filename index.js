// You are given a list. Return the sum of odd elements from the given list.
//  The input and output portions will be handled automatically. 
// You need to write a function with the recommended method signature.

// Constraints

// The list will have elements.
// Each element will be an integer where.

// Sample Input
// 3
// 2
// 4
// 6
// 5
// 7
// 8
// 0
// 1
// Sample Output
// 16

// Explanation 3+5+7+1 = 16



////////////////////////////////////////////

function sumOddElemnt(arr){ 
    let sum=0 ; 
    for (let i=0 ; i<arr.length; i++ ){
        if (arr[i]%2 !==0 ){
            sum+= arr[i]
        }
    }
    return sum 
}
console.log ("sumOddElemnt = ", sumOddElemnt([3,2,4,6,5,7,8,0,1]))


/////////////////////////////////////////////

function sumOddElements(arr) {
    return arr
      .filter(num => num % 2 !== 0)  
      .reduce((sum, num) => sum + num, 0); 
  }
  const input = [3, 2, 4, 6, 5, 7, 8, 0, 1];
console.log("sumOddElemnts = ",sumOddElements(input));