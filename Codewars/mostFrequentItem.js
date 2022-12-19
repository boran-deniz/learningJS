function mostFrequentItemCount(collection) {
    collection = collection.sort();
    collection
    let counter = 1;
    let counterArr = [];
    let baseNum = 0;
    for (i = 0; i <= collection.length; i++) {
      baseNum = collection[i];
      if (collection.length == 0){
        return counter = 0;
      }
      if (baseNum === collection[i+1]){
        counter ++
      } else {
        counterArr.push(counter);
        counter = 1;
      }
    }
    return Math.max.apply(null, counterArr);
  }

  console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]))