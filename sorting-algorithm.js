let bubbleSorting = (inputArray) => {
    let checked;
    do {
        checked = false;
        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i] > inputArray[i + 1]) {
                let tmp = inputArray[i];
                inputArray[i] = inputArray[i + 1];
                inputArray[i + 1] = tmp;
                checked = true;
            }
        }
    } while (checked);
    return inputArray;
};