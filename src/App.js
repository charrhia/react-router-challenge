import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Layout from './components/Layout'
import NavBar from './containers/NavBar'
import About from './components/About'
import Resume from './components/Resume'
import ProjectsIndexContainer from './containers/ProjectsIndexContainer'
import SkillsContainer from './containers/SkillsContainer';
import EducationExperienceContainer from './containers/EducationExperienceContainer';
import WorkExperienceContainer from './containers/WorkExperienceContainer';
import VolunteerExperienceContainer from './containers/VolunteerExperienceContainer';
import ProjectShowContainer from './containers/ProjectShowContainer';
import ProjectShow from './components/ProjectShow'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(

      <div id="main-page">
        <Layout />

        <Router history={browserHistory}>
          <Route path='/' component={NavBar} >
          <IndexRoute component={About} />
          <Route path='/aboutme' component={About} />
          <Route path='/resume' component={Resume} />
          <Route path='/resume/skills' component={SkillsContainer} />
          <Route path='/projects' component={ProjectsIndexContainer} />
          <Route path='/resume/education' component={EducationExperienceContainer} />
          <Route path='/resume/workexperience' component={WorkExperienceContainer} />
          <Route path='/resume/volunteer' component={VolunteerExperienceContainer} />
          <Route path='/projects/:id' component={ProjectShowContainer} />

        </Route>

      </Router>






    </div>


  )
  }
}

export default App;
