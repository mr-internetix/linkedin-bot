import ora from 'ora';
import chalk from 'chalk';
import boxen from 'boxen';
import inquirer from 'inquirer';
import emailPrompt from 'email-prompt';

console.log(boxen("welcome to linkedin Bot {-@mr-internetix}", {padding : 1 , marigin :1 }))
console.log(chalk.blue('Hello world!'));


// email prompt  
let email;

try {
  email = await emailPrompt({
    /* options */
  });
} catch (err) {
  console.log('\n> Aborted!');
}

console.log('\n> Hello ' + email);



