class Solution {
    func isPalindrome(_ x: Int) -> Bool {
        var num: Int = x
        var reverse: Int = 0

        while num > 0 {
            let reminder = num % 10
            reverse = reverse * 10 + reminder
            num = num / 10
        }

        return x == reverse
    }
}