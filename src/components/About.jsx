import React from "react";
const AboutUs = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Heading */}
        <p className="text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">About Me</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          Professional Tutoring Service
        </h2>
        {/* Heading end*/}
        <div className="row">
          <div className="col-lg-8 text-center text-lg-start wow fadeInUp">
            <h2 className="text-8 fw-400 mb-3">
              Hi, I'm{" "}
              <span className="fw-700 border-bottom border-3 border-primary">
                Bryan Nguyen
              </span>
            </h2>
            <p className="text-5">
            <br></br>
            Hello! I’m a dedicated tutor with over 6 years of experience in computer science and mathematics. 
            <hr></hr> Throughout my career, I’ve worked with students facing a wide range of challenges—from navigating complex algorithms to preparing for high-stakes calculus exams. My teaching approach moves beyond traditional lectures and textbook drills. <hr></hr> I focus on real-world applications, interactive problem-solving, and personalized strategies to make learning both effective and engaging.
            </p>
          </div>
          <div
            className="col-lg-4 mt-4 mt-lg-0 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="featured-box style-4 pt-0 md:pt-[40%!important]">
              <div className="featured-box-icon text-25 fw-500 bg-primary rounded-circle">
                <span className="wow heartBeat" data-wow-delay="1.3s">
                  6+
                </span>
              </div>
              <h3 className="text-7 wow rubberBand" data-wow-delay="2s">
                Years of <span className="fw-700">Experience</span>
              </h3>
            </div>
          </div>
        </div>
        {/* <div className="row gy-3 mt-4">
          <div className="col-6 col-lg-3 wow fadeInUp">
            <p className="text-muted fw-500 mb-0">Name:</p>
            <p className="text-4 text-dark fw-600 mb-0">Callum Smith</p>
          </div>
          <div className="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
            <p className="text-muted fw-500 mb-0">Email:</p>
            <p className="text-4 fw-600 mb-0">
              <a className="link-dark" href="mailto:chat@callum.com">
                chat@callum.com
              </a>
            </p>
          </div>
          <div className="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.3s">
            <p className="text-muted fw-500 mb-0">Date of birth:</p>
            <p className="text-4 text-dark fw-600 mb-0">11 November, 1987</p>
          </div>
          <div className="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
            <p className="text-muted fw-500 mb-0">From:</p>
            <p className="text-4 text-dark fw-600 mb-0">Los Angeles, USA.</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutUs;
