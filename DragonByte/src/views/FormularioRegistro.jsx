import React from 'react';

const FormularioRegistro = () => {
  return (
    <div className="register" style={{ padding: '20px' }}> 
      <div className="register-container">
        <h2 className="register-title">CREATE AN ACCOUNT</h2>
        <form id="registrationForm">
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="regUsername">User Name</label>
            <input type="text" className="form-control" id="regUsername" name="regUsername" placeholder="Select a User Name" required />
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="regEmail">E-mail Adress</label>
            <input type="email" className="form-control" id="regEmail" name="regEmail" placeholder="your.email@example.com" required />
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="regPassword">Password</label>
            <input type="password" className="form-control" id="regPassword" name="regPassword" placeholder="At least 8 characters" required />
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="regConfirmPassword">Confirm Password</label>
            <input type="password" className="form-control" id="regConfirmPassword" name="regConfirmPassword" placeholder="Repeat Password" required />
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="regAge">Age</label>
            <input type="number" className="form-control" id="regAge" name="regAge" min="5" max="120" placeholder="Age" required />
          </div>

          <fieldset className="form-group" style={{ marginBottom: '15px' }}>
            <legend className="dob-legend">Birth Date</legend>
            <div className="dob-group" style={{ display: 'flex', gap: '10px' }}>
              <div>
                <label htmlFor="regDobDay">Day</label>
                <select className="form-control" id="regDobDay" name="regDobDay" required>
                  <option value="">Day</option>
                  <option value="1">1</option> <option value="2">2</option> <option value="3">3</option>
                </select>
              </div>
              <div>
                <label htmlFor="regDobMonth">Month</label>
                <select className="form-control" id="regDobMonth" name="regDobMonth" required>
                  <option value="">Month</option>
                  <option value="1">January</option> <option value="2">February</option>
                </select>
              </div>
              <div>
                <label htmlFor="regDobYear">Year</label>
                <select className="form-control" id="regDobYear" name="regDobYear" required>
                  <option value="">Year</option>
                  <option value="2000">2000</option><option value="1999">1999</option>
                </select>
              </div>
            </div>
          </fieldset>

          <button type="submit" className="btn btn-register">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default FormularioRegistro;