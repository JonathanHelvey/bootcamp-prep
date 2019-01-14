// YOUR CODE BELOW
function crazyCaps(str) {
    let caps = '';

    for (let i = 0; i < str.length; i++) {
        let curLetter = str[i];

        if (i % 2 === 0) {
            caps += curLetter
        } else {
            curLetter = curLetter.toUpperCase();
            caps += curLetter;
        }
    }
    return caps;
}