
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    return (matrix === undefined) ? result : notEmpty();
    function notEmpty() {
        for (i = 0; i < matrix.length; i++) {
            if (i % 2 !== 0) {
                for (k = matrix[i].length - 1; k >= 0; k--) {
                    result.push (matrix[i][k]);
                }
            } 
            else {
                result.push(...matrix[i]);
            }
        }
    return result;
    }
}
