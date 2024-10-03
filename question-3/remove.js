const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

function removeLogs() {
  if (fs.existsSync(logsDir)) {
    fs.readdir(logsDir, (err, files) => {
      if (err) {
        console.error("Error reading directory:", err);
        return;
      }

      files.forEach(file => {
        const filePath = path.join(logsDir, file);
        console.log(`Deleting file: ${file}`);  
        fs.unlinkSync(filePath); 
      });

      fs.rmdirSync(logsDir);
      console.log('Logs directory deleted');
    });
  } else {
    console.log('No Logs directory found');
  }
}

removeLogs();
