import logo from './EssayMedia-1280.png';
import instagram from './Instagram_White.png';
import facebook from './Facebook_White.png';
import galleries from './Browse.png';
import email from './Email.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Essay Media" />
        <p>
          Photography & Videography
        </p>
    
        <p>
          <div class="Social-link">
        <a
          className="Social-link"
          href="mailto:scott@essaymediawv.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={email} className="Socials" alt="Email" />
        </a>
        </div>
          <div class="Social-link">
          <a
            className="Social-link"
            href="https://www.scottabbott.photo/browse/"
            rel="noopener noreferrer"
          >
            <img src= {galleries} className="Socials" alt="Browse Photo Galleries at Scott Abbott Photo" />
          </a> 
          </div>
          <div class="Social-link">
          <a className="Social-link"
          href="https://www.instagram.com/essaymediawv/"
          rel="noopener noreferrer"
          >
            <img src={instagram} className="Socials" alt="Instagram" />
          </a>
          </div>
          <div class="Social-link">
          <a className="Social-link"
          href="https://www.facebook.com/essaymediawv/"
          rel="noopener noreferrer"
          >
            <img src={facebook} className="Socials" alt="Facebook" />
          </a>
          </div>
        </p>
      </header>
    </div>
  );
}

export default App;
