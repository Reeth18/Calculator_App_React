import { useEffect, useState } from "react"

function Mode() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("bg-dark", "text-white");
            document.body.classList.remove("bg-light", "text-dark");
        } else {
            document.body.classList.add("bg-light", "text-dark")
            document.body.classList.remove("bg-dark", "text-white");
        }
    }, [darkMode])

    return (
        <div className="container vw-50 text-center calculator-mode-button">
            <button onClick={() => setDarkMode((prev) => !prev)} className="mt-3 rounded border-0 px-4 py-3">{darkMode ? "🔆 Light" : "🌙 Dark"}</button>
        </div>
    );
}

export default Mode;