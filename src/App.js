import './App.css';

function App() {
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
            className="button"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_top"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            className="button"
            id="tumblr-quote"
            title="Post this quote on tumblr!"
            target="_blank"
          >
            <i className="fa fa-tumblr"></i>
          </a>
          <button className="button" id="new-quote">آية جديدة</button>
        </div>
      </div>
      <div className="footer"><a href="https://codepen.io/hezag/">hezag</a> سورة</div>
    </div>
      </header>
    </div>
  );
}
export default App;
