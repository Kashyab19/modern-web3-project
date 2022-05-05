// https://eth-ropsten.alchemyapi.io/v2/7jLqE6ZWgoZsGzpFTkJaUF_yraPzcqz0
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity : '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/7jLqE6ZWgoZsGzpFTkJaUF_yraPzcqz0',
      accounts : ['e6d3cd0aa5d923c6bd93b919f44b4422f5e011258f672ae738149ea2a986d140']
    }
  }
}

