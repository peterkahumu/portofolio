import React from 'react';

class EducationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      institutions: [
        {
          school: 'MULTIMEDIA UNIVERSITY OF KENYA',
          degree: 'BACHELOR OF SCIENCE IN COMPUTER SCIENCE',
          graduationYear: 'MAY, 2026',
        },
        {
          school: 'OTHAYA BOYS HIGH SCHOOL',
          degree: 'KENYA CERTIFICATE OF SECONDARY EDUCATION',
          graduationYear: 'APRIL, 2022',
        },
      ],
    };
  }

  // Handle input changes for a specific institution
  handleInputChange=(e, index) => {
    const { name, value } = e.target;
    const updatedInstitutions = [...this.state.institutions];
    updatedInstitutions[index][name] = value;
    this.setState({
      institutions: updatedInstitutions,
    });
  };

  render() {
    return (
      <div>
        <h1>Education Credentials</h1>
        {this.state.institutions.map((institution, index) => (
          <div key={index}>
            <h2>Institution {index + 1}</h2>
            <form>
              <div>
                <label>School:</label>
                <input
                  type="text"
                  name="school"
                  value={institution.school}
                  onChange={(e) => this.handleInputChange(e, index)}
                />
              </div>
              <div>
                <label>Degree:</label>
                <input
                  type="text"
                  name="degree"
                  value={institution.degree}
                  onChange={(e) => this.handleInputChange(e, index)}
                />
              </div>
              <div>
                <label>Graduation Year:</label>
                <input
                  type="text"
                  name="graduationYear"
                  value={institution.graduationYear}
                  onChange={(e) => this.handleInputChange(e, index)}
                />
              </div>
            </form>
          </div>
        ))}
        <h2>Your Education Credentials:</h2>
        {this.state.institutions.map((institution, index) => (
          <div key={index}>
            <p>Institution {index + 1}</p>
            <p>School: {institution.school}</p>
            <p>Degree: {institution.degree}</p>
            <p>Graduation Year: {institution.graduationYear}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default EducationForm;
