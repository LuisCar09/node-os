const os = require('os')



const userModule = () => {
    return `Nombre: ${os.hostname()} tipo: ${os.type()} Versión: ${os.version()} Arquitectura: ${os.arch()} CPUs: ${os.cpus().length} MemoriaTotal: ${((os.totalmem() / 1024) / 1024).toFixed(2)} MemoriaLibre: ${((os.freemem() / 1024) / 1024).toFixed(2)} `
}

// console.log(userModule());
module.exports = userModule;