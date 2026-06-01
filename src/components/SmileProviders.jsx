import employees from '../data/employees.js';
import { imageSources } from '../data/images.js';

function SmileProviders() {
  return (
    <section className="smile-section" id="recruitment">
      <div className="smile-intro">
        <div className="section-heading">
          <p>Recruitment</p>
          <h2>Join the People Behind Every Beautiful Visit</h2>
        </div>
        <p>
          At Naturals, stylists and technicians are called Smile Providers because their
          work goes beyond beauty. They create confidence, comfort, and happiness through
          every service.
        </p>
      </div>

      <div className="employee-grid">
        {employees.map((employee, index) => (
          <article className="employee-card" key={employee.role}>
            <div className="employee-image">
              <img
                src={imageSources.team.smileProviders[index]}
                alt={`${employee.role} at Naturals`}
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="employee-details">
              <span>{employee.experience}</span>
              <h3>{employee.name}</h3>
              <h4>{employee.role}</h4>
              <p className="specialty">{employee.specialty}</p>
              <p>{employee.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SmileProviders;
