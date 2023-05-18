import React, {Component} from 'react';

class Cards extends Component {
 render() {
  return (<div className="card">
   <h2 className="name">Card Name</h2>
   <img src="image" alt="alt text"/>
   <h5 style={{fontSize: '2em', margin: '2px'}}>Card Text</h5>
   <HobbyList />
  </div>);
  }
}

export default Cards;