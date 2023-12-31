// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function(nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i ++) {
        for (let j = i + 1; j < nums.length; j ++) {
            if ( nums[i] + nums[j] == target ) {
                result.push(i);
                result.push(j);
                
            }
        }
    }
    return result;
};

var twoSum1 = function(nums, target) {
    let result = [];
    let j = nums.length - 1;
    let i = 0;
    while (i < j) {
        let sum = nums[i] + nums[j];
        if (sum == target) {
            result.push(i);
            result.push(j);
            break;
        } else if (sum < target) {
            i++;
        } else if (sum > target) {
            j--;
        }
    }
    return result;
};


console.log(twoSum1([2,7,11,15], 9));