module.exports = {
  compilers: {
    solc: {
      version: "0.5.11",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
  networks: {
    development: {
      host: "127.0.0.1",
      network_id: "*",
      port: 8545,
    },
  },
  plugins: ["solidity-coverage"],
};
