import { Link } from "react-router-dom";
import "./chatList.css";

const ChatList = () => {
  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new chat</Link>
      <Link to="/">Explore DOC AI</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">Recent Chats</span>
      <div className="list">
        <Link to="/">My chat</Link>
        <Link to="/">My chat</Link>
        <Link to="/">My chat</Link>
        <Link to="/">My chat</Link>
        <Link to="/">My chat</Link>
        <Link to="/">My chat</Link>
        <Link to="/">My chat</Link>
        <Link to="/">My chat</Link>
      </div>
    </div>
  );
};

export default ChatList;
