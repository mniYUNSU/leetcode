class Solution {
    func isValid(_ s: String) -> Bool {
        if s.count % 2 != 0 { return false }
        
        var stack: [Character] = []
        
        for char in s {
            // char 별로 검증
            // ( 면 stack에 ) 를 넣는다.
            // 닫는 브라켓인 경우
            // 스택이 비어있거나, 스택의 마지막 값이 char 과 일치하지 않는다면
            // 닫히는 브라켓이 존재할 수 없으므로 false 리턴
            // 스택이 비어있다면 true 리턴
            switch char {
                case "(" :
                stack.append(")")
                case "{" :
                stack.append("}")
                case "[" :
                stack.append("]")
                default :
                    if stack.isEmpty || stack.removeLast() != char {
                        return false
                    }
            }
        }
        return stack.isEmpty
    }
}