import React, { Component } from 'react';

export default class Watch extends Component{
  constructor(props){
    super(props)

    this.swapImage = this.swapImage.bind(this);
    
  }

   componentDidMount() {
    window.scrollTo(0, 0);
  }



  swapImage(link){
        var imageDiv = document.querySelectorAll('#single-item-image-div')[0];

        imageDiv.style =  `background: url('${link}'); background-size: cover; background-position: center;`
      }

  render(){

    const watch = this.props.allWatchData.find( watch => {
      return watch.id === Number(this.props.match.params.id);
      });

    const watch_img = JSON.parse(`${watch.image}`)
    const watch_specs = JSON.parse(`${watch.specs}`)

    console.log(watch_specs)

    //console.log(watch_img[0].image_links)

      var styles = {
        background: `url('${watch_img.image_links[0]}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };

      const galleryDiv = watch_img.image_links.map( link => {

      var styles2 ={
        background: `url('${link}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }

        return(
                
                <div id="gallery-image" style={styles2} onMouseOver={ () => this.swapImage(link)}>

                </div>
    
          )
      });



    return(

      <div id="single-item-page">
      <h2 id="single-item-title">{watch.name}</h2>
      <div id="single-item-line-div-thingy">
      <div id="single-item-image-div" style={styles}></div>
      <div id="single-item-info-div">
      <div id="gallery-flex">
      {galleryDiv}
      </div>
      <p id="single-item-description">{watch.description}</p>
      <p id="single-item-price">${watch.price}</p>
      <ul id="single-item-specs">
      <li><span id="label"> Material:</span> {watch_specs[0].material}</li>
      <li><span id="label"> Width:</span> {watch_specs[0].width}</li>
      <li><span id="label"> Height:</span> {watch_specs[0].height}</li>
      <li><span id="label"> Movement:</span> {watch_specs[0].movement}</li>
      </ul>
      <div id="add-to-cart-button">ADD TO CART</div>
      </div>

      </div>
      </div>

    )
  
  }




}