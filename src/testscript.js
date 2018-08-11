(() => {
    const fs = require('fs-extra');
    const myPkgFile = fs.readFileSync('./package.json');
    
    document.write(myPkgFile);
})()