// https://eth-ropsten.alchemyapi.io/v2/7jLqE6ZWgoZsGzpFTkJaUF_yraPzcqz0
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity : '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/7jLqE6ZWgoZsGzpFTkJaUF_yraPzcqz0',
      accounts : ['']
    }
  }
}

