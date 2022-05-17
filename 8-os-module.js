const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//metho return the system uptime in seconds
console.log(`The system Uptine is ${os.uptime} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()

}
console.log(currentOS)