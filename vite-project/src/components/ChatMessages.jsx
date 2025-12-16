import {useRef,useEffect } from "react";
import{ChatMessage} from "./ChatMessage";
import "./ChatMessages.css";
export function ChatMessages({ chatProps }) {
  const chatMessagesRef = useRef(null);
  useEffect(() => {
    const conatinerElem = chatMessagesRef.current;
    if (conatinerElem) {
      conatinerElem.scrollTop = conatinerElem.scrollHeight;
    }
  }, [chatProps]);
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatProps.map((chat) => {
        return (
          <ChatMessage
            message={chat.messages}
            sender={chat.sender}
            key={chat.id}
          />
        );
      })}
    </div>
  );
}
export default ChatMessages;