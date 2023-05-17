import { useState, useEffect } from "react";
import styles from "../styles/Gate.module.css";
import useLockedState from "../hooks/useLockedState";

const Gate = ({
  contractAddresses,
  walletAddress,
  strategy, // "any", "all", ""
  chain,
  children
}) => {
  const { isLocked } = useLockedState({
    contractAddresses,
    walletAddress,
    strategy, // "any", "all", ""
    chain
  });

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
