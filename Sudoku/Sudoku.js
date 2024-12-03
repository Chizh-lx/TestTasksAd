console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]  
  ]
  ));

function validSolution(sudoku = []) {

    for (let row of sudoku) {
        for (let element of row) {
            if (element === 0) {
                return false;
            }
        }
    }

    const uniqueNumbers = sudoku.map(subArr => [...new Set(subArr)]);
    
    uniqueNumbers.forEach(sudoku => {
        if (sudoku.length < 9)
        {
            return false;
        }
    });

    for (let col = 0; col < 9; col++) {
        const columnValues = new Set();

        for (let row = 0; row < 9; row++) {
            const value = sudoku[row][col];

            if (columnValues.has(value)) {
                return false;
            }

            columnValues.add(value);
        }
    }

    for (let boxRow = 0; boxRow < 9; boxRow += 3) {
        for (let boxCol = 0; boxCol < 9; boxCol += 3) {
            const cubeValues = new Set();

            for (let row = boxRow; row < boxRow + 3; row++) {
                for (let col = boxCol; col < boxCol + 3; col++) {
                    const value = sudoku[row][col];
                    
                    if (cubeValues.has(value)) {
                        return false;
                    }

                    cubeValues.add(value);
                }
            }
        }
    }

    return true;
  }