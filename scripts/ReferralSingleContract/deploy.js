const { ethers, upgrades, hardhatArguments } = require('hardhat');
const { addresses: rirAddresses } = require('../RIRToken/tokenAddresses');

async function main() {
  const [deployer] = await ethers.getSigners();

  const network = hardhatArguments.network;

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const ReferralSingleContract = await ethers.getContractFactory("ReferralSingleContract");

  const contract = await ReferralSingleContract.deploy();

  console.log("Contract address:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });