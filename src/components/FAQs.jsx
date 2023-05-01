import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQs = () => {
  const faqsData = [
    {
      question: "What subjects do you offer tutoring in?",
      answer:
        "I offer tutoring services in a range of subjects, including Data Structures, Mathematics, and Web Development. If you have a specific subject in mind, feel free to reach out and we can discuss further!",
    },
    {
      question: "What kind of experience do you have as a tutor?",
      answer:
        "I have several years of experience as a tutor, both in-person and online. I have worked with students of all ages and skill levels, and I am dedicated to resolve issues and reach students' goals.",
    },
    {
      question: "What is your approach to teaching?",
      answer:
        "I believe that each student learns differently, and I tailor my approach to meet the needs of each individual. I work closely with my students to identify areas of strength and weakness, and I create personalized lesson plans to help them proceed.",
    },
    {
      question: "What can I expect from a tutoring session?",
      answer:
        "During a tutoring session, we will work together to review material, complete practice problems, and reinforce concepts. I will provide guidance and support every step of the way, and I am always available to answer questions and provide additional resources.",
    },
    {
      question: "How can I get started with your tutoring services?",
      answer:
        "Getting started is easy! You can contact me directly to discuss your needs and schedule a session. I look forward to working with you!",
    },
  ];

  return (
    <section id="faq" className="section bg-light">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6 order-1 order-lg-0 wow fadeInUp">
            {/* Heading */}
            <p className="text-center text-lg-start mb-2">
              <span className="bg-primary text-dark px-2">FAQ</span>
            </p>
            <h2 className="text-10 fw-600 text-center text-lg-start mb-5">
              Have any questions?
            </h2>
            {/* Heading end*/}

            <Accordion flush defaultActiveKey="0">
              {faqsData.length > 0 &&
                faqsData.map((faq, index) => (
                  <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></Accordion.Body>
                  </Accordion.Item>
                ))}
            </Accordion>
          </div>
          <div
            className="col-lg-6 d-flex align-items-center justify-content-center order-0 order-lg-1 wow fadeIn"
            data-wow-delay="1s"
          >
            {" "}
            <img
              className="img-fluid"
              src="images/faq.png"
              title="FAQ"
              alt="faq"
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
