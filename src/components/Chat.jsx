import React, { useState } from "react";
import axios from "axios";

const Chat = () => {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChat = async () => {
    if (!userInput.trim()) {
      setError("Please enter a query.");
      return;
    }

    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await axios.post("/chatInput", {
        quest: userInput, // ✅ updated key name
      });

      setResponse(res.data.response);
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to get response from chatbot.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Student Assistant Chatbot 🤖</h2>

      <textarea
        className="w-full border p-2 rounded mb-4"
        rows="4"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Ask something about resume, interview, or placement process..."
      />

      <button
        onClick={handleChat}
        disabled={loading}
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        {loading ? "Generating..." : "Ask"}
      </button>

      {response && (
        <div className="mt-4 p-3 bg-gray-100 border rounded">
          <strong>Gemini:</strong> {response}
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-500 font-medium">{error}</div>
      )}
    </div>
  );
};

export default Chat;
