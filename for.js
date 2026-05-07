// hurd--------------------------
// for(let i=1; i<=10;i++){
//     console.log(`${i}-iin hurd`)
//     for(j=1; j<=10; j++){
// console.log(`${i}*${j}=${i*j}`)
// }
// }

// string----------------------

// let word ="Hello World";
// console.log(word.length)
// console.log(word.toUpperCase())
// console.log(word.toLowerCase())
// console.log(word.includes("h"))
// console.log(word.indexOf("l"));
// console.log(word.slice(3,6));
// console.log(word.replace("World", "Everyone"));
// console.log(word.trim())

// let string="Mongolia";
// console.log(string.length);

// let name="Java";
// console.log(name.toUpperCase());
// let city="Ulaanbaatar";
// console.log(city.toLowerCase());
// let sentence="I am learning JavaScript."
// if(sentence.includes("JavaScript")){
//     console.log(true)
// }else{
//     console.log(false)
// }
// let fruit="Banana";
// console.log(fruit.indexOf("a"));
// console.log(fruit[4]);
// let text="Hello World";
// console.log(text.slice(0-5,));
// let lang="I Love Java";
// console.log(lang.replace("Java", "JavaScript"))
// let greeting="Hi There";
// console.log(greeting.trim())

// array---------------------------

// let hobby=["music","hiking","tarot","Coffee"];
// console.log(hobby);
// let firstHobby=hobby[0];
// console.log(firstHobby);
// console.log(hobby[3]);

// let fruits=["a","b","c","d","e","f","g"];
// let totalFruit=fruits.length
// console.log(totalFruit);

// let name=["Ucral", "enerel", "uyanga","herlen", "Selenge"];
// console.log(name.length);

// let lastName=name[4]
// console.log(lastName);
// console.log(name[2]);
// console.log(name.slice(1,3));
// console.log(name.indexOf("Ucral"));

// const friuts=["apple","banana","orange","kiwi","mango","grape"];
// console.log(friuts[2]);
// console.log(friuts.slice(3,5));
// console.log(friuts.indexOf("grape","kiwi"));
// console.log(friuts.length);
// for(let i=0;i<friuts.length;i++){
// console.log(friuts[i]);}

// const numbers=[1,2,3,4,5,6,7,8,9,10];
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         console.log("evenNumber")
//     }else{
//         console.log("odd Number")
//     }
// }

// const numbers=[1,2,3,4,5,6,7,8,9,10];
// let odd=[];
// let oddIndex=0;
// let even=[];
// let evenIndex=0;
//  for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         even[evenIndex]=numbers[i]
//         evenIndex++
//     }else{
//         odd[oddIndex]=numbers[i]
//         oddIndex++
//     }
//  }
// console.log("even",even);
// console.log("odd",odd);









// --------------
let  mas=[1,2,3,4,5,6,7,8,9,10]
let  reverse=[]
for( let  i=mas.length-1; i>=0;i--){
    reverse.push(mas[i])
}
console.log(reverse);





let arr = [1, 5, 2, 8, 3];
let count = 0;

for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
        count++;
    }
}
console.log(count); // 2 (5 болон 8-ыг тоолно)



let arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        console.log(arr[i] + " " + arr[j]);
    }
}










let arr = [1, 2, 3, 4, 5];
let target = 5;
let count = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
            count++;
        }
    }
}
console.log(count); // 2 (1+4 болон 2+3)







let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let result = [];

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            result.push(arr1[i]);
        }
    }
}
console.log(result); // [3, 4]



let arr = [4, -3, 2, -1, 0, -5];
let result = [];

// Эхлээд сөрөг тоонуудыг нэмэх
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        result.push(arr[i]);
    }
}

// Дараа нь эерэг тоо болон 0-ийг нэмэх
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
        result.push(arr[i]);
    }
}
console.log(result); // [-3, -1, -5, 4, 2, 0]