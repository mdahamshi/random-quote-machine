import './App.css';
import React, { Component } from 'react';

class App extends  Component{

  copyToCB(){
    // Get the text field
    var copyText = document.getElementById("text");


    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.textContent + ' ' + window.location.href);

    // Alert the copied text
    alert("تم نسخ الآية بنجاح !");
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
            id="fb-ayah"
            title="Post this ayah on facebook!"
            target="_blank"
            href="#"
            >
            <i className="fa fa-facebook"></i>
          </a>

            <a
              className="button sb-share"
              id="whats-ayah"
              title="Share to whatsapp"
              target="_blank"
              href="#"
              >
              <i className="fa fa-whatsapp"></i>
            </a>
              
            <a
              className="button sb-share"
              id="copy-clip"
              title="Copy to clipboard!"
              onClick={this.copyToCB}
              href="#"
              >
              <i className="fa fa-clipboard"></i>
            </a>
            <a
              className="button sb-share"
              id="chage-color"
              title="Change background color!"
              href="#"
              >
              <i className="fa fa-pencil"></i>
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
