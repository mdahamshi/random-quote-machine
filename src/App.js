import './App.css';
import React, { Component } from 'react';

class App extends  Component{

  copyToCB(){
    // Get the text field
    var copyText = document.getElementById("text");


    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.textContent);

    // Alert the copied text
    alert("Copied the text: " + copyText.textContent);
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">

        <div id="wrapper">
      <div id="quote-box">
        <div className="aya-text">
          <i className="fa fa-quote-right"></i> <span id="text"></span><i className="fa fa-quote-left"></i>
        </div>
        <div className="aya-sorah"><span id="aya-num"></span> - <span id="surah"></span></div>
        <div className="buttons">
          <a
            className="button sb-share"
            id="tweet-ayah"
            title="Tweet this ayah!"
            target="_top"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            className="button sb-share"
            id="tumblr-ayah"
            title="Post this ayah on tumblr!"
            target="_blank"
          >
            <i className="fa fa-tumblr"></i>
          </a>

           <a
            className="button sb-share"
            id="copy-clip"
            title="Copy to clipboard!"
            onClick={this.copyToCB}

          >
            <i className="fa fa-clipboard"></i>
            </a>

            <a
            className="button sb-share"
            id="whats-ayah"
            title="share to whatsapp"
            target="_blank"

          >
            <i className="fa fa-whatsapp"></i>
            </a>
          <button className="button" id="new-quote">آية جديدة</button>
        </div>
      </div>
    </div>
      </header>
    </div>
  )};
}
export default App;
