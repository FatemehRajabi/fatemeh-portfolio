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
  primary: '#253652ff',     // blue-gray
  secondary: '#e2e8efff',   
  accent: '#52bfb2ff',      
  highlight: '#e2e8f0',
  dark: '#0f172a'
};


  const projectLinks = [
    "https://github.com/FatemehRajabi/gold-usd-prediction",
    "https://github.com/FatemehRajabi/insights-hub",
    "https://github.com/FatemehRajabi/ecommerce-fullstack",
    "https://github.com/FatemehRajabi/reinforcement-learning-atari-agents",
    "https://github.com/FatemehRajabi/mistral-summarizer",
    "https://github.com/FatemehRajabi/transformer-model"    
  ];

  const projects = [
    {
      title: 'Forex Price Prediction using Deep Learning',
      desc: 'LSTM-based model to predict gold vs. USD forex prices using historical data and TensorFlow. Includes preprocessing, model evaluation, and bot integration (in progress).',
      url: projectLinks[0]
    },
    {
title: 'Serverless Feedback Analytics & BI Platform',
      desc: 'AWS-based analytics platform that collects user feedback and provides real-time insights using Lambda, API Gateway, Athena, S3, and QuickSight. Features Cognito authentication, SQL-driven metrics, and interactive dashboards for decision-making.',
      githubUrl: projectLinks[1],
      liveUrl: "https://d210uwax0fmibn.cloudfront.net/"
    },
    {
      title: 'Ecommerce API Development',
      desc: 'RESTful API built with Java, Spring Boot, MySQL, Spring Security. Includes full CRUD and authentication functionality. Tested using Postman.',
      url: projectLinks[2]
    },
    {
      title: 'Reinforcement Learning: Atari Game Agents',
      desc: 'Trained two deep reinforcement learning agents to play Pong and MsPacman using A2C and PPO algorithms. Built using Python, Stable-Baselines3, and OpenAI Gym. Included gameplay evaluation, saved model files, and training scripts.',
      url: projectLinks[3]
    },
    {
      title: 'Mistral AI Summarization Tool',
      desc: 'Built a text summarization tool using the Mistral LLM API and Python SDK. Explored prompt engineering, API usage, and practical application of large language models in natural language processing (NLP).',
      url: projectLinks[4]
    },
    {
      title: 'Transformer from Scratch (PyTorch) - In Progress',
      desc: 'Implementing the Transformer architecture end-to-end in PyTorch: embeddings, positional encodings, multi-head self-attention, layer norm, residuals, encoder/decoder stacks, training & validation loops, and attention visualization.',
      url: projectLinks[5]
    }
  ];

  const skillGroups = [
  {
    title: "Machine Learning & AI",
    items: ["LSTM", "LLMs", "Time Series Forecasting", "Feature Engineering", "Model Evaluation", "Data Analysis"],
  },
  {
    title: "Programming Languages",
    items: ["Python", "Java", "SQL"],
  },
  {
    title: "ML & Data Science Libraries",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "Matplotlib"],
  },
  {
    title: "Cloud & MLOps Foundations",
    items: ["AWS (Lambda, S3, Athena, EC2, API Gateway, Cognito)", "Serverless Architectures", "Cloud-based Model Analytics"],
  },
  {
    title: "Data & Visualization Tools",
    items: ["Amazon Athena", "Amazon QuickSight", "Jupyter", "Git", "GitHub"],
  },
  {
    title: "Operating Systems",
    items: ["Linux", "Windows"],
  },
];


  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top shadow-sm" style={{ backgroundColor: colors.primary }}>
        <div className="container">
          <a className="navbar-brand" href="#top">
  <img
    src="/favicon.png"
    alt="Fatemeh Rajabi logo"
    style={{ height: '32px' }}
  />
</a>

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

      <div className="container py-5" style={{ backgroundColor: colors.secondary, color: colors.dark }}>
        <section id="top" className="text-center mb-5 p-4 rounded shadow" style={{ backgroundColor: colors.primary, color: colors.highlight }} data-aos="fade-down">
          <h1 className="display-4 fw-bold" style={{ color: colors.highlight }}>Fatima Rajabi</h1>
          <h2 className="fs-4 fw-semibold mb-3" style={{ color: colors.accent }}>
            AI/ML Engineer | Data Engineering & Cloud | Java & Python Developer
          </h2>
          <a href="/Fatemeh%20Rajabi%20-%20resume.pdf" download className="btn mt-3" style={{ backgroundColor: colors.highlight, color: colors.dark, border: `1px solid ${colors.accent}` }}>
            Download Resume
          </a>
        </section>

        <section className="mb-5" id="about" data-aos="fade-up" style={{ backgroundColor: colors.accent, color: colors.dark, padding: '2rem', borderRadius: '10px' }}>
          <h3 className="fs-3 fw-bold mb-4 border-bottom pb-2" style={{ color: colors.primary }}>About Me</h3>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p style={{ textAlign: 'justify' }}>
                Hi, I’m Fatima. I’m a Master’s student in Computer Science with focus on AI and Data Science. I have experience in machine learning, full-stack development, and a background in teaching, which improved my communication and teamwork skills. I am also completing an intensive 15-week aws program at Perscholas that helps me build strong cloud engineering skills. I’m passionate about working on practical projects, and I’m currently looking for opportunities where I can grow and contribute in a cloud and data-driven role.             </p>
            </div>
            <div className="col-md-6 text-center">
              <img src="/photo.png" alt="Fatemeh Rajabi" className="rounded-circle border" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        <section className="mb-5" id="projects" data-aos="fade-right" style={{ backgroundColor: colors.secondary, color: colors.highlight, padding: '2rem', borderRadius: '10px' }}>
          <h3 className="fs-3 fw-bold mb-4 border-bottom pb-2" style={{ color: colors.primary }}>Projects</h3>
          <div className="row g-4">
            {projects.map((proj, i) => (
              <div className="col-md-6" key={i}>
                <div className="card h-100 border-2 shadow" style={{ borderColor: colors.accent, backgroundColor: colors.primary, color: colors.highlight }}>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{proj.title}</h5>
                    <p className="card-text">{proj.desc}</p>
                    <div className="d-flex gap-3 flex-wrap">
  <a
    style={{ color: colors.highlight }}
    href={proj.githubUrl || proj.url}
    target="_blank"
    rel="noreferrer"
  >
    View on GitHub
  </a>

  {proj.liveUrl && (
    <a
      style={{ color: colors.accent }}
      href={proj.liveUrl}
      target="_blank"
      rel="noreferrer"
    >
      Live Demo
    </a>
  )}
</div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-5" id="skills" data-aos="fade-left" style={{ backgroundColor: colors.accent, color: colors.dark, padding: '2rem', borderRadius: '10px' }}>
          <h3 className="fs-3 fw-bold mb-4 border-bottom pb-2" style={{ color: colors.primary }}>Skills</h3>
          <div className="row g-4">
  {skillGroups.map((group, i) => (
    <div className="col-md-6" key={i}>
      <div
        className="card h-100 border-2 shadow"
        style={{ borderColor: colors.secondary, backgroundColor: colors.primary, color: colors.highlight }}
      >
        <div className="card-body">
          <h5 className="card-title fw-bold" style={{ color: colors.highlight }}>
            {group.title}
          </h5>

          <p className="card-text mb-0" style={{ color: colors.highlight, opacity: 0.95 }}>
            {group.items.join(" • ")}
          </p>
        </div>
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
