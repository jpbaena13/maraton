import React from 'react';

import './scss/WelcomePage.scss';

const Home = () => (
  <div className='unc-welcome'>
    <form id="contactForm">
      <div className="form-floating mb-3">
        <input className="form-control" id="name" type="text" placeholder="Enter your name..."
          data-sb-validations="required" />
        <label htmlFor="name">First name</label>
        <div className="invalid-feedback">A name is required.</div>
      </div>

      <div className="form-floating mb-3">
        <input className="form-control" id="name" type="text" placeholder="Enter your name..."
          data-sb-validations="required" />
        <label htmlFor="name">Last name</label>
        <div className="invalid-feedback">A name is required.</div>
      </div>

      <div className="form-floating mb-3">
        <select class="form-select form-select-lg mb-3" id="name">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label htmlFor="name">Entity</label>
        <div className="invalid-feedback">A name is required.</div>
      </div>

      <div className="form-floating mb-3">
        <div class="form-check">
        <label htmlFor="name">Interest</label>
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div className="invalid-feedback">A name is required.</div>
      </div>



      <div className="form-floating mb-3">
        <input className="form-control" id="email" type="email" placeholder="name@example.com"
          data-sb-validations="required,email" />
        <label htmlFor="email">Email address</label>
        <div className="invalid-feedback">An email is required.</div>
        <div className="invalid-feedback">Email is not valid.</div>
      </div>

      <div className="form-floating mb-3">
        <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890"
          data-sb-validations="required" />
        <label htmlFor="phone">Phone number</label>
        <div className="invalid-feedback">A phone number is required.
        </div>
      </div>
      <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
    </form>

  </div>
);

export default Home;
