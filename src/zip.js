// const { exec } = require("child_process");
// const path = require('path');
// const fs = require('fs');

// const currentPath = path.resolve();
// const filesDir = path.resolve(currentPath, 'files');
// const zippedDir = path.resolve(currentPath, 'zipped');

// const zipFile = path.join(zippedDir, 'text.zip' )

// let zipCommand = `zip ${zipFile} ${filesDir + path.sep}/*`;  // path.sep makes the correct backslash for the OS
// console.log(zipCommand);

// exec(zipCommand, (error, stdout, stderr) => {
//   if (error) { // Some error with Node
//     console.log("error", error.message);
//   }
//   if (stderr) { // Some error with the Command
//     console.log("stderr", stderr);
//   }

//   if (error || stderr) {
//     return;
//   }

//   console.log(stdout);
// });

const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const currentPath = path.resolve();
const filesDir = path.resolve(currentPath, "files");
const zippedDir = path.resolve(currentPath, "zipped");

const zipFile = path.join(zippedDir, "text.zip");

if (!fs.existsSync(zippedDir)) {
  fs.mkdirSync(zippedDir)
}

let zipCommand;
if (process.platform == "win32") {
  zipCommand = `powershell Compress-Archive -Path ${
    filesDir + path.sep
  }* -Destination Path ${zipFile}`;
} else {
  zipCommand = `zip ${zipFile} ${filesDir + path.sep}/*`; // path.sep makes the correct backslash for the OS
}

exec(zipCommand, (error, stdout, stderr) => {
  if (error) {
    // Some error with Node
    console.log("error", error.message);
  }
  if (stderr) {
    // Some error with the Command
    console.log("stderr", stderr);
  }

  if (error || stderr) {
    return;
  }

  console.log(stdout);
});
