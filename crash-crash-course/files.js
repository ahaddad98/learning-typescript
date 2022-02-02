const fs = require('fs');

// reading from a file

// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else
//     {
//         console.log(data.toString());
//     }
// });

// console.log('lats_line');

// writing files

fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
    console.log('file was writing');
});
fs.writeFile('./docs/blog1.txt', '1hello, world second time', () => {
    console.log('file was writing');
});
fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
    console.log('file was writing');
});

// directories 

if (!fs.existsSync('./assets')){

    
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    });
}