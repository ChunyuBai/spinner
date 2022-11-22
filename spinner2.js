// // process.stdout.write('hello from spinner1.js... \rheyyy\n');
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

let count = 0;
let spinner = ["|","/","-",`\\`,"|"];
for(let i = 0; i < spinner.length; i++){
  setTimeout(()=>{
    process.stdout.write(`\r ${spinner[i]}`)
  },count);
  count += 200;
}



