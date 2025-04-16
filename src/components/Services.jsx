import React from "react";

const Services = () => {
  // services details
  const services = [
    {
      name: "Data Structure",
      desc: "Master data structures with easy-to-follow guidance to write clean, efficient code.",
      icon: "fas fa-cogs",
    },
    {
      name: "Project Guidance",
      desc: "Stuck on a project? I’ll help you plan, build, and stay on track from start to finish.",
      icon: "fas fa-desktop",
    },
    {
      name: "Bootcamp Assistance",
      desc: "Need extra support during your bootcamp? I’ll help you ace your tasks and stay ahead.",
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "Web Development",
      desc: "Learn to build stunning websites and web apps, from front-end to back-end.",
      icon: "fas fa-blog",
    },
    {
      name: "Exam Preparation",
      desc: "Prep smarter, not harder. I’ll help you study with focus and confidence.",
      icon: "fas fa-chart-area",
    },
    {
      name: "Mathematics",
      desc: "Struggling with math? I make tricky concepts simple and stress-free.",
      icon: "fas fa-infinity",
    },
  ];
  return (
    <section id="services" className="section bg-light">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">What I Do</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          How can I assist you with your work?
        </h2>
        {/* Heading end*/}
        <div className="row gy-5 mt-5">
          {services.length > 0 &&
            services.map((service, index) => (
              <div className="col-sm-6 col-lg-4 wow fadeInUp" key={index}>
                <div className="featured-box px-md-4">
                  <div className="featured-box-icon text-primary text-13">
                    {" "}
                    <i className={service.icon} />
                  </div>
                  <h3 className="text-6 fw-600 mb-3">{service.name}</h3>
                  <p className="text-muted mb-0 text-left">{service.desc} </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
