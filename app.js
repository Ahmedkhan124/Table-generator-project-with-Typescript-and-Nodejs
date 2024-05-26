import inquirer from "inquirer";
// printing the message before starting the program
console.log("\nWelcome to my digital table generator\n");
let table = true; // Initialize a boolean variable to control the while loop
// using a while loop to repeatedly ask the user for input
while (table) {
    // prompt  the user to enter a number
    let userAns = await inquirer.prompt([
        {
            name: 'user',
            type: 'number',
            message: 'Enter your number:'
        }
    ]);
    //    if the user enter a valid number
    if (userAns.user) {
        console.log(`\nHere is the table of ${userAns.user}\n`);
        // Generate and print the multiplication table for the entered number
        for (let i = 1; i <= 10; i++) {
            console.log(`${userAns.user} x ${i} = ${userAns.user * i}`);
        }
    }
    else {
        // if the user doesnot enter an invalid number
        console.log("Please enter an input in numeric form");
    }
    // ask the user if they want to generate another table.
    let cont = await inquirer.prompt([
        {
            name: 'again',
            type: 'confirm',
            message: 'Do you want to print again',
            default: false
        }
    ]);
    // ifthe user does not want to generate another table, exit the loop 
    if (cont.again === false) {
        table = false;
        console.log(`\nThanks for using my cli table generator.`);
    }
}
