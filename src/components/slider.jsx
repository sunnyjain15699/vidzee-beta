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
                <img src="http://image.tmdb.org/t/p/original//m67smI1IIMmYzCl9axvKNULVKLr.jpg" />
                    <p className="legend">Woody, Buzz Lightyear and the rest of the gang embark on a road trip with Bonnie and a new toy named Forky. The adventurous journey turns into an unexpected reunion as Woody's slight detour leads him to his long-lost friend Bo Peep. As Woody and Bo discuss the old days, they soon start to realize that they're worlds apart when it comes to what they want from life as a toy.</p>
                </div>
                <div>
                <img src="http://image.tmdb.org/t/p/original//phxiKFDvPeQj4AbkvJLmuZEieDU.jpg" />
                    <p className="legend">This is the story of one of the X-Men’s most beloved characters, Jean Grey, as she evolves into the iconic DARK PHOENIX. During a life-threatening rescue mission in space, Jean is hit by a cosmic force that transforms her into one of the most powerful mutants of all. Wrestling with this increasingly unstable power as well as her own personal demons, Jean spirals out of control, tearing the X-Men family apart and threatening to destroy the very fabric of our planet.</p>

                </div>
                <div>
                <img src="http://image.tmdb.org/t/p/original//dihW2yTsvQlust7mSuAqJDtqW7k.jpg" />
                    <p className="legend">In Mexico, Nick Fury and Maria Hill encounter a storm revealed to be the Earth Elemental. A superpowered man, Quentin Beck, arrives to fight the creature. In New York City, the Midtown School of Science and Technology restarts its academic year to accommodate the students returning after the second Snap,[N 1] referred to here as "the Blip", which occurred eight months earlier.</p>
                </div>
                <div>
                <img src="http://image.tmdb.org/t/p/original//4DHHymlttV0YskaxoWtuIDNDhPl.jpg" />
                    <p className="legend">Determined to keep Annabelle from wreaking more havoc, paranormal investigators Ed and Lorraine Warren lock the possessed doll in the artifacts room in their house. But when the doll awakens the room's evil spirits, it soon becomes an unholy night of terror for the couple's 10-year-old daughter, her friends and their young baby sitter.</p>
                </div>
            </Carousel>
        );
    }
}

export default Slider;