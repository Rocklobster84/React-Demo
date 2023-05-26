import React, {Component} from 'react';

class Cards extends Component {
 render() {
  return (
    <div className="col-lg-4 examples">
     <div className="card">
      <div className="embed-responsive embed-responsive-16by9 card-img-top">
       <iframe className="embed-responsive-item card-img-top" src="https://youtube.com/embed/9nq42_AO9n0" title="Title" allowFullScreen></iframe>
       <br/>
      </div>
      <div className="card-body">
       <h3 className="card-title">Pointwise</h3>
       <p className="card-text">MEN Stack Application (MongoDB, Express.js, Node.js)<br/><br/>
        I've spent 6&frac12; years at Pointwise and during that time completely updated their web presence. Not
        only did I re-design the website, I updated the backend to move away from SSI to a more modern approach.
       </p>
       <a href="https://www.pointwise.com" className="btn btn-card btn-lg" target="blank"
          rel="no-referrer noopener">View
        Live</a>
      </div>
     </div>
    </div>
  )
  }
}

export default Cards;