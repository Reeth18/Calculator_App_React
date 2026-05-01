import { evaluate } from "mathjs";
import { useState } from "react";

function Calculator() {
    const [input, setInput] = useState("");
    const [justEvaluated, setJustEvaluated] = useState(false);
    const [pendingOperator, setPendingOperator] = useState(null);

    const buttons = [
        "C", "⌫", "/",
        "7", "8", "*",
        "4", "5", "-",
        "1", "2", "+",
        "0", ".", "="
    ];

    // Operators
    const operators = ["+", "-", "*", "/"];

    // Function to call the button and its values
    const handleClick = (value) => {
        // 🔥 ADD THIS BLOCK HERE (TOP)
        if (justEvaluated) {
            // If operator → store it
            if (operators.includes(value)) {
                setPendingOperator(value);
                setJustEvaluated(false);
                setInput(prev => prev + value);
                return;
            }

            // If number AND operator exists → calculate immediately
            if (pendingOperator && !operators.includes(value)) {
                try {
                    const result = evaluate(input + pendingOperator + value);
                    setInput(result.toString());
                    setPendingOperator(null);
                    setJustEvaluated(false);
                    return;
                } catch {
                    setInput("Error");
                    return;
                }
            }

            // If number only → fresh start
            setInput(value);
            setJustEvaluated(false);
            return;
        }

        // Case 1: If C (Clear) btn
        if (value === "C") {
            setInput("");
            return;
        }

        // Case 2: If Backspace is clicked (Remove the last value only)
        if (value === "⌫") {
            setInput(prev => prev.slice(0, -1));
            return;
        }

        // Case 3: If value is = then show result
        if (value === "=") {
            try {
                if (!input) {
                    setInput("0");
                    return;
                }

                if (input.includes("/0")) {
                    throw new Error("Undefined"); // Division by 0 is not allowed
                }

                const result = evaluate(input);
                setInput(result.toString());

                setJustEvaluated(true);
                setPendingOperator(null);
            } catch (error) {
                setInput("Error");
                console.log(error);
            }

            return;
        }

        // OPERATOR HANDLING
        if (operators.includes(value)) {
            if (input === "") return;

            if (operators.includes(input.slice(-1))) {
                setInput(prev => prev.slice(0, -1) + value);
                return;
            }
        }

        // DECIMAL HANDLING
        if (value === ".") {
            const parts = input.split(/[+\-*/]/);
            const lastNumber = parts[parts.length - 1];

            if (lastNumber.includes(".")) return;
        }

        // Buttons 1 to 9
        setInput(prev => prev + value);
    }

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-start mt-5">
            <div className="card p-3 shadow calculator-card">
                <h1 className="text-center display-6 fw-bold mb-2">Calculator App</h1>
                {/* Display */}
                <input
                    type="text"
                    className="form-control text-end mb-3"
                    value={input}
                    readOnly
                    name="calculator-input"
                />
                <div className="row g-2">
                    {buttons.map((btn, index) => (
                        <div className="col-4" key={index}>
                            <button className="btn btn-dark w-100" onClick={() => handleClick(btn)}>
                                {btn}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calculator;