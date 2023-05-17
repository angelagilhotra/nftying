// @todo
// Importing required libraries from alchemy-sdk
import { Network, Alchemy, BigNumber } from "alchemy-sdk";

const parseContractAddresses = (contractAddresses) => {
  // @todo
  // check for valid address, written, check for the kind of contract
  // return array of strings - strings are contract/token addresses
  return contractAddresses.map((address) => address);
}

const isPositiveInteger = (balance) => balance > 0;
const isZero = (balance) => balance === 0;

export default async function handler (req, res) {
  let isLocked = true;
  const { address, contractAddresses, chain, strategy } = JSON.parse(req.body);

  // Setting the API key and network for the Alchemy SDK
  const settings = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network[chain],
  };
  const alchemy = new Alchemy(settings);

  const parsedContractAddresses = parseContractAddresses(contractAddresses)

  const balances = (
    await alchemy.core.getTokenBalances(address, parsedContractAddresses)
  )
  .tokenBalances.map(obj => obj.tokenBalance)
  .map(bal => parseFloat(new BigNumber.from(bal)));

  switch(strategy) {
    case "any": {
      // check for token ownership of any token in the array
      if (balances.some(isPositiveInteger)) {
        isLocked = false;
      }
    }
    break;
    case "all": {
      // check for token ownership of all tokens of all addresses
      if (balances.some(isZero)) {
        isLocked = true;
        break;
      }
      isLocked = false;
    }
    break;
    default: { /** do nothing */ }
  }

  res.status(200).json({ isLocked });
}