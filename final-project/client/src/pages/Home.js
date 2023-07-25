// https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8150507/

import React from 'react';
import { Link } from 'react-router-dom';
import BrainImage from '../components/BrainImage';

const Home = () => {
  return (
    <div>
      {/* Epigenetics content */}
      <div id="epigenetics" className="container mx-auto mb-12">
        <div className="flex items-center justify-center h-screen">
          <div className="bg-grey text-white font-bold rounded-lg border shadow-lg p-10">
            <h1>Epigenetics & Sleep</h1>
            <p>Epigenetics is the study of how your behaviors and environment can cause changes that affect the way your genes work.</p>
            <p>Within our DNA, chemical modifications occur that change the degree to which genes are turned on and off.</p>
            <p>These epigenetic modifications may pass from parent cell to daughter cell during cell division or from one generation to the next (National Human Genome Research Institute).</p>
            <br/>
            <p> So, if we examine environmental factors and how they alter gene expression, we can assist in Optimizing Health and development of Precision Medicine.</p>
            <p> Also, examining the link between epigenetics and sleep is vital, given the association between sleep and many complex health disorders.</p>
            <br/>
            <p className="my-4" style={{ textAlign: 'left', color: 'lightblue', paddingBottom: '20%' }}>
              <strong>DO YOU WANT TO LEARN HOW TO OPTIMIZE YOUR HEALTH THROUGH QUALITY SLEEP? EXPLORE OUR SLEEP SURVEY TO RECEIVE YOUR PERSONALIZED SLEEP PLAN</strong>
            </p>
            <Link to="/epigenetics">ENTER EPIGENETICS AND SLEEP...</Link>
          </div>
        </div>
      </div>
      <BrainImage />

      {/* Sleep content */}
      <div id="sleep" className="container mx-auto mb-12">
        <div className="flex items-center justify-center h-screen">
          <div className="bg-grey text-white font-bold rounded-lg border shadow-lg p-10">
            <h1>Sleep</h1>
            <p>Sleep is the foundation of physical health, mental health and human performance across all life settings.</p>
            <p>AND Sleep research highlights the impact of quality sleep upon cognitive function, immunity, physiological healing, longevity and so much more.</p>
            <div className="px-8">
              <br/>
              <img src='./assets/sleep.png' alt="sleep image" />
            </div>
          </div>
        </div>
      </div>


      <div id="healthcare" className="container mx-auto mb-12">
        <div className="flex items-center justify-center h-screen">
          <div className="bg-grey text-white font-bold rounded-lg border shadow-lg p-10">
            <h1>Preventative Healthcare</h1>
            <p>Primary prevention refers to actions aimed at avoiding the manifestation of a disease through implementation of systemic resources and health services.</p>
            <p>Prevention hinges very much on your sleep, exercise, environment, diet and access so to optimize physical and mental health.</p>
            <div className="px-8">
              <br/>
              <img src='./assets/Health.png' alt="nature image" />
            </div>
          </div>
        </div>
      </div>

      {/* Resources content */}
      <div id="plan" className="container mx-auto mb-12">
        <div className="flex items-center justify-center h-screen">
          <div className="bg-grey text-white font-bold rounded-lg border shadow-lg p-10">
            <h1>Your Plan</h1>
            <p>Optimize your health through exploring your sleep patterns and implementing sleep strategies.</p>
            {/*<Link to="/yourplan">ENTER</Link>*/}
            <div className="px-8">
              <br/> 
              <img src='./assets/Plan.png' alt="snow hikers image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;





