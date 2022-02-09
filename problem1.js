/* for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
} */


let count = 0;
for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0) {
        count = count + 1;
        console.log(i)
    }

}
console.log('Total count number= ', count);