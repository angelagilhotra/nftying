
import { useState, useEffect } from "react";
import styles from "../styles/Gate.module.css";

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

const Gate = ({
  contractAddresses,
  walletAddress,
  strategy, // "any", "all"
  chain,
  children
}) => {
  const [isLocked, setIsLocked] = useState(false);
  const fetchForLockedState = async () => {
    const lockedState = await getLockedState({ walletAddress, contractAddresses, chain, strategy });
    setIsLocked(lockedState.isLocked);
  }
  useEffect(() => {
    fetchForLockedState();
  }, [])


  if (isLocked) {
    return (
     <div className={styles.container}>
        Locked
      </div>
    )
  }
  return (
    <div className={styles.container}>
      Unlocked
      {children}
    </div>
  )

}

export default Gate;
