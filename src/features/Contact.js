const Contact = () => {
  return (
    <div className="contact_container">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="contact_header"
        id="contact"
      >
        <p>Contact Me</p>
        <hr />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
        className="contact_desc"
      >
        <p>
          If you’ve gotten to the end, thanks for taking the time to stick
          around! I sincerely appreciate it. I’m always looking for
          opportunities to grow and teach others while doing so! If you have any
          questions or want to reach out with an opportunity, my inbox is always
          open, and I will respond as soon as I can.{" "}
        </p>
        <button className="landing_btn">Contact Me</button>
      </div>
      <span></span>
    </div>
  );
};

export default Contact;
