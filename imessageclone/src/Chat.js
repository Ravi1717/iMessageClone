import React, { useState, useEffect } from "react";
import { IconButton } from "@material-ui/core";
import MicNoneIcon from "@material-ui/icons/MicNone";
import "./Chat.css";
import Message from "./Message.js";
import { useSelector } from "react-redux";
import { selectChatName, selectChatId } from "./features/chatSlice";
import db from "./firebase";

function Chat() {
  const [input, setInput] = useState("");
  const chatName = useSelector(selectChatName);
  const [messages, setMessages] = useState([]);
  const chatId = useSelector(selectChatId);

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    //Firebase magic...
    setInput("");
  };

  return (
    <div className="chat">
      {/*Chat Header */}
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">{chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>
      {/* Chat messages*/}
      <div className="chat__message">
        <Message />
        <Message />
        <Message />
      </div>
      {/*Chat input */}
      <div className="chat__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder=" iMessage"
            type="text"
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton>
          <MicNoneIcon className="chat__mic" />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
