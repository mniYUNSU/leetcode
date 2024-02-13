class Solution {
    func firstPalindrome(_ words: [String]) -> String {
        for word in words {
            if isPanlindromic(word) {
                return word
            }
        }
        return ""
    }
    
    func isPanlindromic(_ word: String) -> Bool {
        let stringArray = Array(word)
        var left = 0
        var right = stringArray.count - 1
        
        while left < right {
            if stringArray[left] != stringArray[right] {
                return false
            }
            left += 1
            right -= 1
        }
        return true
    }
}