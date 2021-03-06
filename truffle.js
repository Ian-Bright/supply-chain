const HDWalletProvider = require('truffle-hdwallet-provider')
require('dotenv').config()

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(process.env.MNEMONIC, `https://rinkeby.infura.io/v3/${process.env.INFURA}`)
      },
      network_id: '4',
    },
  }
};
