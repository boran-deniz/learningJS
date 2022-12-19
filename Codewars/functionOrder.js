function order(words){
    let wordsArray = words.split(' ');
    wordsArray
    let sentenceArray = [];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    wordsArray.forEach(word => {
        let splitWord = word.split('');
        let n = splitWord.find(element => parseInt(element))
        sentenceArray.push([word, parseInt(n)])
    });
    sentenceArray.sort((a,b) => a[1] - b[1]).map(splitWord => splitWord.splice(1,1))
    return sentenceArray.join(' ')
  }

console.log(order("is2 Thi1s T4est 3a"))