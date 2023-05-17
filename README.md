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

### Pre-Requisite
- install `npx create-web3-dapp@latest`, with these settings: https://i.imgur.com/K4JS3RY.png

### Steps
- Create files:
    - `hooks/useLockedState.js`
    - `pages/api/getLockedState.js`
    - `components/gate.jsx`
    - `styles/Gate.module.css`
- Add the following content in the newly created files:
- `hooks/useLockedState.js`
code: [useLockedState.js](/hooks/useLockedState.js)