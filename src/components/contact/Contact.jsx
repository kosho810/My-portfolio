import React from "react";
import "./contact.css";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../../animation/done.json';
import contact from '../../animation/contact-us.json';


export default function Contact() {
  const [state, handleSubmit] = useForm("myzyjkdl");


  return (
    <>
      <section id="contact" className="contact-us  ">
        <h1 className="title">
          <span className="icon-envelope"> </span>
          Contact me
        </h1>
        <p className="subtitle">
          I'm always excited to connect! Whether you have a project in mind,
          need help with something, or just want to say hello, feel free to
          reach out.
        </p>

        <div className="flex ">
          <form onSubmit={handleSubmit} className="flex " action="">
            <div className="flex">
              <label htmlFor="email">Email Address</label>
              <input required type="email" name="email" id="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div style={{ marginTop: "24px" }} className="flex">
              <label htmlFor="message">your message</label>
              <textarea required name="message" id="message"></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button className="submit" type="submit" disabled={state.submitting}>{state.submitting ? "Submitting ..." : "Submit"}</button>
            {state.succeeded && 
            <p  style={{ fontSize: "15px", marginTop: "1.7rem" }} >
              <Lottie loop={false} style={{height:55}} animationData={doneAnimation} />
              your message has been sent successfully 👌</p>}
          </form>
          <div className="animation "><Lottie  style={{height:400, marginRight:'50px',marginBottom:'30px'}} animationData={contact} /></div>
        </div>
      </section>
    </>
  );
}
