// Q50. Toggle Case of Each Character
// Change lowercase to uppercase and uppercase to lowercase.

// var str = "hEllO world";
// var res = "";

// for (var i = 0; i < str.length; i++) {
//     if (str[i] >= "A" && str[i] <= "Z") {
//         res = res + str[i].toLowerCase();
//     }
//     else {
//         res = res + str[i].toUpperCase();
//     }
// }
// console.log(res);

// var res2 = "";

// for (let i = 0; i < str.length; i++) {
//     let ascii = str.charCodeAt(i);
//     if (ascii >= 65 && ascii <= 90) {
//         ascii = ascii + 32;
//     }

//     else if (ascii >= 97 && ascii <= 122) {
//         ascii = ascii - 32;
//     }

//     res2 = res2 + String.fromCharCode(ascii);
// }
// console.log(res2)

// var res3= "";
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == str[i].toUpperCase()) {
//         res3 = res3 + str[i].toLowerCase();

//     }

//     else {
//         res3 = res3 + str[i].toUpperCase();

//     }
// }
// console.log(res3)