import React, {Component} from 'react';

class Intro extends Component {
 render() {
  return (
    <section id="intro">
    <div className="row pad-bottom contain" id="about">
     <div className="col-lg-8 col-md-8 col-sm-12">
      <div className="intro-content">
       <h1>Hi, I'm Stephanie</h1>

       <p className="intro-text">A passionate Web Application Engineer with 7+ years of experience with designing,
        building, and deploying web applications utilizing various technologies and programming languages. I am
        constantly striving to learn more and hone my craft. This has led to experience across a great number of
        technologies. I have a background in various industries including law, real estate, marketing, and
        information technology as well as being a graphic designer. This enables me to bring a unique perspective
        and high level of organization to any project I work on.</p>

       <div className="row info-bullets">
        <div className="col col-lg-4 col-md-4 col-sm-12 skills">
         <h3>Skills</h3>
         <div className="row">
          <div className="col-lg col-sm-6">
           <ul>
            <li>Node.js</li>
            <li>Apache</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Express.js and EJS</li>
            <li>MySQL</li>
            <li>MongoDB and Mongoose</li>
            <li>RESTful Routing</li>
            <li>PHP</li>
           </ul>
          </div>
          <div className="col-lg col-sm-6">
           <ul>
            <li>Python</li>
            <li>Flask</li>
            <li>Bootstrap 4</li>
            <li>Linux CLI</li>
            <li>Adobe CC</li>
            <li>WebStorm</li>
            <li>Perforce</li>
            <li>GitHub</li>
            <li>Bash Scripting</li>
            <li>JSON and XML</li>
           </ul>
          </div>
         </div>
        </div>
        <div className="col-lg-1">
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 skills">
         <h3>Education</h3>
         <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-1">
           <i className="fas fa-graduation-cap cap"></i>&nbsp;
          </div>
          <div className="col-lg-11 col-md-11 col-sm-11">
           <p className="school-info"> &nbsp;BS in Computer Science, 2020<br /><small> &nbsp;Southern New Hampshire University</small></p>
          </div>
         </div>
         <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-1">
           <i className="fas fa-graduation-cap cap"></i>&nbsp;
          </div>
          <div className="col-lg-11 col-md-11 col-sm-11">
           <p className="school-info"> &nbsp;AA in General Studies, 2013<br /><small> &nbsp;Tarrant County College</small></p>
          </div>
         </div>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-12 skills">
         <h3>Interests</h3>
         <ul>
          <li>Gardening</li>
          <li>Photography</li>
          <li>Music</li>
          <li>Cats</li>
         </ul>
        </div>
       </div>

     <div className="col-lg-4 col-md-4 col-sm-12 text-center">
      <img src="steph-photo.jpg" alt="Stephanie Thompson" className="intro-photo mx-auto d-block" /> <br/>
      <img src="signature.svg" alt="Stephanie Signature" className="signature mx-auto d-block" /> <br/>
      <a className="btn btn-light btn-lg resume-button" href="Stephanie-Thomspon-Resume.pdf" role="button"
         target="_blank"><i className="fas fa-file"></i>&nbsp; See My Resume</a>
     </div>
      </div>
     </div>
    </div>
 </section>
  )
  }
}

export default Intro;