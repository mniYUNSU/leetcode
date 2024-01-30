class Solution {
    func evalRPN(_ tokens: [String]) -> Int {
        // tokens 가 빈값이면 0 리턴
        if tokens.count < 0 { return 0 }
        
        // 작업을 수행할 스택을 만든다.
        var stack = [Int]()
        for entry in tokens {
            // entry값이 숫자라면 스택에 넣는다.
            if let number = Int(entry) {
                stack.append(number)
            } else {
                // 숫자가 아닌 연산자라면 스택에 담긴 숫자 두개를 빼서 연산자와 함께 계산하고
                // 다음 연산을 위해 다시 스택에 넣는다.
                let operand = entry
                let number1 = stack.removeLast()
                let number2 = stack.removeLast()
                stack.append(calculateNumbers(number2, number1, operand))
            }
        }
        // 반복이 종료되면 스택에 담긴 수를 꺼내 리턴한다.
        return stack.removeLast()
    }
    
    // 숫자 두개와 연산자를 통해 연산하는 함수
    func calculateNumbers(_ num1: Int, _ num2: Int, _ operand: String) -> Int {
        switch operand {
            case "+":
            return num1 + num2
            case "-":
            return num1 - num2
            case "/":
            return num1 / num2
            case "*":
            return num1 * num2
            default:
            return 0
        }
    }
}