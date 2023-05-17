## Component - `gate.tsx`
### Usage

<Gate contractAddresses=[] >
  {children}
</Gate>

- Accepts an array of strings
- One or many contract addresses
- 2 states of all children - overlayed with blur if gated, displayed if not
- developer needs to make sure gating happens on the backend as well, any info in any child components needs to be fetched only from the backend
    - eg., if `Gate` component with x rules (for n contract addresses) makes a backend call and determines the gate to remain locked - the component will display a locked state, but if the children component are making any backend data calls the backend network calls would still happen UNLESS child components also refer to the same `isLocked` api that `Gate` component is using to determine to fetch the actual data or not.