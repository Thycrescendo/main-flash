require("dotenv").config();
require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers");
require("@typechain/hardhat");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("@nomicfoundation/hardhat-verify");
require("hardhat-deploy");
require("hardhat-deploy-ethers");

// If not set, it uses ours Alchemy's default API key.
// You can get your own at https://dashboard.alchemyapi.io
const providerApiKey = process.env.ALCHEMY_API_KEY  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
// If not set, it uses ours Etherscan default API key.
const etherscanApiKey = process.env.ETHERSCAN_API_KEY || "DNXJA8RX2Q3VZ4URQIWP7Z68CJXQZSC6AW";

module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        // https://docs.soliditylang.org/en/latest/using-the-compiler.html#optimizer-options
        runs: 200,
      },
    },
  },
  defaultNetwork: "localhost",
  namedAccounts: {
    deployer: {
      // By default, it will take the first Hardhat account as the deployer
      default: 0,
    },
  },
  networks: {
    // View the networks that are pre-configured.
    // If the network you are looking for is not here you can add new network settings
    hardhat: {
      forking: {
        url: https://eth-mainnet.alchemyapi.io/v2/${providerApiKey},
        enabled: process.env.MAINNET_FORKING_ENABLED === "true",
      },
    },
    mainnet: {
      url: https://eth-mainnet.alchemyapi.io/v2/${providerApiKey},
      accounts: [deployerPrivateKey],
    },
    // Add other networks as needed
    // ...
  },
  // configuration for harhdat-verify plugin
  etherscan: {
    apiKey: etherscanApiKey,
  },
  deploy: {
    scripts: "./deploy",
  },
  // configuration for etherscan-verify from hardhat-deploy plugin
  verify: {
    etherscan: {
      apiKey: etherscanApiKey,
    },
  },
  sourcify: {
    enabled: false,
  },
};