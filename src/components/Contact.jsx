import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "./Tooltip";

const Contact = () => {
  const form = useRef();
  const [sendingMail, setSendingMail] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSendingMail(true);
    emailjs
      .sendForm(
        "service_omt40zd",
        "template_c7np8ml",
        form.current,
        "pIIadA-4xguQPilUV"
      )
      .then(
        (result) => {
          document.getElementById("contact-form").reset();
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(result.text);
          setSendingMail(false);
        },
        (error) => {
          toast.error("Something went wrong!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(error.text);
          setSendingMail(false);
        }
      );
  };

  return (
    <section id="contact" className="section bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 text-center text-lg-start wow fadeInUp">
            <h2 className="text-10 fw-600 mb-5">Get In Touch !</h2>
            <p className="text-5 mb-5">
            In order to progress to our next milestone, there will be evitable challenge along the way. If you are working on a task and feeling the need of assistance, feel free to message me anytime!
            <br></br>
            <br></br>
            I am open to discuss prior to schedule our first meeting in order to see if I can assist you. 
            </p>
            <h3 className="text-5 fw-600">Living In:</h3>
            <address className="text-4">
              Irvine, California, United States.
            </address>
            <h3 className="text-5 fw-600">Phone Number:</h3>
            <p className="text-5" > <a style={{"color" : "black"}} href="tel:657-456-4234"> +(657) 456-4234 </a></p>
            <ul className="social-icons social-icons-lg justify-content-center justify-content-lg-start mt-5">
              {/* <li className="social-icons-twitter">
                <Tooltip text="Twitter" placement="top">
                  <a
                    href="https://twitter.com/harnishdesign/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </Tooltip>
              </li> */}
              {/* <li className="social-icons-facebook">
                <Tooltip text="Facebook" placement="top">
                  <a
                    href="http://www.facebook.com/harnishdesign/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook" />
                  </a>
                </Tooltip>
              </li> */}
              {/* <li className="social-icons-instagram">
                <Tooltip text="Instagram" placement="top">
                  <a
                    href="http://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </Tooltip>
              </li> */}
              <li className="social-icons-github">
                <Tooltip text="Github" placement="top">
                  <a
                    href="http://www.github.com/"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" />
                  </a>
                </Tooltip>
              </li>
              {/* <li className="social-icons-dribbble">
                <Tooltip text="Dribbble" placement="top">
                  <a
                    href="http://www.dribbble.com/harnishdesign/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-dribbble" />
                  </a>
                </Tooltip>
              </li> */}
            </ul>
          </div>
          <div
            className="col-lg-6 ms-auto mt-5 mt-lg-0 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <h2 className="text-10 fw-600 text-center text-lg-start mb-5">
              Send Me A Message
            </h2>
            {/* Contact Form */}
            <form
              id="contact-form"
              className="form-border"
              method="post"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="row g-4">
                <div className="col-12">
                  <label className="form-label" htmlFor="name">
                    What is Your Name
                  </label>
                  <input
                    id="name"
                    name="user_name"
                    type="text"
                    className="form-control py-1"
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="email">
                    Your Email Address
                  </label>
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    className="form-control py-1"
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="form-message">
                    Your Message
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    className="form-control py-1"
                    rows={4}
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="col-12 text-center text-lg-start">
                  <button
                    id="submit-btn"
                    className="btn btn-dark rounded-0"
                    type="submit"
                  >
                    {sendingMail ? (
                      <>
                        <span
                          role="status"
                          aria-hidden="true"
                          className="spinner-border spinner-border-sm align-self-center me-2"
                        ></span>
                        Sending......
                      </>
                    ) : (
                      <>
                        Send{" "}
                        <span className="ms-3">
                          <i className="fas fa-arrow-right" />
                        </span>
                      </>
                    )}
                  </button>
                </div>
                <ToastContainer />
              </div>
            </form>
            {/* Contact Form end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
