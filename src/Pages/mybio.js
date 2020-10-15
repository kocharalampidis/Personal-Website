import React, { Fragment } from 'react';
import '../components/css/mybio.css'

function mybio(){
    return(
    <Fragment>    

      <section></section>  
        <div class="main-container">
          
          
          <h2>KCH</h2>
          <hr /> 
          
          <p class="head">Education</p>
          <ul>
            <li>Computer Science Department
               of the International Hellenic University,
               Software Engineer</li>
            </ul>
          <p class="head">Skills</p>
          <ul>
            <li>Python</li>
            <li>SQL</li>
            <li>Java</li>
            <li>C++</li>
          </ul>
          <p class="head">Online Courses</p>
          <ul>
            <li>Introduction to TensorFlow
               for Artificial Intelligence, Machine Learning,
               and Deep Learning
            </li>
            <li>Java Programming Masterclass
               for Software Developers
            </li>
            <li>
              Practical Deep Learning with PyTorch
            </li>
          </ul>
          <p class="head">Work Experience</p>
          <ul>
            <li>
              Electrician Assistant, Prokat Kavalas
            </li>
            <li>
              Secretarial Support, Order and Warehouse Manager,
              Nikolaos Manzouranis-Massage, Chiropractic and
              Alternative Therapies
            </li>
            <li>
              Shift Manager, Tsalapeteinos Urban Farm
            </li>
          </ul>
          
        </div>
    
        </Fragment>
    );
}

export default mybio;