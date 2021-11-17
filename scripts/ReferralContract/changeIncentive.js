const { ethers, upgrades, hardhatArguments } = require('hardhat');
const { addresses: referralAddresses } = require('./proxyAddresses');

async function main() {
  const [deployer] = await ethers.getSigners();

  const network = hardhatArguments.network;
  const referralAddress = referralAddresses[network];

  console.log("Change incentive with the account:", deployer.address);
  console.log("With ReferralContract address:", referralAddress);

  const program = "PGX";

  const referralContract = await ethers.getContractAt("ReferralContract",referralAddress);
  await referralContract.setIncentiveAmount(program,ethers.utils.parseUnits( "0.03" , 18 ),ethers.utils.parseUnits( "0.015" , 18 ),ethers.utils.parseUnits( "0.002" , 18 ));
  console.log("Change Incentive", program);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });