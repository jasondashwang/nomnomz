import React from 'react';

export default function Contact (props) {

  const handleNameChange = props.handleNameChange,
        handleEmailChange = props.handleEmailChange,
        handleMessageChange = props.handleMessageChange,
        handleSubmit = props.handleSubmit,
        handleReset = props.handleReset,
        response = props.response,
        disabled = props.disabled,
        name = props.name,
        email = props.email,
        message = props.message;

  return (
    <article id="contact">
      <h2 className="major">Contact</h2>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={handleNameChange} value={name} disabled={disabled} />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" onChange={handleEmailChange} value={email} disabled={disabled} />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="4" onChange={handleMessageChange} value={message} disabled={disabled} ></textarea>
        </div>
        <ul className="actions">
          <li><input type="submit" value={response} className="special" disabled={disabled} /></li>
          <li><input type="reset" value="Reset" disabled={disabled} /></li>
        </ul>
      </form>
      {
        /*
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>

          */
      }

    </article>
  );

}

