
import React from 'react';
import Gallery from './Components/Gallery';

// we could get this data from server
import homes from './data/homesConfig';

class Homes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homesArray: homes
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(item) {
    alert("you clicked on " + item.name);
  }

  render(){
    return (
      <Gallery name="Homes" itemsArray={this.state.homesArray} onItemClick={this.handleItemClick}/>
    );
  }
}

export default Homes;

