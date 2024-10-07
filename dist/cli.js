"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const commander_1 = require("commander");
/**
/**
 * Main function to execute the CLI command for creating a new React project.
 *
 * This function is invoked when the CLI command `pnpx @wuchuheng/react <directory>` is executed.
 * It handles the following tasks:
 * 1. Validates the input to ensure a directory name is provided.
 * 2. Copies the template project files to the specified directory.
 * 3. Installs the necessary dependencies using pnpm.
 * 4. Provides instructions to the user on how to start the development server.
 *
 * Usage:
 *   pnpx @wuchuheng/react <directory>
 *
 * @throws {Error} If the directory name is not provided or if any operation fails.
 */
function main() {
    // 1. Handling input.
    // // 1.1 Get the directory name from the command line arguments.
    // const projectName = process.argv[2] || 'my-react-app';
    // // 1.1.1 Validate the project name is not created in the current directory.
    // const currentDir = process.cwd();
    // const projectDir = path.join(currentDir, projectName);
    // if (fs.existsSync(projectDir)) {
    //     throw new Error(`Directory ${projectName} already exists.`);
    // }
    const program = new commander_1.Command();
    program
        .name('@wuchuheng/react')
        .description('CLI to create a new React project')
        .argument('<directory>', 'Directory to create the project in', 'my-react-app') // Set default value
        .action((directory) => {
        const currentDir = process.cwd();
        const projectDir = path_1.default.join(currentDir, directory);
        if (fs_1.default.existsSync(projectDir)) {
            console.error(`Error: Directory ${directory} already exists.`);
            process.exit(1);
        }
        console.log(`Creating project in ${directory}...`);
        // Add your project creation logic here
    });
    program.parse(process.argv);
    // 2. Process the logic.
    // 3. Return the result.
}
main();
// const projectName = process.argv[2];
// const currentDir = process.cwd();
// const projectDir = path.join(currentDir, projectName);
// if (process.argv.length < 3) {
//   console.log("You have to provide a name to your app.");
//   console.log("For example :");
//   console.log("    npx @wuchuheng/express my-app");
//   process.exit(1);
// }
// async function main() {
//   try {
//     console.log("Copying project files...");
//     await copyDir(path.join(__dirname, "../template"), projectDir);
//     console.log("Installing dependencies...");
//     execSync(`cd ${projectDir} && pnpm install && pnpm run build`);
//     console.log("The installation is done!");
//     console.log(`Done. Now run:`);
//     console.log(`\x1b[1m\x1b[32m
// cd ${projectName}
// pnpm install
// pnpm dev \x1b[0m
// `);
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//     process.exit(1);
//   }
// }
// // Helper function to copy directory recursively
// function copyDir(src, dest) {
//   return new Promise((resolve, reject) => {
//     fs.mkdir(dest, { recursive: true }, (err) => {
//       if (err) return reject(err);
//       fs.readdir(src, { withFileTypes: true }, (err, entries) => {
//         if (err) return reject(err);
//         let completed = 0;
//         if (entries.length === 0) resolve();
//         entries.forEach((entry) => {
//           const srcPath = path.join(src, entry.name);
//           const destPath = path.join(dest, entry.name);
//           if (entry.isDirectory()) {
//             copyDir(srcPath, destPath)
//               .then(() => {
//                 if (++completed === entries.length) resolve();
//               })
//               .catch(reject);
//           } else {
//             fs.copyFile(srcPath, destPath, (err) => {
//               if (err) return reject(err);
//               if (++completed === entries.length) resolve();
//             });
//           }
//         });
//       });
//     });
//   });
// }
// main();
