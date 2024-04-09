//// Bai tap 1
// let n = ["Water", "Earth", "Wind", "Fire",1,4,2,5,2,123];
// let flag = false;
// let numberLength = n.length;
// for(let i =0; i <= n.length-1; i++)
// {
//     if(!isNaN(n[i]) && Number.isInteger(n[i]))
//     {
//         console.log(n[i]);
//         flag = true;
//     }
// }
// if(!flag)
// {
//     console.log("khong ton tai so nguyen");
// }


///Bai tap 2
// const arr = [12903,1,7,"Cookie","Banh Mi","Sanhwich"];

// const userInput = prompt("Nhap vao gia tri bat ki ");
// let found = false;

// for(let i=0; i<arr.length; i++)
// {
//     if(arr[i] == userInput)
//     {
//         console.log(`phan tu vua nhap ${arr[userInput]} co vi tri la ${i}`);
//         found = true;
//         break;
//     }
// }
// if(!found)
// {
//     console.log("phan tu khong co trong mang");
// }

// ///Bai tap 3
// const arr = [1,2,3,4,5,6,7,8,12,54,12,1,1,1,1341,24,1];

// const userInput = +prompt("Nhap vao so bat ki :")
// let count = 0;
// for(let i = 0; i < arr.length; i++)
// {
//     if(arr[i] === userInput)
//     {
//         count++;
//     }
// }
// console.log(`So lan phan tu ${userInput} xuat hien trong mang la ${count}`);


///bai tap 4
// const a = +prompt("Nhap vao so nguyen duong a : ");

// const b = +prompt("Nhap vao so nguyen duong b : ");
// const arr = [];
// for(let i = 0; i <=a; i++)
// {
//     if(i%b ===0)
//     {
//         arr.push(i);
//     }
// }
// console.log(arr);

///bai tap 5
// const arr = [1,2,3,4,5,6,7,8,12,54,12,1,1,1,1341,24,1];
// console.log(`chuoi truoc khi dao nguoc: ${arr}`);
// arr.reverse();
// console.log(`chuoi sau khi dao nguoc ${arr}`);

/// bai tap 6
// const arr = [1,2,-3,4,-5,6,-7,8];
// console.log(`ham truoc khi sap xep ${arr}`);
// for(let i = 0; i < arr.length; i++)
// {
//     for(let j = 0; j < arr.length-i-1; j++)
//     {
//         if(arr[j]> arr[j+1])
//         {
//             var temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
// }console.log(`ham sau khi sap xep ${arr}`);

///// bai tap 8
// const array = [1, 2, 3, 2, 4, 5, 4, 5];
// console.log(` ham ban dau ${array}`);
// let duplicates = [];

// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[i] === array[j]) {
          
//             if (!duplicates.includes(array[i])) {
//                 duplicates.push(array[i]);
//             }
//         }
//     }
// }
// console.log(duplicates);

/// bai tap 9

// let arrayNumber = [1, 2, 4, 5, 8];

// arrayNumber.sort();
// for(let i = 1; i < arrayNumber[arrayNumber.length - 1]; i++){
//     let isCheck = false;
//     for(let j = 0; j < arrayNumber.length - 1; j++){
//         if(i === arrayNumber[j]){
//             isCheck = true;
//         }
//     }

//     if(!isCheck){
//         console.log(i);
//         break;
//     }
// }

//bai tap 10
let array1 = [1, 2, 3, 4, 5];

let array2 = [-3, -1, 0, 1, 5];

let array3 = [1, 5, 6, 7];

let i = 0;
let j = 0;
let k = 0;
while(i < array1.length && j < array2.length && k < array3.length){
    if(array1[i] === array2[j] && array2[j] === array3[k]){
        console.log(array1[i]);
        i++;
        j++;
        k++;
    }else if(array1[i] < array2[j]){
        i++;
    }else if(array2[j] < array3[k]){
        j++;
    }else{
        k++;
    }
}