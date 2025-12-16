import { useState } from "react";
import ChatMessages from "./components/ChatMessages";
import { ChatInput } from "./components/ChatInput";
import "./App.css";

function App() {
  const [chatProps, setChatProps] = useState([]);
  return (
    <div className="app-container">
      <ChatMessages chatProps={chatProps} />
      <ChatInput chatProps={chatProps} setChatProps={setChatProps} />
    </div>
  );
}

export default App;
