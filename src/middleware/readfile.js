// const fs = require('fs');
// const util = require('util');

// // Convert fs.readFile into Promise version of same    
// const readFile = util.promisify(fs.readFile);

// export const getStuff=()=> {
//   return readFile('test');
// }

// // Can't use `await` outside of an async function so you need to chain
// // with then()
// getStuff().then(data => {
//   console.log(data);
// })


// Node.js program to demonstrate
// the fs.readFile() method
// Include fs module
export const getdata=()=>{

    const fs = require('fs');

    fs.readFile('D:/Projects/react/passman/passman/src/middleware/file.txt', 'utf8' , (err, data) => {
      if (err) {
        console.error(err);
        return
      }
      console.log(data);
    });

}
