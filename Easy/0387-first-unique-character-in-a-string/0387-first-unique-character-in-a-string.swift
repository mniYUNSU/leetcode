class Solution {
    func firstUniqChar(_ s: String) -> Int {
        if s.count == 1 { return 0 }
        
        var input = s, done = ""
        
        for index in 0..<input.count {
            let letter = input.removeFirst()
            if !input.contains(letter) && !done.contains(letter) {
                return index
            }
            
            done += String(letter)
        }
        return -1
    }
}