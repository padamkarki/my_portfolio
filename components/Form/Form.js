import classes from "./Form.module.css";

const Form = () => {
  return (
    <>
      <div className={classes.form}>
        <div>
          <h1 className={classes.form_title}>Get in touch</h1>
          <p className={classes.description}>
            Write a message below and I will get back to you as soon as
            possible.
          </p>
        </div>
        <form>
          <div>
            <label htmlFor="name"></label>
            <input
              className={classes.input}
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
            />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input
              className={classes.input}
              type="email"
              id="email"
              name="email"
              placeholder="Your email.."
            />
          </div>
          <div>
            <label htmlFor="message"></label>
            <textarea
              className={classes.input}
              type="textarea"
              id="message"
              name="message"
              placeholder="Your message.."
              rows="9"
              cols="21"
            />
          </div>
          <div>
            <button
              // onSubmit=""
              className={`${classes.btn} ${classes["btn-4"]}`}
            >
              Send now
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
