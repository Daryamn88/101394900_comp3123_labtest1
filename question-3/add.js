const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

function createLogs() {
  // Create the Logs directory if it doesn't exist
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log('Logs directory created');
  }

  // Change the current process to the Logs directory
  process.chdir(logsDir);

  // Create 10 log files
  for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file ${i}`);
    console.log(`${fileName}`);
  }
}

// Call the function to create logs
createLogs();
