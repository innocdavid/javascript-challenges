// function twoSums (nums, target) {
//     let pairs = [];
//     for (let i=0; i<nums.length; i++) {
//         for (let j=i+1; j<nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                pairs.push([i, j]);
//             }
//         }
//     }
//     return pairs; 
// }

function twoSums(nums, target) {
    let seen = {};
    pair = [];
    for (let ind=0; ind<nums.length; ind++) {
        let num = nums[ind];
        if ((target - num) in seen) {
            pair.push([ind, seen[target - num]]);
        }
        seen[num] = ind;
    }
    return pair;
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const target = 7;
const result = twoSums(nums, target);
console.log(result); 
