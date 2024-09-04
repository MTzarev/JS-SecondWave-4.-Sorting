function sorting(arr) {
    let newArr = arr.sort((a, b) => a - b);
    let finalArr = []

    while (newArr.length > 0) {
        let endNum = newArr.pop();
        finalArr.push(endNum);
        if (newArr.length > 0) {
            let firstNum = newArr.shift()
            finalArr.push(firstNum);
        }
    }
    console.log(finalArr.join(` `));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
