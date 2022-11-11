import React, { useState, useEffect } from 'react';
import { Select } from 'antd';

import Api from 'api';
import './scss/WelcomePage.scss';

const Home = () => {
  const [entities, setEntities] = useState();
  const [activities, setActivities] = useState();
  const [selectedActivities, setSelectedActivities] = useState();

  useEffect(() => {
    (async () => {
      if (!entities) {
        const ents = await Api.entities.all();
        setEntities(ents);
      }

      if (!activities) {
        const acts = await Api.activities.all();
        setActivities(acts);
      }
    })();
  }, []);

  // const onSubmit = (evt) => {
  //   evt.preventDefault();
  //   const formData = new FormData(document.getElementById('contactForm')); // eslint-disable-line
  //   console.log(formData);
  // };

  const activitiesSelect = activities?.map((act, idx) => ({ value: idx, label: act }));

  return (
    <div className='unc-welcome'>
      <form id="contactForm" action='http://localhost:3000'>
        <div className="form-floating mb-3">
          <input className="form-control" name="firstname" type="text" placeholder="Enter your name..."
            data-sb-validations="required" />
          <label htmlFor="name">First name</label>
          <div className="invalid-feedback">A name is required.</div>
        </div>

        <div className="form-floating mb-3">
          <input className="form-control" name="lastname" type="text" placeholder="Enter your name..."
            data-sb-validations="required" />
          <label htmlFor="name">Last name</label>
          <div className="invalid-feedback">A name is required.</div>
        </div>

        <div className="form-floating mb-3">
          <select className="form-select form-select-lg mb-3" name="entity">
            <option selected>Open this select menu</option>
            {entities?.map((entity, idx) => (
                <option value={idx}>{entity}</option>
            ))}
          </select>
          <label htmlFor="name">Entity</label>
          <div className="invalid-feedback">A name is required.</div>
        </div>

        <input type='hidden' name="activities" value={selectedActivities} />

        <div className="form-floating mb-3 d-flex justify-content-around flex-wrap">
          <div className="form-check">
            {activities
              && <Select
                mode="multiple"
                placeholder='Interest'
                onChange={(val) => {
                  setSelectedActivities(val);
                }}
                style={{ width: 440 }}
                options={activitiesSelect}
              />
            }
          </div>
        </div>

        {/* <div className="form-floating mb-3">
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
        </div> */}

        <button type='submit' className="btn btn-primary btn-xl">Send</button>
      </form>

    </div>
  );
};

export default Home;
