require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remain evil hunt creek foam taxi'; 
let testAccounts = [
"0xb54060c777168a579f30b81c34d3ea22090245023e8624a75b88b4bacb07ad8a",
"0x2e9467f5b21020fd72b39b4cc875fd1026951e8961733270eda2b015def28be8",
"0xaf4eae208db6744c460e09200881062f2e00ba5f25facea9b191fdb2971057dd",
"0xc7b126d548a4e9f59cc042f071a7948e0b704c2b0a60f453eac6d5380e0d676a",
"0x788dc205f779266c743c7fc4854e6cd51dc7ec2ce082e5bb744c72807710e09e",
"0xa29477793c533d5f678b99386bf1bbbcca532156dd0c20a2839686d9bc228963",
"0x5626a93108f7b89d0fb2e44114c2ea19820ed6ad5f61cc5acaf494d891816f0f",
"0xaf6ce55e24c82e01a025c6379839a987c6863cd6bbfb7e197ad499790670d3e2",
"0x9c17f95e226416349111d3800f4c8ac874db497b33b5bbeffa97bdeb5f3787f1",
"0x9b75786c21d9a3cd3edef82d0b0934b08aea88ac2b4a39bcaec40c2ffb4fa77c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


