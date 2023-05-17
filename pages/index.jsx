import styles from "../styles/Home.module.css";
import Gate from "../components/gate";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Gate
          contractAddresses={[
            // dai
            "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            // random
            "0x036a4d41d5c809B18c74c01E162B9b18DEC6B62b"
          ]}
          walletAddress={"0x59189745862F05867A50724e57F91cA0bE5eFA59"}
          strategy="any" // any / all
        >
          <div>
            Unlockable content here
          </div>
        </Gate>
      </main>
    </div>
  );
}
