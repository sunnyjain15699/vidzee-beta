import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class Slider extends Component {
    render() {
        return (
            <Carousel style={styles} showThumbs={false} infiniteLoop={true} width="100%" height="10%"autoPlay={true}>
                <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

export default Slider;