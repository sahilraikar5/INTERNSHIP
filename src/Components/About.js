import React from 'react';

const About = () => {
  return (
    <div>
      <head>
        <title>Why Donate Blood?</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
      </head>
      <body>
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
          <a className="navbar-brand" href="#">
            Donate Blood
          </a>
        </nav>

        <div className="container mt-4">
          <h1>Why Donate Blood?</h1>
          <p>
            Donating blood is a simple yet impactful way to save lives. Here are some reasons why you should consider donating blood:
          </p>

          <ul>
            <li>It saves lives in emergencies, surgeries, and for patients with certain medical conditions.</li>
            <li>Every donation can help multiple people as the blood is separated into its components.</li>
            <li>Regular donations can reduce the risk of certain diseases, such as cancer.</li>
            <li>It's a way to give back to your community and help those in need.</li>
            <li>It's a safe and simple process that only takes a short amount of your time.</li>
          </ul>

          <h2>How to Donate</h2>
          <p>If you're interested in donating blood, here's how you can get started:</p>
          <ol>
            <li>Find a local blood donation center or blood drive event near you.</li>
            <li>Check if you meet the eligibility requirements for blood donation.</li>
            <li>Schedule an appointment or walk in during a blood drive event.</li>
            <li>Complete a brief health questionnaire and have a mini-physical.</li>
            <li>Donate blood, which usually takes about 10-15 minutes.</li>
            <li>Enjoy a refreshment and relax for a short time before leaving.</li>
          </ol>
        </div>

        <footer className="bg-danger text-white text-center p-3 mt-4">
          &copy; 2023 Donate Blood Foundation
        </footer>
      </body>

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
  );
};

export default About;
