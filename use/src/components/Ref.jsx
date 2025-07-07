import { useState, useEffect, useRef } from "react";

export default function AllRefCases() {
  // Case 1: Tracking previous state value
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  // Case 2: Accessing DOM elements
  const inputRef = useRef(null);

  // Case 3: Tracking renders without causing re-renders
  const renderCount = useRef(0);

  // Update render count on every render
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  // Update previous value after state changes
  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef Demonstration</h2>
      
      <div>
        <h3>1. Tracking Previous State</h3>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something..."
        />
        <p>Current Value: {inputValue || "(Empty)"}</p>
        <p>Previous Value: {previousInputValue.current || "(Empty)"}</p>
      </div>

      <div>
        <h3>2. DOM Element Access</h3>
        <input
          type="text"
          ref={inputRef}
          placeholder="Will be focused"
        />
        <button onClick={focusInput}>
          Focus Input
        </button>
      </div>

      <div>
        <h3>3. Tracking Renders Without Re-renders</h3>
        <p>Component render count: {renderCount.current}</p>
      </div>
    </div>
  );
}