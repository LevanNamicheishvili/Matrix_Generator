const generateRandomMatrix = (rows, columns) => {
    const matrix = Array.from({ length: rows }, () =>
        Array.from({ length: columns }, () => Math.floor(Math.random() * 10))
    );
    return matrix;
};

const printMatrix = (matrix) => {
    matrix.forEach(row => console.log(row.join('\t')));
};


const rows = Math.floor(Math.random() * 5) + 1;
const columns = Math.floor(Math.random() * 5) + 1;

const randomMatrix = generateRandomMatrix(rows, columns);

console.log(`Random Matrix with ${rows} rows and ${columns} columns:`);
printMatrix(randomMatrix);

