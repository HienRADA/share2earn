# Referral Program

Configuration .env file

```shell
PRIVATE_KEY=
RINKEBY_API_KEY=
ETHERSCAN_API_KEY=
BSC_API_KEY=
```

The following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
```

Build & Deploy BSC testnet | RIRToken

```shell

npx hardhat run scripts/RIRToken/deploy.js --network testnet
// Copy Token address to tokenAddresses.js

// npx hardhat verify --network testnet TODO_token_address
```

Build & Deploy BSC testnet | MEOToken

```shell

npx hardhat run scripts/MEOToken/deploy.js --network testnet
// Copy Token address to tokenAddresses.js

// npx hardhat verify --network testnet TODO_token_address
```

NOT USE | Build & Deploy BSC testnet | Valid User Contract

```shell

// npx hardhat run scripts/ValidUserContract/deploy.js --network testnet
// Copy Contract address to proxyAddresses.js

// npx hardhat verify --network testnet TODO_token_address
```

Build & Deploy BSC testnet | Referral Contract

```shell

npx hardhat run scripts/ReferralContract/deploy.js --network testnet
// Copy Proxy address to proxyAddresses.js
// Top-up tokens
npx hardhat run scripts/ReferralContract/topUpContract.js --network testnet

// Add program, change program code in source
npx hardhat run scripts/ReferralContract/addProgram.js --network testnet

// Change info program
npx hardhat run scripts/ReferralContract/updateProgram.js --network testnet


// Set Admin
npx hardhat run scripts/ReferralContract/setAdmin.js --network testnet

// Bot
npx hardhat run scripts/ReferralContract/botTopup.js --network testnet
npx hardhat run scripts/ReferralContract/botJoinProgram.js --network testnet

// npx hardhat run scripts/ReferralContract/upgradeContract_v2.js --network testnet
// npx hardhat run scripts/ReferralContract/upgradeContract_v3.js --network testnet

npx hardhat run scripts/ReferralContract/getImplementationAddress.js --network testnet
// Get implementation address above
// npx hardhat verify --network testnet TODO_implementation_address

```
