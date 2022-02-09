function disableDib(num) {
    let sum = 0;
    let count = 0;
    for (i = 1; i < num; i++) {
        if (i % 3 == 0) {
            sum = sum + i;
            count = count + 1;
        }
    }
    const avg = sum / count;
    return avg
}

const total = disableDib(50);
console.log(total);