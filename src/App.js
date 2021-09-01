import './App.css';
import { ReactComponent as Gdsc } from './Assets/GDSC.svg'
import { ReactComponent as Ctf } from './Assets/Group.svg'

function App() {
  return (
    <>
    <div className="bg-holder">
    </div>
      <div className="nav-holder">
        <Gdsc className="gdsc-logo"/>
      </div>
      <div className="ctf-holder">
        <Ctf className="logo"/>
      </div>
      <div>
        <p className="date">2nd - 3rd Oct</p>
      </div>
      <div className="terminal">
        <div className="t-bar">
          <div className="red">.</div>
          <div className="yellow"></div>
          <div className="green"></div>
        </div>
        <div className="t-body">
          <p className="t-text">
          A <span style={{color:"#02e05f", fontWeight:"700"}}>24 hour</span> jeopardy style <span style={{color:"#e41f81", fontWeight:"700"}}>CTF</span>, ranging to <span style={{color:"#02e05f", fontWeight:"700"}}>five different domains</span> , namely, web, forensics, cryptography, OSINT and miscellaneous!
          <br/>
          <button className="coming">Coming Soon..</button>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
