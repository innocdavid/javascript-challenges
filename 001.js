function twoSums (nums, target) {
    let pairs = [];
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] + nums[j] === target) {
               pairs.push([i, j]);
            }
        }
    }
    return pairs; 
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const target = 7;
const result = twoSums(nums, target);
console.log(result); 
