import React from 'react';
import '../src/App.css';
import '../src/App.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>

        <h1 className="title">CodeNation Netflix FAQ Activity</h1>

        <div className="outerContainer">

          <div className="innerContainer">

            <h1 className="faq">Frequently Asked Questions</h1>

            <ul>
              <li className="liText">What is Netflix?<p class="plus">+</p></li>
              <li className="liText">How much does Netflix cost?<p class="plus">+</p></li>
              <li className="liText">Where can I watch?<p class="plus">+</p></li>
              <li className="liText">How do I cancel?<p class="plus">+</p></li>
              <li className="liText">What can I watch on Netflix?<p class="plus">+</p></li>
              <li className="liText">How does the free trial work?<p class="plus">+</p></li>
            </ul>

            <div className="try">
              <p className="tryText" > Try 30 Days FREE</p>
            </div>


          </div>

        </div>

      </React.Fragment>
    );
  }
}

export default App;