// console.log(process.argv); // argv --- are command line arguments in an array
//  const { exec } = require('child_process');
// import { exec } from 'child_process';
// import open from 'open';

// const args = process.argv.slice(2);
// const command = args[0];
// const favorite = args[1];
// const url = args[2];


// function displayMenu() {
//   console.log("open <favorite>        : Open a saved favorite.");
//   console.log("add <favorite> <url>   : add a new favorite for some URL");
//   console.log("rm <favorite>          : remove a saved favorite.");
// }

// function open(favorite) {
//   let url;
//   if (favorite === "goog") {
//     url = "https://google.com";
//   } else if (favorite === "social") {
//     url = "https://instagram.com";
//   } else if (favorite === "code") {
//     url = "https://leetcode.com";
//   } else {
//     console.log("shortcut", shortcut, "does not exist");
//     return;
//   }

//   let command;

//   switch (process.platform) {
//     case "darwin":
//       command = `open -a "Google Chrome" ${url}`;
//       break;
//     case "win32":
//       command = `start chrome ${url}`;
//       break;
//     case "linux":
//       command = `google-chrome ${url}`;
//       break;
//     default:
//       console.log("Unsupported Platform");
//   }

//   console.log('opening', url);
//   exec(command, (error, stdout, stderr) => {
//     if (error) {
//       console.log("error:", error.message);
//     }

//     if (stderr) {
//       console.log("stderr:", stderr);
//     }

//     if (error || stderr) {
//       return;
//     }

//     console.log(stdout);
//   });
// }

// function add(favorite, url) {
//   console.log("adding", favorite, url);
// }

// function rm(favorite) {
//   console.log("rm", favorite);
// }

// if (!command || !favorite || command === "help") {
//   displayMenu();
// } else {
//   switch (command) {
//     case "open":
//       open(favorite);
//       break;
//     case "add":
//       if (!url) {
//         displayMenu();
//         break;
//       }
//       add(favorite, url);
//       break;
//     case "rm":
//       rm(favorite);
//     default:
//       displayMenu();
//       break;
//   }
// }
