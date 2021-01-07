function convertToRoman(num) {
    let roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    let deci = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

 let hold = ""; // variable for holding roman numeral as the for loop iterates through each digit
 let numBefore = 0;

// for loop getting the position of digit which will make a num like 123 to 100 20 and 3
for(let i = 0; i < num.toString().length; i++){
    let numOfZeroes = num.toString().length - (i + 1);
    console.log("num of zeroes = " + numOfZeroes);
    let digitNum = parseInt(num.toString().charAt(i));
    console.log("digit num = " + digitNum);
    for(let j = 0; j < numOfZeroes; j++){
        digitNum = parseInt(digitNum.toString() + "0");
    }
     console.log(digitNum);
     if(deci.indexOf(digitNum) != -1){  // checks to see if the digitNum already exists as one of the options in our arrays at the top
         hold += roman[deci.indexOf(digitNum)];
     }else if(num.toString().charAt(i)<4){  // checks to see if the current digit its in is less than 4, if it is, then it'll go through a loop that will repeat the necessary roman numerals such as III = 3, XXX = 30, CCC = 300
           let zero = "";   
           // This for loop will count the number of zeroes to add so we can get 1, 10, 100, 1000
          for(let l = 0; l < digitNum.toString().length - 1; l++){
              zero += "0";
          }
         console.log("zeroes to add = " + zero);
         // This for loop will find 1, 10, 100, 1000 and repeat it when necessary
         for(let k = 0; k < num.toString().charAt(i); k++){
             hold += roman[deci.indexOf(parseInt(1 + zero))];
         }
     }else{
         // This else statement is for digits > 6 and less than 9 since 4, 5, and 9 are already a part of our array
         let minus = 0;
         minus = digitNum.toString().charAt(i) - 5; // This will identify how far our digitNum is from 5
         numBefore = digitNum.toString().charAt(i) - minus;
         console.log(digitNum.toString().charAt(0));
         console.log("The number before " +digitNum.toString().charAt(0)+ " is "+ numBefore);
         let zero = "";   
         // This for loop will count the number of zeroes to add so we can get 1, 10, 100, 1000
          for(let l = 0; l < digitNum.toString().length - 1; l++){
              zero += "0";
          }
          hold += roman[deci.indexOf(parseInt(numBefore + zero))];  // This acts as the halfway point so if the entire number is 96, then it will display as XCV, then it will initiate the code below so it becomes XCVI
          console.log(hold);
         console.log("Lets subtract " + digitNum + " from " + parseInt(numBefore + zero));   
         for(let k = 0; k < digitNum.toString().charAt(0) - parseInt(numBefore); k++){
         hold += roman[deci.indexOf(parseInt(1 + zero))];
     }
     }
}
    console.log(hold);
 return hold;
}

convertToRoman(978);
