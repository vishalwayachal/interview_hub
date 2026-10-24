const arrayedFiles = [
  "interview.html",
  "questions_int1.js",
  "questions_hr.js",
  "questions_nodejs.js",
  "questions_php.js",
  "questions_vuejs.js",
  "questions_python.js",
]

// for (let key in arrayedFiles) {
//   // code block to be executed
//   // get index
//   let index = key;

//   console.log(`Loading file: ${arrayedFiles[key]}`);
// }

arrayedFiles.forEach(element => {
    console.log(`Processing file: ${element}`);
});

