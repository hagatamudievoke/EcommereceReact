import robotImage from "../assets/robot.png";
import userImage from "../assets/user.png";
import "./ChatMessage.css";

export function ChatMessage({ message, sender}) {
  return (
    <div className={sender === "robot" ? "robot-message" : "user-message"}>
      {sender === "robot" && <img src={robotImage} width="50" height="50" />}
      <div className="message-text">{message}</div>
      {sender === "user" && <img src={userImage} width="50" height="50" />}
    </div>
  );
}
