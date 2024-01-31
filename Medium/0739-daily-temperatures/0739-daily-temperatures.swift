class Solution {
    func dailyTemperatures(_ temperatures: [Int]) -> [Int] {
        // temperatures를 순회한다.
        // temp[i+1] 이 temp[i] 보다 크면 result[i] 는 1
        // 아니면 temp[j] 가 temp[i] 보다 커질때까지 반복하고 커지면 result[i] 는 j-i
        var result = Array(repeating: 0, count: temperatures.count)
        var stack = [Int]()
        
        for (index, temp) in temperatures.enumerated() {
            while !stack.isEmpty && temp > temperatures[stack.last!] {
                let t = stack.removeLast()
                result[t] = index - t
            }
            stack.append(index)
        }
        return result
    }
}