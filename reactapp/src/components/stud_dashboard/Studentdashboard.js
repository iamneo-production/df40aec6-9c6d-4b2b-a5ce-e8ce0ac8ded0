import React from 'react';
import './dash.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Studentdashboard = () => {
  return (
    <div >
    <header>
      <p className='heading'><center>Welcome to Admission Portal</center></p>
    </header>
    <main>
      <section>
        <h2>Profile</h2>
        <p>
          User can update their credentials whenever necessary.
        </p>
        
      </section>
      <section>
        <h2>Track Application</h2>
        <p>
          Check the status of your admission application and stay updated.
        </p>
        
      </section>
      <section>
      <h2>Courses Enroll</h2>
        <p>
          Browse and enroll in courses to start your educational journey.
        </p>
        
        
      </section>
     
      </main>
    
    <main>
    <section>
        <h2>Enrollments</h2>
        <p>
          Check important updates of your enrolled coures and stay tuned.
        </p>
        
      </section>
      <section>
      <h2>Notifications</h2>
        <p>
          Receive important notifications and updates about your admission.
        </p>
        
      </section>
      </main>
      
      
    
  </div>
  );
};

export default Studentdashboard;
