function hasTargetSum(array, target) {
  // create an object to keep track of all the numbers we've seen
  const seenNumbers = {}
  //iterate over the array of numbers
  for (const number of array){
    //   for the current number, identify a complementary number thats adds to our target
    const complement = target - number;
    //   check if any of the keys in our object is the complement to the current number
    //     if so, return true
    if (seenNumbers[complement]) return true;
    //   save the current number as the key on our object so we can check it later against other numbers
    seenNumbers[number]=true;
    console.log (seenNumbers)
  }
  // if we reach the end of the array, return false.
  return false
}

/* 
  Write the Big O time complexity of your function here
  Time Complexity O(n)
  Space Complexity O(n)
*/

/* 
  Add your pseudocode here
  Option 1
  iterate over the array of numbers
    for the current nuber, identify a complementary number that adds to our target
    (ex. if our number is 2, and the target is 5, the complementary is 5-2 = 3)
    iterate over the remaining numbers in the array
      check if any of the remaining numbers is the complement
        if so, return true
  if we reach the end of the array, return false.

  Option 2
  create an object to keep track of all the numbers we've seen.
  iterate over the array of numbers.
    for the current number, identify a complementary number thats adds to our target
    check if any of the keys in our object is the complement to the current number
      if so, return true
    save the current number as the key on our object so we can check it later against other numbers
  later against other numbers
  if we reach the end of the array, return false.
*/

/*
  Add written explanation of your solution here
  Since iterating through an object takes less time, trying that approach here instead.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([4, 0], 4));


}

module.exports = hasTargetSum;
