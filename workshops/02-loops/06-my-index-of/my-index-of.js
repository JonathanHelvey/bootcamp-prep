// YOUR CODE BELOW

function myIndexOf(source, searchValue, startIdx = 0) {
    for (let i = startIdx; i <= source.length - searchValue.length; i++) {
        let subString = source.slice(i, i + searchValue.length);

        if (subString === searchValue) {
            return i;
        }
    }
    return -1;
}