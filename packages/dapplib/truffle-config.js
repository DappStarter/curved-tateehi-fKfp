require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift riot magic million grace drive equal gift'; 
let testAccounts = [
"0xdd44b52f4813b7ea97fa9a1c872e413e1d619f384d56f66081199d4e752397ab",
"0xfd9552a21593fe70e5526a0b4f47ded6aa45887536a893e3ee48ec3750475069",
"0xcc880602cc6bc5eeac62119fac84c48f569175181b5954af6fe073646cecbd14",
"0xfbd285ddb2a8ccd4ad507deb88f08840411fb5c9d87fab500c6082c6f1c83e07",
"0x342eb03d3391ee3c560a46c96f52ad9cde606f7f7cb56858602ab8cd0ea5f916",
"0xddff8fca8e49c2c0ac08339776b09dc089f6ee9f31e431d467deb943c633e70f",
"0x84be249e57d9fe244b4fccd9a453c43094dcab3bfaaa6d80c6783620a096e03e",
"0x8d98cb856ff8b975a4ceced534dea4373c0276e023a483ea4135ad1fa6c78a3c",
"0xe00cee4caa0703482ce48537e5b085d221d00dd34b24e72aba62c8752c479f9a",
"0x046b7b4e167262478a88de02ea144ba9dac66a58754dfb1d51e056e4516a2950"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

