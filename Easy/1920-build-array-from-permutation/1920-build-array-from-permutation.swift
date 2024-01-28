class Solution {
    func buildArray(_ nums: [Int]) -> [Int] {
        // ans = [ nums[nums[i]], ... ]
        var result = [Int]()
        for (index, value) in nums.enumerated() {
            result.append(nums[value])
        }
        return result
    }
}