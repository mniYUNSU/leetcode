class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        // 배열의 두 요소를 더했을 때 target 과 일치하는 배열의 인덱스 리턴
        var dict = [Int: Int]()
        
        // enumerated 로 nums 의 index와 값을 가져온다.
        for (index, value) in nums.enumerated() {
            // dict에 target-value 키가 존재한다면
            // 그 키의 값과 현재 인덱스를 리턴한다.
            if let val = dict[target - value] {
                return [val, index]
            }
            // 존재하지 않다면 딕셔너리에 키: 현재 값, 밸류: 인덱스를 저장한다.
            dict[value] = index
        }
        return []
    }
}