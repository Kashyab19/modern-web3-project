// npx hardhat run scripts/deploy.js --network ropsten 
const main = async () => {
  
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions Contracts are deployed to:", transactions.address);
}

const runMain = async () => {
  
  try {
    await main();
    process.exit(0);
  } 

  catch (e) {
    console.error(e);
    process.exit(1);
  }
}

runMain();