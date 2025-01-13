// let i = 1;
// while (i <= 3) {
//     var j = i;
//     setTimeout(() => {
//         console.log(j);
//     }, i * 1000);
//     i++;
// }

for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
}