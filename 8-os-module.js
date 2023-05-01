const os = require('os');
console.log(os.userInfo());

console.log(`the system uptime is ${os.uptime()}`);
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
};

console.log(currentOS);