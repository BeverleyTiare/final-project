//useQuery:  React hook to execute GraphQL queries in components.
import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
//import sleepData from '../utils/sleepData';
import BrainImage from '../components/BrainImage';


const Home = () => {
  return (
    <div>
  {/* Epigenetics content */}
  <div id="epigenetics" className="container mx-auto mb-25">
    <div className="flex items-center justify-center h-screen">
      <div className="bg-grey text-white font-bold rounded-lg border shadow-lg p-10">
        <h1>Epigenetics</h1>
        <p>"Epigenetics is a field of study focused on changes in DNA that do not involve alterations to the underlying DNA sequence</p> 
        <p>The DNA letters and the proteins that interact with DNA can have chemical modifications that change the degrees to which genes are turned on and off</p> 
        <p>Certain epigenetic modifications may be passed on from parent cell to daughter cell during cell division or from one generation to the next"</p>
        <p>(National Human Genome Research Institute)</p>
        <Link to="/epigenetics">ENTER...</Link> {/* Add Link component */}
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
      </div>
    </div>
  </div>
  {/* Preventative Healthcare content */}
  <div id="healthcare" className="container mx-auto mb-25">
    <div className="flex items-center justify-center h-screen">
      <div className="bg-grey text-white font-bold rounded-lg border shadow-lg p-10">
        <h1>Preventative Healthcare</h1>
        <p>Optimizing Your Wellness</p>
        <Link to="/healthcare">ENTER...</Link> 
      </div>
    </div>
  </div>
  {/* Resources content */}
  <div id="plan" className="container mx-auto mb-25">
    <div className="flex items-center justify-center h-screen">
      <div className="bg-grey text-white font-bold rounded-lg border shadow-lg p-10">
        <h1>Your plan</h1>
        <Link to="/yourplan">ENTER...</Link>
      </div>
    </div>
  </div>
</div>

  );
};

export default Home;


// <div className="flex-row justify-center">
//         <div
//           className="col-12 col-md-10 mb-3 p-3"
//           style={{ border: '1px dotted #1a1a1a' }}
//         >
//           {/* <sleepData/> */}
//           {/*  map over the sleepData array and render each item */}
//           {/* {sleepData.map(item => (
//             <div key={item.id}>{item}</div>
//           ))} */}
//         </div>
//         <div className="col-12 col-md-8 mb-3">
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//               <div>
//                 {/* <sleepData */}
//                 {/* sleep={sleepData} */}
//                 {/* title="Sleep to dream..." */}
//                 {/* /> */}
//                 <SleepData sleep={sleepData} title="Sleep to dream..." />
//               </div>
//             )}
//         </div>
//       </div>


// <!-- Epigenetics content -->
// <div id="epigenetics" class="container mx-auto mb-50">
//   <div class="flex items-center justify-center h-screen">
//     <div class="bg-grey text-white font-bold rounded-lg border shadow-lg p-10">
//       <h1>Epigenetics</h1>
//       <p>"Epigenetics is a field of study focused on changes in DNA that do not involve alterations to the underlying DNA sequence. The DNA letters and the proteins that interact with DNA can have chemical modifications that change the degrees to which genes are turned on and off. Certain epigenetic modifications may be passed on from parent cell to daughter cell during cell division or from one generation to the next."<br>(National Human Genome Research Institute)</p>
//     </div>
//   </div>
// </div>

// <!-- Brain IMG 
// <div id="brain-image" class="container mx-auto">
//   <img src="dist/output.js" alt="Brain Image">
//   <img src="dist/output.js.map" alt="Brain Image map">
// </div-->

// <div class="brainContainer"></div>

// <!-- Sleep content -->
// <div id="sleep" class="container mx-auto mb-5">
//   <div class="flex items-center justify-center h-screen">
//     <div class="bg-grey text-white font-bold rounded-lg border shadow-lg p-10">
//       <h1>Sleep</h1>
//       <p>Explore Sleep Research</p>
//       <p>Optimizing Your Wellness</p>
//       <p>Build Your Sleep Data</p>
//     </div>
//   </div>
// </div>

// <!-- Preventative Healthcare content -->
// <div id="healthcare" class="container mx-auto mb-5">
//   <div class="flex items-center justify-center h-screen">
//     <div class="bg-grey text-white font-bold rounded-lg border shadow-lg p-10">
//       <h1>Preventative Healthcare</h1>
//       <p>Content related to preventative healthcare</p>
//     </div>
//   </div>
// </div>

// <!-- Resources content -->
// <div id="resources" class="container mx-auto mb-5">
//   <div class="flex items-center justify-center h-screen">
//     <div class="bg-grey text-white font-bold rounded-lg border shadow-lg p-10">
//       <h1>Your plan</h1>
//       <p>Open API</p>
//     </div>
//   </div>
// </div>
