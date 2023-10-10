const generateRandomMatrix = (rows = 1, columns = 1, min = 0, max = 10) => {
    if (typeof rows !== 'number' || typeof columns !== 'number' || rows < 1 || columns < 1) {
      throw new Error('Invalid input for rows and columns');
    }
    if (typeof min !== 'number' || typeof max !== 'number' || min > max) {
      throw new Error('Invalid input for min and max');
    }
  
    return Array.from({ length: rows }, () => new Array(columns).fill(undefined).map(() => Math.floor(Math.random() * (max - min + 1) + min)));
  };
  
  const printMatrix = (matrix) => matrix.forEach(row => console.log(row.join('\t')));
  
  const calculateMatrixSum = (matrix) => matrix.reduce((total, row) => total + row.reduce((rowSum, element) => rowSum + element, 0), 0);
  
  const transposeMatrix = (matrix) => {
    if (matrix.length === 0 || matrix[0].length === 0) {
      return [];
    }
  
    return Array.from({ length: matrix[0].length }, () => new Array(matrix.length).fill(undefined)).map((row, i) => row.map((_, j) => matrix[j][i]));
  };
  
  const rows = Math.floor(Math.random() * 5) + 1;
  const columns = Math.floor(Math.random() * 5) + 1;
  const randomMatrix = generateRandomMatrix(rows, columns);
  
  console.log(`Random Matrix with ${rows} rows and ${columns} columns:`);
  printMatrix(randomMatrix);
  
  console.log('Matrix Sum:', calculateMatrixSum(randomMatrix));
  
  const transposedMatrix = transposeMatrix(randomMatrix);
  console.log('Transposed Matrix:');
  printMatrix(transposedMatrix);