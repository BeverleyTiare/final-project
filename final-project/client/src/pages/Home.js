//https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8150507/
//msg re survey- take our sleep survey to get a personalized sleep plan
import React from 'react';
import { Link } from 'react-router-dom';
import BrainImage from '../components/BrainImage';

const Home = () => {
  return (
    <div>
      {/* Epigenetics content */}
      <div id="epigenetics" className="container mx-auto mb-25">
        <div className="flex items-center justify-center h-screen">
          <div className="bg-grey text-white font-bold rounded-lg border shadow-lg p-10">
            <h1>Epigenetics & Sleep</h1>
            <p>"Epigenetics is a field of study focused on changes in DNA that do not involve alterations to the underlying DNA sequence</p>
            <p>The DNA letters and the proteins that interact with DNA can have chemical modifications that change the degrees to which genes are turned on and off</p>
            <p>Certain epigenetic modifications may be passed on from parent cell to daughter cell during cell division or from one generation to the next"</p>
            <p>(National Human Genome Research Institute)</p>
            <br/>
            <br/>
            <p className="my-4" style={{ textAlign: 'left', color: 'lightblue', paddingBottom: '20%' }}>
            <strong>COMPLETE OUR SLEEP SURVEY TO RECEIVE YOUR PERSONALIZED SLEEP PLAN...JUST SIGN UP TO BEGIN</strong>
            </p>
            <br/>
            <Link to="/epigenetics">ENTER EPIGENETICS AND SLEEP...</Link>
          </div>
        </div>
      </div>
      <BrainImage />

      {/* Sleep content */}
      <div id="sleep" className="container mx-auto mb-25">
        <div className="flex items-center justify-center h-screen">
          <div className="bg-grey text-white font-bold rounded-lg border shadow-lg p-10">
            <h1>Sleep</h1>
            <p>Sleep is the foundation of physical health, mental health and human performance in all settings</p>
            <p>Sleep is also central to our cognitive function, immunity, wound healing, longevity and so much more</p>
            <Link to="/SleepData">ENTER SLEEP...</Link>
            <div className="px-8">
            <br/>
              <img src='./assets/sleep.png' alt="sleep image" />
            </div>
          </div>
        </div>
      </div>
      
    
      <div id="healthcare" className="container mx-auto mb-25">
        <div className="flex items-center justify-center h-screen">
          <div className="bg-grey text-white font-bold rounded-lg border shadow-lg p-10">
            <h1>Preventative Healthcare</h1>
            <p>Primary prevention refers to actions aimed at avoiding the manifestation of a disease through implementation of systemic resources and services </p>
            <p>Secondary prevention deals with early detection when this improves the chances for positive health outcomes</p>
            <Link to="/healthcare">ENTER PREVENTATIVE HEALTHCARE..</Link>
            <div className="px-8">
              <br/>
              <img src='./assets/Health.png' alt="nature image" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Resources content */}
      <div id="plan" className="container mx-auto mb-25">
        <div className="flex items-center justify-center h-screen">
          <div className="bg-grey text-white font-bold rounded-lg border shadow-lg p-10">
            <h1>Your Plan</h1>
            <p>Optimizie your wellness through exploring sleep and implementing sleep strategies</p>
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




// //import React from 'react';
// import { Link } from 'react-router-dom';
// import BrainImage from '../components/BrainImage';
// //import sleepImage from '../assets/sleep.png';

// const Home = () => {
//   return (
//     <div>
//       Epigenetics content 
//       <div id="epigenetics" className="container mx-auto mb-25">
//         <div className="flex items-center justify-center h-screen">
//           <div className="bg-grey text-white font-bold rounded-lg border shadow-lg p-10">
//             <h1>Epigenetics</h1>
//             <p>"Epigenetics is a field of study focused on changes in DNA that do not involve alterations to the underlying DNA sequence"</p>
//             <p>The DNA letters and the proteins that interact with DNA can have chemical modifications that change the degrees to which genes are turned on and off</p>
//             <p>Certain epigenetic modifications may be passed on from parent cell to daughter cell during cell division or from one generation to the next"</p>
//             <p>(National Human Genome Research Institute)</p>
//             <Link to="/epigenetics">ENTER...</Link>
//           </div>
//         </div>
//       </div>
//       <BrainImage />

//        Sleep content *
//       <div id="sleep" className="container mx-auto mb-25">
//         <div className="flex items-center justify-center h-screen">
//           <div className="bg-grey text-white font-bold rounded-lg border shadow-lg p-10">
//             <h1>Sleep</h1>
//             <p>Explore Sleep Research</p>
//             <p>Build Your Sleep Data</p>
//             <Link to="/SleepData">ENTER...</Link>
//             <div className="px-8">
//               <img src="assets/sleep.png" alt="sleep image" />
//             </div>
//           </div>
//         </div>
//       </div>
      
//        Preventative Healthcare content 
//       <div id="healthcare" className="container mx-auto mb-25">
//         <div className="flex items-center justify-center h-screen">
//           <div className="bg-grey text-white font-bold rounded-lg border shadow-lg p-10">
//             <h1>Preventative Healthcare</h1>
//             <p>Optimizing Your Wellness</p>
//             <Link to="/healthcare">ENTER...</Link>
//             <div className="px-8">
//               <img src="assets/Health.png" alt="nature image" />
//           </div>
//         </div>
//       </div>
      
//       Resources content 
//       <div id="plan" className="container mx-auto mb-25">
//         <div className="flex items-center justify-center h-screen">
//           <div className="bg-grey text-white font-bold rounded-lg border shadow-lg p-10">
//             <h1>Your plan</h1>
//             <Link to="/yourplan">ENTER...</Link>
//             <div className="px-8">
//               <img src="assets/Plan.png" alt="snow hikers image" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;






