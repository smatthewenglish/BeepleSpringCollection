/**
 * voilà
 */

const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "detect satoshi rude image ugly dwarf old genre cradle excuse hybrid crowd";
const infuraKey = "97193bbbf900404abd0de383309c9fc9";

module.exports = {

  networks: {

    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, "wss://rinkeby.infura.io/ws/v3/35723fe63d4e4b2e9305713aa352f369"),
      network_id: 4,      
      gas: 5000000,
      gasPrice: 5e9,
      confirmations: 2,  
      timeoutBlocks: 200,  
      skipDryRun: true,
      networkCheckTimeout: 100000
    },

  },

  mocha: {},

  compilers: {
    solc: {
      version: "^0.5.0",
    }
  }
}