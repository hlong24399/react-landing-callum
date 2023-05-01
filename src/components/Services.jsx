import React from "react";

const Services = () => {
  // services details
  const services = [
    {
      name: "Data Structure",
      desc: "Do you find data structures daunting? Fear not! Our data structure service offers friendly guidance and support to help you design and implement efficient data structures for your programs. We'll help you turn your data into a well-oiled machine!",
      icon: "fas fa-cogs",
    },
    {
      name: "Project Guidance",
      desc: " Feeling overwhelmed by your project? Let me be your guide! My project guidance service provides a helping hand to ensure that your project stays on track and meets all of its goals. I'll help you plan, execute, and evaluate your project with confidence!",
      icon: "fas fa-desktop",
    },
    {
      name: "Bootcamp Assistance",
      desc: "If you're currently enrolled in a bootcamp program, I'm here to help you succeed! My bootcamp assistance service offers personalized support to help you manage coursework, study effectively, and complete projects with ease. I'll be your cheerleader every step of the way!",
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "Web Developement",
      desc: "Want to build a killer website or application? My web development service has got your back! I'll guide you through the ins and outs of front-end and back-end development, and help you design and deploy web-based applications that'll knock your users' socks off!",
      icon: "fas fa-blog",
    },
    {
      name: "Exam Preparation",
      desc: "Feeling stressed about an upcoming exam? Don't worry, I'm here to help! My exam preparation service offers a range of study resources and support to help you crush your exams with confidence. With my help, you'll be well on your way to achieving your academic and career goals!",
      icon: "fas fa-chart-area",
    },
    {
      name: "Mathematics",
      desc: "Are math problems giving you a headache? Fear not, I've got your back! My mathematics service provides friendly support and guidance to help you understand mathematical concepts and tackle complex problems. I'll help you master algebra, calculus, geometry, and beyond!",
      icon: "fas fa-infinity",
    },
  ];

  return (
    <section id="services" className="section bg-light">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">What I Do?</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          How I can help your next project
        </h2>
        {/* Heading end*/}
        <div className="row gy-5 mt-5">
          {services.length > 0 &&
            services.map((service, index) => (
              <div className="col-sm-6 col-lg-4 wow fadeInUp" key={index}>
                <div className="featured-box text-center px-md-4">
                  <div className="featured-box-icon text-primary text-13">
                    {" "}
                    <i className={service.icon} />
                  </div>
                  <h3 className="text-6 fw-600 mb-3">{service.name}</h3>
                  <p className="text-muted mb-0">{service.desc} </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
