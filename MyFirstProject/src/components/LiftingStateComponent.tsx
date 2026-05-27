// import React, { useState } from 'react';

// export default function LiftingStateComponent() {   
//     const [amount, setAmount] = useState(0);
    
//     return (
//         <div>
//             {/* Pass the setter function directly or pass a specific handler */}
//             <ChildrenA onIncrease={() => setAmount(prev => prev + 1)} />
//             <ChildrenB amount={amount} />
//         </div>
//     );
// }

// // Fixed: Removed the function rendering from h1 and renamed prop for clarity
// function ChildrenA({ onIncrease }: { onIncrease: () => void }) {
//     return (
//         <div>
//             <h1>Controls</h1>
//             <button onClick={onIncrease}>Increase Amount</button>
//         </div>
//     );   
// }   

// function ChildrenB({ amount }: { amount: number }) {
//     return (
//         <div>
//             <h1>Amount: {amount}</h1>
//         </div>
//     );
// }
