import ora from 'ora';
import chalk from 'chalk';
import boxen from 'boxen';
import inquirer from 'inquirer';
//import emailPrompt from 'email-prompt';
import start from './automate.js'
console.log(boxen("welcome to linkedin Bot {-@mr-internetix}", {padding : 1 , marigin :1 }))


// email prompt  
let email;
let password;

// get credentials 
try {
   const credentials = await inquirer.prompt([{name : 'email' , type : "email" ,  message : " Enter Your Email "  }, 
    {name : 'password',type : 'input' , message : "Enter your Password ! "} ]);
    const spinner = ora('Please wait initializing ').start();
    const initialResponse = await start(credentials);
    //console.log(initialResponse)
    spinner.text = 'Authenticating Your credentials';
    if(initialResponse){
    spinner.color = 'green';
    spinner.text = " Sucessfully Logged In";
  }
}catch (err) {
  console.log('\n> Aborted!');

}



