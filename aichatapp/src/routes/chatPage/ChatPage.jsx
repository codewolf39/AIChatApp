import NewPrompt from "../../components/newPrompt/NewPrompt";
import "./chatPage.css";

const ChatPage = () => {
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test Message </div>
          <div className="message user">
            Test User Message Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Illo quaerat exercitationem modi omnis officiis
            adipisci! Quisquam, laudantium repellendus. Laudantium blanditiis
            cum eos sequi a dolore culpa neque fugiat inventore harum.
          </div>
          <div className="message">Test Message</div>
          <div className="message user">Test User Message</div>
          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
