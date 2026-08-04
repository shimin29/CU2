import { useState, useMemo } from "react";

// A slow function simulating heavy CPU work (e.g., handling huge data)
const heavyCalculation = (num) => {
    console.log("Calculating... ⏳");
    let i = 0;
    while (i < 1000000000) i++; // Artificial 1-second delay
    return num * num;
};

export default function MemoHook() {
    const [number, setNumber] = useState(5);
    const [count, setCount] = useState(0);

    // ❌ WITHOUT useMemo:
    // Clicking "Increment Counter" will feel sluggish because this runs every time!
    //   const squaredValue = heavyCalculation(number);

    //  WITH useMemo:
    // Clicking "Increment Counter" is instant. The loop only runs when 'number' changes.
    const squaredValue = useMemo(() => {
        return heavyCalculation(number);
    }, [number]);

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h2>useMemo vs No useMemo Demo</h2>

            {/* Test Section 1: The Heavy Math */}
            <div style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc" }}>
                <h3>1. Heavy Calculation</h3>
                <p>Number: {number}</p>
                <p>Result (Squared): {squaredValue}</p>
                <button onClick={() => setNumber((prev) => prev + 1)}>Change Number (Triggers Calculation)</button>
            </div>

            {/* Test Section 2: Unrelated State Change */}
            <div style={{ padding: "10px", border: "1px solid #ccc" }}>
                <h3>2. Unrelated State</h3>
                <p>Counter: {count}</p>
                <button onClick={() => setCount((prev) => prev + 1)}>Increment Counter</button>
            </div>
        </div>
    );
}
