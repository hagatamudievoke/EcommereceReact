import { useState} from "react";
import { chatbot } from "supersimpledev";
import "./ChatInput.css";

export function ChatInput({ chatProps, setChatProps }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }
  async function sendMessage() {
    const newChatMessages = [
      ...chatProps,
      {
        messages: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
      {
        message: "Loading...",
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ];
    setChatProps(newChatMessages);
    setInputText("");
    const response = await chatbot.getResponseAsync(inputText);
    setChatProps(() => [
      ...newChatMessages.slice(0, newChatMessages.length - 1),
      {
        messages: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
  }
  function keyDown(event) {
    if (event.key === "Enter") {
      sendMessage();
    } else if (event.key === "Escape") {
      setInputText("");
    }
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send Message to Chatbot"
        size="30"
        onChange={saveInputText}
        onKeyDown={keyDown}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
