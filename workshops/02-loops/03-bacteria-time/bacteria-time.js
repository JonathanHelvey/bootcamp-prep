// YOUR CODE BELOW
function bacteriaTime(curNum, targetNum) {


    if (targetNum < curNum) {
        return 'targetNum must be larger than currentNum';
    }
    let minutes = 0;

    while (curNum < targetNum) {
        //double the number of bacteria
        curNum *= 2
        minutes += 20
    }

    return minutes;

}