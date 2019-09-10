import React, { Component } from 'react';
import ChatWindow from "./ChatWindow";
import Sidebar from "./Sidebar";
import

class ChatPage extends Component {
  state = {};
  render() {
    return (
      <Sidebar />
      <ChatWindow />
    );
  }

}
export default ChatPage;
