## Component - `gate.tsx`
### Usage
```
<Gate contractAddresses={[]} walletAddress={""} strategy="">
  {children}
</Gate>
```
- `contractAddresses`: an array of strings
- `walletAddress`: string
- `strategy`: `any | all`
- 2 states of all children - not displayed if locked, displayed if unlocked
- **Note**: developer needs to make sure gating happens on the backend as well, any info in any child components needs to be fetched only from the backend
    - eg., if `Gate` component with x rules (for n contract addresses) makes a backend call and determines the gate to remain locked - the component will display a locked state, but if the children component are making any backend data calls the backend network calls would still happen UNLESS child components also refer to the same `isLocked` api that `Gate` component is using to determine to fetch the actual data or not.

---

👉 Either clone this repository and get started or you can follow the steps below to setup Gate component in existing web3-dapp

---

### Pre-Requisite
1. install `npx create-web3-dapp@latest`, with these settings: https://i.imgur.com/K4JS3RY.png

### Steps
1. **Step 1**:  Create files:
    - `hooks/useLockedState.js`
    - `pages/api/getLockedState.js`
    - `components/gate.jsx`
    - `styles/Gate.module.css`

    or execute this in your terminal:
    ```bash
    mkdir hooks && touch hooks/useLockedState.js pages/api/getLockedState.js components/gate.jsx styles/Gate.module.css
    ```
2. **Step 2**: Add the following content in the newly created files:
  - `hooks/useLockedState.js`
code: [useLockedState.js](/hooks/useLockedState.js)
  - `pages/api/getLockedState.js` code: [getLockedState](/pages/api/getLockedState.js)
  - `components/gate.jsx` code: [gate.jsx](/components/gate.jsx)
  - `styles/Gate.module.css` code: [Gate.module.css](/styles/Gate.module.css)

3. **Step 3**: Use the component in `index.jsx`
    ```jsx
    import Gate from "../components/gate";
    ```
    ```jsx
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
    ```
