//Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.//
// let x = 1 
// while (x < 101){
//     if (x % 3 === 0){
//         console.log(x + 'Fizz')}
//         if(x % 5 === 0){
//          console.log(x + 'Buzz')}
//         if (x % 3 === 0 && x % 5 === 0){
//             console.log('Fizz Buzz')}
//             if (x % 3 !==0 && x % 5 !==0){
//                 console.log(x)}
          


// x++
// }
// let n = 3
// while (n < 51)
// {
//         let Prime = true;
//         let divisor = 2; 
//             while (divisor <= Math.sqrt(n)){
//                 if (n % divisor === 0){
//                     Prime = false;
//                     break;
//                 }
//                 divisor++;
//             }
//                 if (Prime){
//                     console.log(n + "Prime");
//                 }
//                 n++;
// }
// let id1 = 42;
// let name1 = "Bruce";
// let occupation1 = "Knight";
// let age1 = "41";
const csv = [
    { ID: 42, Name: "Bruce", Occupation: "Knight", Age: 41 },
    { ID: 57, Name: "Bob", Occupation: "Fry Cook", Age: 19 },
    { ID: 63, Name: "Blaine", Occupation: "Quiz Master", Age: 58 },
    { ID: 98, Name: "Bill", Occupation: "Doctor’s Assistant", Age: 26 }
  ];
  
  for (const person of csv) {
    for (const key in person) {
      console.log(`${key}: ${person[key]}`);
    }
    console.log('\n'); // Separate each person's information with a new line
  }