import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';

export default class Watches extends Component{
  constructor(props){
    super(props)

    this.rerouteThis = this.rerouteThis.bind(this);
  }

  rerouteThis(watchid){
    this.setState(this.props.history.push(`watches/${watchid}`))
  }

  render(){

    const watch = this.props.allWatchData.map( watch => {

    const watch_img = JSON.parse(`${watch.image}`)

      var styles = {
        background: `url('${watch_img.image_links[0]}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };

      return(
            <div className="item-div" onClick={ () => this.rerouteThis(watch.id)}>
              <div className="item-div-image" style={styles}>
              </div>
              <h4>{watch.name}</h4>
              <p>${watch.price}</p>
            </div>
        )
    })

    return(
            <div className="recent-arrivals" id="recent-arrivals">
              <h2> Recent Arrivals </h2>
              <div id="line-div-thingy">
                <div className="recent-arrivals-flex-parent">
                  {watch}
                </div>
              </div>
            </div>

    )
  }



}