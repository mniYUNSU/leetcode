class Solution {
    func groupAnagrams(_ strs: [String]) -> [[String]] {
        // str을 sort한다.
        // dictionary 에 sort된 str : [str, ..] 로 저장한다.
        // dictionary의 values를 리턴한다.
        var result = [String: [String]]()
        for str in strs {
            result[String(str.sorted()), default: []].append(str)
        }
        return Array(result.values)
    }
}