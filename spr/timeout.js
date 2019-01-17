// console.log("start");
// setTimeout(function() {
//     console.log("drugi start")
// }, 2000);
for(let i = 1; i <= 10; i++) {
    setTimeout( function() {
        console.log(i);
    }, i*1000);
}