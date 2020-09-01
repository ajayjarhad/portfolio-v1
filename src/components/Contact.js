import React from 'react';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xgenjrqz"
        method="POST"
      >
        <label>Your email:</label>
        <input type="email" name="email" />
        <label>Message:</label>
        <input type="text" name="message" style={{ height: '10rem' }} />
        {status === 'SUCCESS' ? (
          <p>Thanks! I will get back to you :)</p>
        ) : (
          <button
            style={{
              marginTop: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Submit
          </button>
        )}
        {status === 'ERROR' && (
          <p>
            Ooops! There was an error while sending the message, pleasee try
            again :).
          </p>
        )}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }
}
