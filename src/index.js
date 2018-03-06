module.exports = function longestConsecutiveLength(array) {


    var count = 1;
    var maxCount = 0;

    array.sort(function (a, b) {
        return a - b
    });

    if (array.length == 1) {
        return 1;
    }

    for (var i = 0; i < array.length - 1; i++) {
        if ((array[i + 1] - array[i]) < 2) {
            count++
        }
        else
            count = 1;

        if (array[i + 1] == array[i]) {
            count--
        }

        if (maxCount < count) {
            maxCount = count;
        }

    }
    return maxCount;
};