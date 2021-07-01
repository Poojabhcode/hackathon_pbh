const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Whhich tutorial you want?', name => {
    console.log(`please wait finding ${name}!`);
   
  
  readline.question('Which theory content you want?', name1 => {
    console.log(`please wait sending ${name1}!`);
    console.log(name1);
    readline.close();
    readline.close();
  });});
  
