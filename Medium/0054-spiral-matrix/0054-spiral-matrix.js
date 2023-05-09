/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // 나선순회
  // 오른쪽 - 아래쪽 - 왼쪽 - 위쪽 순서로 체크하는 함수 생성
  // 이 함수를 반복하여 실행
  let result = [];
  return recur(matrix, result);
};

const recur = function (matrix, result) {
  // 더이상 판단할 matrix가 없으면 순회를 마친것이므로 리턴
  if (matrix.length === 0) return result;

  // matrix의 가로 세로 길이 변수 생성
  const width = matrix[0].length;
  const height = matrix.length;

  // width나 height가 1이면 순회할 필요가 없으므로 matrix 요소를 모두 순서대로 넣는다.
  if (height === 1) {
    for (let i = 0; i < width; i++) {
      result.push(matrix[0][i]);
    }
    return result;
  } else if (width === 1) {
    for (let i = 0; i < height; i++) {
      result.push(matrix[i][0]);
    }
    return result;
  } else {
    // matrix의 가장 위쪽 - 오른쪽 - 아래쪽 - 왼쪽 요소를 결과배열에 넣는다.
    for (let i = 0; i < 4; i++) {
      // 위쪽
      if (i === 0) {
        for (let j = 0; j < width - 1; j++) {
          result.push(matrix[0][j]);
        }
      }
      // 오른쪽
      if (i === 1) {
        for (let j = 0; j < height - 1; j++) {
          result.push(matrix[j][width - 1]);
        }
      }
      // 아래쪽
      if (i === 2) {
        for (let j = width - 1; j > 0; j--) {
          result.push(matrix[height - 1][j]);
        }
      }
      // 왼쪽
      if (i === 3) {
        for (let j = height - 1; j > 0; j--) {
          result.push(matrix[j][0]);
        }
      }
    }
  }
  // 가장 바깥쪽 요소를 제외한 안쪽 matrix 를 만들어 다시 위 로직을 수행한다.
  let innerMatrix = [];
  if (width > 2) {
    for (let i = 1; i < height - 1; i++) {
      innerMatrix.push(matrix[i].slice(1, -1));
    }
  }

  return recur(innerMatrix, result);
};
