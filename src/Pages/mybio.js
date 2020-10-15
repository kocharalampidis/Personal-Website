import React, { Fragment } from 'react';
import '../components/css/mybio.css'

function mybio(){
    return(
    <Fragment>    
        
        <div class="left"></div>
        <div class="stuff">
          
          <h1>Resume</h1>
          <h2>KCH</h2>
          <hr />
          
          <p class="head">Interests</p>
          <ul>
            <li>Drawing</li>
            <li>Photography</li>
            <li>Design</li>
            <li>Programming</li>
            <li>Computer Science</li>
          </ul>
          <p class="head">Skills</p>
          <ul>
            <li>Web Design with HTML & CSS</li>
          </ul>
          <p class="head">Education</p>
          <ul>
            <a href="http://www.wiltonhighschool.org/pages/Wilton_High_School">
              <li>Wilton High School</li>
            </a>
            
            <a href="https://www.silvermineart.org/">
              <li>Silvermine School of Arts</li>
            </a>
            <li>Codeacademy</li>
          </ul>
          <p class="head">Experience</p>
          <ul>
            <li>Student Technology Intern for Wilton School District</li>
            <li>Babysitter</li>
          </ul>
          <p class="head">Extracurriculars</p>
          <ul>
            <li>Recycling Club</li>
            <li>Gardening Club</li>
            <li>Book Club</li>
          </ul>
        </div>
        <div class="right"></div>
        <div id="footer">
       
        </div>

    </Fragment>
    );
}

export default mybio;