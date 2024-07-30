import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Counter from './counter.jsx';
import logo_one from './assets/best_buy_logo.png';
import logo_two from './assets/fedex_logo.png';
import logo_three from './assets/funasia_logo.png';
import logo_four from './assets/microsoft_logo.png';
import logo_five from './assets/j_p_morgan_logo.png';

function Hero() {

    const styles = {
        hero: {
            backgroundColor: '#E0E0E0',
            padding: '20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)', // Two columns with equal width
            gap: '20px',
            justifyContent: 'center', // Center grid items horizontally
            margin: '0 auto', // Center the grid container itself
            textAlign: 'center',
            position: 'relative',
            top: '50px',
            boxShadow: '0px 2px 2px 3px #a8a8a8',
            width: '95%',
            borderRadius: '10px'
        },
        heading: {
            gridColumn: 'span 2', // Makes the heading span across both columns
            marginBottom: '20px',
            color: '#333333' // Space between heading and counter items
        },
        counterItem: {
            backgroundColor: '#CCCCCC',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px',
            borderRadius: '8px',
            textAlign: 'center',
            width: '30%', // Set width to 30% of the grid container
            position: 'relative', // Add position relative to allow for absolute positioning of the counter
            left: '220px',
            boxShadow: '0px 2px 2px 1px #a8a8a8',
        },
        span: {
            color: '#4682B4',
            textDecoration: 'underline'
        },
        imageStyles: {
            width: '350px', // Adjust the width to 250px
            height: 'auto', // Maintain aspect ratio
            margin: '0 auto' // Center the image within the div
        },
        sponsorsText: {
            textAlign: 'center',
            gridColumn: 'span 2',
            margin: '20px 0' // Space above and below the text
        }
    }

    return (
        <div style={styles.hero}>
            <h1 style={styles.heading}><span style={styles.span}>Empowering</span> the Next Generation of <span style={styles.span}>Changemakers</span></h1>
            <div style={styles.counterItem}>
                <Counter counterTitle="Number of Students" counterNumber={1000} />
            </div>
            <div style={styles.counterItem}>
                <Counter counterTitle="Number of Chapters" counterNumber={30} />
            </div>
            <div style={styles.counterItem}>
                <Counter counterTitle="Number of Students Impacted" counterNumber={12500} />
            </div>
            <div style={styles.counterItem}>
                <Counter counterTitle="Amount Donated" counterNumber={26000} />
            </div>
            <h2 style={styles.sponsorsText}>Sponsors</h2>
            <div style={{ gridColumn: 'span 2' }}>
                <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                    <div>
                        <img src={logo_one} alt="Logo One" style={styles.imageStyles} />
                    </div>
                    <div>
                        <img src={logo_two} alt="Logo Two" style={styles.imageStyles} />
                    </div>
                    <div>
                        <img src={logo_three} alt="Logo Three" style={styles.imageStyles} />
                    </div>
                    <div>
                        <img src={logo_four} alt="Logo Four" style={styles.imageStyles} />
                    </div>
                    <div>
                        <img src={logo_five} alt="Logo Five" style={styles.imageStyles} />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Hero;
