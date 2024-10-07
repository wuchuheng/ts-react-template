// import fs from 'fs';
// import path from 'path';
// import { execSync } from 'child_process';
// import { exit } from 'process';

// /**
// /**
//  * Main function to execute the CLI command for creating a new React project.
//  *
//  * This function is invoked when the CLI command `pnpx @wuchuheng/react <directory>` is executed.
//  * It handles the following tasks:
//  * 1. Validates the input to ensure a directory name is provided.
//  * 2. Copies the template project files to the specified directory.
//  * 3. Installs the necessary dependencies using pnpm.
//  * 4. Provides instructions to the user on how to start the development server.
//  *
//  * Usage:
//  *   pnpx @wuchuheng/react <directory>
//  *
//  * @throws {Error} If the directory name is not provided or if any operation fails.
//  */
// async function main() {
//   // 1. Handling input.
//   // 1.1 Get the directory name from the command line arguments.
//   const projectName = getProjectNameFromArgs();

//   // 1.2 Validate the cli `pnpm` is installed.
//   validatePnpm();

//   // 2. Process the logic.
//   // 2.1 Copy template project.
//   console.log('Copying project files...');
//   fs.cpSync(path.join(__dirname, '../template'), projectName, { recursive: true });

//   // 2.2 go into the project directory and install dependencies.
//   console.log('Installing dependencies...');
//   execSync('cd ' + projectName + ' && pnpm install', { stdio: 'inherit' });

//   // 2.3 Print the success message in the terminal in green blod color

//   printSuccessMessage(projectName);
//   // 3. Return the result.
// }

// main();

// /**
//  * Get the project name from the command line arguments.
//  *
//  * @returns {string} The project name.
//  * @throws {Error} If the directory name is not provided.
//  */
// function getProjectNameFromArgs() {
//   // 1. Process the input from the command line.

//   // 1.1 Get the project name from the command line arguments.
//   const args = process.argv.slice(2);
//   let projectName = 'my-react-app';
//   if (args.length !== 0) {
//     projectName = args[0];
//   }

//   // 1.2 If the first argument is --help, print the help message and exit.
//   const helpFlagList = ['-h', '--help', '-help'];
//   const helpFlag = args.find((arg) => helpFlagList.includes(arg));
//   if (helpFlag) {
//     printHelpMessage();

//     exit(0);
//   }

//   // 2. Process the logic.
//   // 2.1 Validate the project name.
//   if (fs.existsSync(projectName)) {
//     console.error(`Directory ${projectName} already exists.`);
//     exit(1);
//   }

//   // 3. Return the result.

//   return projectName;
// }

// /**
//  * Print the help message.
//  */
// function printHelpMessage() {
//   console.log('Usage: pnpx @wuchuheng/react <directory>');
//   console.log('Version: 0.0.1');
//   console.log('Create a new React project with a modern tech stack.');
//   console.log('');
// }

// /**
//  * Validate the pnpm is installed.
//  */
// function validatePnpm() {
//   try {
//     execSync('pnpm --version', { stdio: 'ignore' });
//   } catch (error) {
//     console.error('pnpm is not installed. Please install pnpm first.');
//     exit(1);
//   }
// }

// /**
//  * Print the success message.
//  *
//  * @param {string} projectName - The name of the project.
//  */
// function printSuccessMessage(projectName: string) {
//   const blodGreedPrint = (message: string) => {
//     console.log(`\x1b[1;32m${message}\x1b[0m`); // Green bold color
//   };
//   blodGreedPrint('Project created successfully.');
//   blodGreedPrint(`To start the development server, run:`);
//   blodGreedPrint(`cd ${projectName} && pnpm dev`);
//   console.log('');
// }

console.log('hello');
