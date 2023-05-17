import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";
import Gate from "../components/gate";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Gate contractAddresses={[""]} walletAddress={""} strategy="any">
          <InstructionsComponent></InstructionsComponent>
        </Gate>
      </main>
    </div>
  );
}
