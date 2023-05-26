import React, {Component} from 'react';

class Nav extends Component {
 render() {
  return (
    <div className="row nav-pad contain">
     <div className="col-lg col-sm logo">
      <img src="steph-logo.svg" alt="Logo for Stephanie Thompson"/>
      <div className="social-block text-center">
       <a href="https://github.com/Rocklobster84" target="_blank" rel="noreferrer noopener">
        <i className="fab fa-github fa-4x social"></i>
       </a>
       &nbsp;&nbsp;&nbsp;
       <a href="https://www.linkedin.com/in/stephthomp/" target="_blank" rel="noreferrer noopener">
        <i className="fab fa-linkedin fa-4x social"></i>
       </a>
       &nbsp;&nbsp;&nbsp;

       &nbsp;&nbsp;&nbsp;
       <a href="https://www.behance.net/stephrthompson" target="_blank" rel="noreferrer noopener">
        <i className="fab fa-behance fa-4x social"></i>
       </a>
      </div>
     </div>
     <div className="col-sm col-lg">
     </div>
     <div className="col-sm col-lg" id="steph-nav" data-spy="scroll" data-target="#steph-nav" data-offset="0">
      <ul className="nav justify-content-end">
       <li className="nav-item">
        <a className="nav-link active" href="#about">About</a>
       </li>
       <li className="nav-item">
        <a className="nav-link" href="#portfolio">Portfolio</a>
       </li>
      </ul>
     </div>
    </div>
  )
  }
}

export default Nav;