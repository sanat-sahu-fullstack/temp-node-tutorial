const { readFile,writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromisify = util.promisify(readFile);
// const writeFilePromisify = util.promisify(writeFile);

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }

// getText('./content/first.txt')
// .then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err)
// })

const start = async () => {
    try{
        // const first = await getText('./content/first.txt');
        // const second = await getText('./content/second.txt');

        // const first = await readFilePromisify('./content/first.txt', 'utf8');
        // const second = await readFilePromisify('./content/second.txt', 'utf8');
        // await writeFilePromisify('./content/result-mind-grenade,txt', `This is awesome: ${first}, ${second}`, {flag: 'a'})

        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-mind-grenade.txt', `This is awesome: ${first}, ${second}`, {flag: 'a'})
        console.log(first, second);
    }catch(error) {
        console.log(error);
    }
}

start();