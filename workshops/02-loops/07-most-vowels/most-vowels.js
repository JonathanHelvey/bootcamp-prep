// YOUR CODE BELOW
function mostVowels(str) {
    let wordsArray = str.split('.').join('').split(',').join('').split(' ');
    let vowels = 'aeiouAEIOU';
    let maxWord = '';
    let maxVowelCount = 0;


    for (let j = 0; j < wordsArray.length; j++) {
        let curWord = wordsArray[j]

        let curVowelCount = 0;
        //this loops is to count vowels per word, when its done looping, we have finished count this word
        for (let i = 0; i < curWord.length; i++) {
            let curLetter = curWord[i];

            //We found a vowel!
            if (vowels.indexOf(curLetter) !== -1) {
                curVowelCount++
            }
        }
        if (curVowelCount > maxVowelCount) {
            maxVowelCount = curVowelCount;
            maxWord = curWord;
        }

    }
    return maxWord;
}