import React, { useState } from 'react';

export const LoginForm = ({ login, error }) => {
  const [details, setDetails] = useState({ Username: '', password: '' });

  const submitHandler = (e) => {
    e.preventDefault();
    login(details);
  };
  return (
    <form className="Form" onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        <h3> {error !== '' ? <div className="error">{error}</div> : ''}</h3>
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) =>
              setDetails({ ...details, Username: e.target.value })
            }
            value={details.Username}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="Submit" id="submit" />
      </div>
    </form>
  );
};
