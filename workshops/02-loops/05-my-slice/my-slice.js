// YOUR CODE BELOW
function mySlice(orgStr, start, end) {
    let newStr = '';

    if (start === undefined) {
        return orgStr;
    }
    if (end === undefined) {
        end = orgStr.length;
    }

    for (let i = start; i < end; i++) {
        newStr += orgStr[i];
    }
    return newStr;
}