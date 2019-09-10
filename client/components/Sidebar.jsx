import React, { Component } from 'react';

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div class="wrapper">
        <div id="sidebar-wrapper">
          <nav id="sidebar">
            <div class="sidebar-header p-3">
              <h4>Brittan Robinett</h4>
            </div>
            <ul class="list-unstyled components p-3">
              <p>Groups</p>
              <li>
                <a href="#">Class1</a>
              </li>
              <li>
                <a href="#">Class2</a>
              </li>
              <li>
                <a href="#">Class3</a>
              </li>
            </ul>
          </nav>
        </div>
    );
  }
}
export default Sidebar;
