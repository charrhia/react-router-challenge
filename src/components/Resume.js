import React from 'react';
import { Link } from 'react-router';
import SkillsContainer from '../containers/SkillsContainer';
import VolunteerExperienceContainer from '../containers/VolunteerExperienceContainer';
import WorkExperienceContainer from '../containers/WorkExperienceContainer';
import EducationExperienceContainer from '../containers/EducationExperienceContainer';
import SkillTile from './SkillTile'

const Resume = (props) => {
 return(
   <div className="small-12 small-centered columns">
     <div className="small-3 columns">
      <h3>
        <Link to={`/resume/skills`}>Skills</Link>
      </h3>

     </div>

     <div className="small-3 columns">


      <h3>
        <Link to={`/resume/education`}>Education</Link>
      </h3>
     </div>

     <div className="small-3 columns">

      <h3>

        <Link to={`/resume/workexperience`}>Past Work</Link>


      </h3>
     </div>
     <div className="small-3 columns">
      <h3>
        <Link to={`/resume/volunteer`}>Volunteer Experience</Link>
      </h3>

     </div>





     <div className="resume-section" id="skills"><SkillsContainer /></div>
     <div className="resume-section" id="education"><EducationExperienceContainer /></div>
     <div className="resume-section" id="past-work"><WorkExperienceContainer /></div>
     <div className="resume-section" id="volunteer-experience"><VolunteerExperienceContainer /></div>
   </div>
 )
}

export default Resume;
