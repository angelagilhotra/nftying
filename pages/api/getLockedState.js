// @todo
// Importing required libraries from alchemy-sdk
import { Network, Alchemy, NftFilters } from "alchemy-sdk";

const parseContractAddresses = (contractAddresses) => {
  // @todo
  // check for valid address, written, check for the kind of contract
  // return array of strings - strings are contract/token addresses
}

export default function handler (req, res) {
  let isLocked = true;

  const { address, contractAddresses, chain, strategy } = JSON.parse(req.body);

  // check is the user has/doesn't have the reqiured
  // tokens
  console.log({
    address, contractAddresses, chain
  });

  const parsedContractAddresses = parseContractAddresses(contractAddresses)

  console.log({ parsedContractAddresses });

  switch(strategy) {
    case "all": {
      // check for token ownership of all tokens of all addresses
    }
    case "any": {
      // check for token ownership of any token in the array
    }
    default: { /** do nothing */ }
  }

  res.status(200).json({ isLocked });
}