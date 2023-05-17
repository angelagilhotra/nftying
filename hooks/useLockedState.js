import { useEffect, useState } from "react";

const getLockedState = async ({ walletAddress, contractAddresses, strategy, chain }) => {
  const res = await fetch("/api/getLockedState", {
    method: "POST",
    body: JSON.stringify({
      address: walletAddress,
      contractAddresses,
      strategy,
      chain: chain ? chain : "ETH_MAINNET",
    })
  }).then((r)=> r.json())
  console.log("res:", res);
  return res;
}

const useLockedState = ({
  walletAddress, contractAddresses, chain, strategy
  }) => {
  const [isLocked, setIsLocked] = useState(true);
  const fetchForLockedState = async () => {
    const lockedState = await getLockedState({ walletAddress, contractAddresses, chain, strategy });
    setIsLocked(lockedState.isLocked);
  }
  useEffect(() => {
    fetchForLockedState();
  }, [])
  return {
    fetchForLockedState, isLocked
  }
}

export default useLockedState;
