import React from "react";

const Internships = () => {
  return (
    <section id="internships">
      <h2 className="title">Internships</h2>

      <div className="grid">

        <div className="card">
          <h3>AI Azure Virtual Intern</h3>

          <p>
            <strong>Microsoft Initiative</strong>
            <br /><br />

            • Integrated Azure Vision & Language APIs to build a cloud-hosted document analysis prototype.
            <br /><br />

            • Deployed scalable AI solution on Azure with API authentication and endpoint configuration.
            <br /><br />

            • Completed full project lifecycle from requirement scoping to deployment.
          </p>
        </div>

        <div className="card">
          <h3>Web Development Intern</h3>

          <p>
            <strong>Apex Planet Software Pvt. Ltd.</strong>
            <br /><br />

            • Built responsive web pages using HTML, CSS and JavaScript.
            <br /><br />

            • Worked on front-end components for live client projects.
            <br /><br />

            • Used Git and GitHub for collaboration and version control.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Internships;