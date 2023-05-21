import React from 'react';
import portfolio1 from '../assets/image/1smaller.jpg'
import portfolio2 from '../assets/image/2smaller.jpg'

const Portfolio = () => {
    return (
        <section id='portfolio' className='portfolio'>
         <div className="containerAll">
            <div className="section-title">
                <h2>Portfolio</h2>
                <p>My Works</p>
            </div>
            <div className="contentContainer" id='containerImagePortfolio'>
             <img src={portfolio1} alt="portfolio" />
             <img src={portfolio2} alt="portfolio" />
            </div> 
          </div>
        </section>
    );
};

export default Portfolio;