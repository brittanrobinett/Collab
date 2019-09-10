import React, { Component } from 'react';

class ChatWindow extends Component {
  state = {};
  render() {
    return (
      <div id="page-content-wrapper">
        <div class="container-fluid">
          <div class="row">
              <div class="col-lg-12">
                <div id="chat" class="chat"></div>
                {/* Message Submit Form */}
                <form id="message-form" class="form-inline fixed-bottom">
                  <input type="text" id="message-input" class="form-control" placeholder="Enter message..." />
                  <button type="submit" id="send-button" class="btn btn-primary">Send</button>
                </form>
              </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default ChatWindow;
