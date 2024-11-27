import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");
  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbit" />
      <div className="left">
        <h2>ZenCare brings you</h2>
        <h1>DOC AI</h1>
        <h2>Get early cure for your symptoms</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          quod eaque magni perferendis quam odio
        </h3>
        <Link to="/dashboard">GET STARTED</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human: Can you give me a disease analysis based on my current symptoms",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: Of Course Yes!!",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2: I'm feeling symptoms of cold fever. Can you give me some medicaine suggestions",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: I can provide you with the list of medication you should take to cure cold fever",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
