import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Portfolio() {
  const [active, setActive] = useState('about');

  useEffect(() => {
    AOS.init({ duration: 800 });

    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'contact'];
      const scrollY = window.scrollY + 100;
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollY && scrollY < section.offsetTop + section.offsetHeight) {
          setActive(id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const colors = {
    primary: '#264653',
    accent: '#f4a261',
    highlight: '#e9c46a',
    secondary: '#2a9d8f',
    dark: '#264653'
  };

  const projectLinks = [
    "https://github.com/FatemehRajabi/gold-usd-prediction",
    "https://github.com/FatemehRajabi/ecommerce-fullstack",
    "https://github.com/FatemehRajabi/reinforcement-learning-atari-agents",
    "https://https://github.com/FatemehRajabi/mistral-summarizer"
  ];

  const projects = [
    {
      title: 'Forex Price Prediction using Deep Learning',
      desc: 'LSTM-based model to predict gold vs. USD forex prices using historical data and TensorFlow. Includes preprocessing, model evaluation, and bot integration (in progress).',
      url: projectLinks[0]
    },
    {
      title: 'Ecommerce API Development',
      desc: 'RESTful API built with Java, Spring Boot, MySQL, Spring Security. Includes full CRUD and authentication functionality. Tested using Postman.',
      url: projectLinks[1]
    },
    {
      title: 'Reinforcement Learning: Atari Game Agents',
      desc: 'Trained two deep reinforcement learning agents to play Pong and MsPacman using A2C and PPO algorithms. Built using Python, Stable-Baselines3, and OpenAI Gym. Included gameplay evaluation, saved model files, and training scripts.',
      url: projectLinks[2]
    },
    {
      title: 'Mistral AI Summarization Tool',
      desc: 'Built a text summarization tool using the Mistral LLM API and Python SDK. Explored prompt engineering, API usage, and practical application of large language models in natural language processing (NLP).',
      url: projectLinks[3]
    }
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top shadow-sm" style={{ backgroundColor: colors.primary }}>
        <div className="container">
          <a className="navbar-brand fw-bold" style={{ color: colors.highlight }} href="#top">Fatemeh</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3">
              {['about', 'projects', 'skills', 'contact'].map((section) => (
                <li className="nav-item" key={section}>
                  <a
                    className={`nav-link fw-semibold ${active === section ? 'text-decoration-underline' : ''}`}
                    style={{ color: colors.highlight, cursor: 'pointer' }}
                    href={`#${section}`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container py-5" style={{ backgroundColor: colors.secondary, color: '#fff' }}>
        <section id="top" className="text-center mb-5 p-4 rounded shadow" style={{ backgroundColor: colors.primary, color: colors.highlight }} data-aos="fade-down">
          <h1 className="display-4 fw-bold" style={{ color: colors.highlight }}>Fatemeh Rajabi</h1>
          <h2 className="fs-4 fw-semibold mb-3" style={{ color: colors.accent }}>
            AI/ML Enthusiast | Full-Stack Java Developer
          </h2>
          <p className="lead mx-auto w-75">
            Passionate about building intelligent systems and web apps. Currently pursuing a Master’s in Computer Science with a focus on AI, ML, and Full-Stack Development.
          </p>
          <a href="/Fatemeh%20Rajabi%20-%20resume.pdf" download className="btn mt-3" style={{ backgroundColor: colors.highlight, color: colors.dark, border: `1px solid ${colors.accent}` }}>
            Download Resume
          </a>
        </section>

        <section className="mb-5" id="about" data-aos="fade-up" style={{ backgroundColor: colors.accent, color: colors.dark, padding: '2rem', borderRadius: '10px' }}>
          <h3 className="fs-3 fw-bold mb-4 border-bottom pb-2" style={{ color: colors.primary }}>About Me</h3>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>
                I’m Fatemeh, a curious mind on a mission to combine the power of Artificial Intelligence with Full-Stack Development. I have hands-on experience with Python, Java, React, and machine learning tools like TensorFlow and Weka.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img src="/photo.jpg" alt="Fatemeh Rajabi" className="rounded-circle border" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        <section className="mb-5" id="projects" data-aos="fade-right" style={{ backgroundColor: colors.secondary, color: colors.highlight, padding: '2rem', borderRadius: '10px' }}>
          <h3 className="fs-3 fw-bold mb-4 border-bottom pb-2" style={{ color: colors.highlight }}>Projects</h3>
          <div className="row g-4">
            {projects.map((proj, i) => (
              <div className="col-md-6" key={i}>
                <div className="card h-100 border-2 shadow" style={{ borderColor: colors.accent, backgroundColor: colors.primary, color: colors.highlight }}>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{proj.title}</h5>
                    <p className="card-text">{proj.desc}</p>
                    <a style={{ color: colors.highlight }} href={proj.url} target="_blank" rel="noreferrer">View on GitHub</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-5" id="skills" data-aos="fade-left" style={{ backgroundColor: colors.accent, color: colors.dark, padding: '2rem', borderRadius: '10px' }}>
          <h3 className="fs-3 fw-bold mb-4 border-bottom pb-2" style={{ color: colors.primary }}>Skills</h3>
          <div className="row g-3">
            {['Python, Java, JavaScript, HTML, CSS', 'React, Spring Boot, MySQL, REST APIs', 'TensorFlow, Scikit-Learn, Weka, Pandas', 'LSTM, CNN, Time Series Forecasting', 'Git, VS Code, Jupyter', 'Strong communication, Quick learner'].map((skill, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 text-white" style={{ backgroundColor: colors.primary }}>
                  <div className="card-body">{skill}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center" id="contact" data-aos="zoom-in" style={{ backgroundColor: colors.primary, color: colors.highlight, padding: '2rem', borderRadius: '10px' }}>
          <h3 className="fs-3 fw-bold mb-3">Let’s Connect!</h3>
          <p className="mb-3">Feel free to reach out via GitHub or leave a message.</p>
          <a href="https://github.com/FatemehRajabi" target="_blank" rel="noreferrer" className="btn" style={{ backgroundColor: colors.highlight, color: colors.dark }}>
            GitHub
          </a>
        </section>
      </div>
    </>
  );
}
