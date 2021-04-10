function rotate(matrix) {
    for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
        for (let j = i; j < matrix.length - i - 1; j++) {
            const topLeft = matrix[i][j];
            const bottomLeft = matrix[matrix.length - 1 - j][i];
            const bottomRight = matrix[matrix.length - 1 - i][matrix.length - 1 - j];
            const topRight = matrix[j][matrix.length - 1 - i];
            // Move bl to tl
            matrix[i][j] = bottomLeft;
            // Move br to bl
            matrix[matrix.length - 1 - j][i] = bottomRight;
            // Move tr to br
            matrix[matrix.length - 1 - i][matrix.length - 1 - j] = topRight;
            // Move tl to tr
            matrix[j][matrix.length - 1 - i] = topLeft;
        }
        ;
    }
    ;
}
;
