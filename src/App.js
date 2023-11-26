
import './App.css';

function App() {
  const github_link = 'https://www.youtube.com/c/andystechtutorials';
  const linkedin_link = 'https://www.youtube.com/c/andystechtutorials';
  const resume_link = 'https://www.youtube.com/c/andystechtutorials';
  return (
    <div className="background_image">
      <div className='name'>
        Andy's Tech Tutorials
      </div>
      <div className='button_links'>
        <a href={github_link} target='_blank' rel="noreferrer">
          <button>
            GitHub
          </button>
        </a>
        <a href={linkedin_link} target='_blank' rel="noreferrer">
          <button>
            LinkedIn
          </button>
        </a>
        <a href={resume_link} target='_blank' rel="noreferrer">
          <button>
            Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
