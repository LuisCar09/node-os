const netWork = require('os')


const netWorkInter = () => {
    // console.log(netWork.networkInterfaces());
   
    
    for (const [name,iface] of Object.entries(netWork.networkInterfaces())) {
        console.log(`Interfaz: ${name}`);
        iface.forEach(details => {
            console.log(`  Dirección: ${details.address}`);
            console.log(`  Familia: ${details.family}`);
            console.log(`  Interno: ${details.internal}`);
          });
    }
    return '------------------------';
}
module.exports = netWorkInter