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
            <h1>Epigenetics</h1>
            <p>"Epigenetics is a field of study focused on changes in DNA that do not involve alterations to the underlying DNA sequence"</p>
            <p>The DNA letters and the proteins that interact with DNA can have chemical modifications that change the degrees to which genes are turned on and off</p>
            <p>Certain epigenetic modifications may be passed on from parent cell to daughter cell during cell division or from one generation to the next"</p>
            <p>(National Human Genome Research Institute)</p>
            <Link to="/epigenetics">ENTER...</Link>
          </div>
        </div>
      </div>
      <BrainImage />

      {/* Sleep content */}
      <div id="sleep" className="container mx-auto mb-25">
        <div className="flex items-center justify-center h-screen">
          <div className="bg-grey text-white font-bold rounded-lg border shadow-lg p-10">
            <h1>Sleep</h1>
            <p>Explore Sleep Research</p>
            <p>Build Your Sleep Data</p>
            <Link to="/SleepData">ENTER...</Link>
            <div className="px-8">
              <img src='./assets/sleep.png' alt="sleep image" />
            </div>
          </div>
        </div>
      </div>
      
    
      <div id="healthcare" className="container mx-auto mb-25">
        <div className="flex items-center justify-center h-screen">
          <div className="bg-grey text-white font-bold rounded-lg border shadow-lg p-10">
            <h1>Preventative Healthcare</h1>
            <p>Optimizing Your Wellness</p>
            <Link to="/healthcare">ENTER...</Link>
            <div className="px-8">
              <img src='./assets/Health.png' alt="nature image" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Resources content */}
      <div id="plan" className="container mx-auto mb-25">
        <div className="flex items-center justify-center h-screen">
          <div className="bg-grey text-white font-bold rounded-lg border shadow-lg p-10">
            <h1>Your plan</h1>
            <Link to="/yourplan">ENTER...</Link>
            <div className="px-8">
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






