import { useState, useEffect } from "react";

const PASSWORD = "october10"; // Customize this

const PasswordGate = ({ children }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("wedding-authed") === "true") {
      setAuthed(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().toLowerCase() === PASSWORD.toLowerCase()) {
      sessionStorage.setItem("wedding-authed", "true");
      setAuthed(true);
    } else {
      setError("Oops! That’s not the right password.");
    }
  };

  if (authed) return children;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f4ef] text-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md"
      >
        <h1 className="text-2xl font-serif mb-4">Welcome to Our Wedding</h1>
        <p className="mb-6">Enter the password from your invite ✨</p>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border rounded-md mb-3"
          placeholder="Password"
        />
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <button
          type="submit"
          className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default PasswordGate;