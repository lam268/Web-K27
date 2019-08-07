const fs = require('fs');   // uu tien require dung const 

fs.readFile('data.txt',{encoding: 'utf8'}, (err, data) => {
    console.log('Error', err);
    console.log('Data', data);
})

fs.writeFile('./data.txt','data.txt',(err) => {
    if (err) throw err;
    console.log('The file has been saved!')
})

// fs.watchFile('./data.txt',{interval:0}, (current,previous) => {
//    console.log('File changed');
// })