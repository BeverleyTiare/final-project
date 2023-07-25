import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_SLEEP_DATA } from "../utils/queries"; // import our query
import Auth from "../utils/auth";
import { Container, Row, Col } from "react-bootstrap";
import { UPDATE_SLEEP_NOTES } from "../utils/mutations";
//import background from "./assets/nightsky.mp4";

/*class App extends Component {
  render() {
    const myStyle={
        backgroundImage: `url(${background})`,
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div style={myStyle}>
        <h1>Your Plan</h1>
      </div>
    );
  }
}*/

const YourPlan = () => {
const { loading, data } = useQuery(QUERY_SLEEP_DATA);
const [updateSleepNotes, { error, updateData }] = useMutation(UPDATE_SLEEP_NOTES);
const notesRef = React.useRef();
const sleep = data?.sleep || {};
 
  //function to generate sleep plans based on the sleep category
  const generateSleepPlan = (category) => {
    switch (category) {
      case "Few sleep issues":
        return [
          <h2
            className="Typography_typography-h2 _nV2DM"
            style={{
              color: "#e9e9e9",
              fontWeight: 300,
              fontSize: "24px",  
            }}
          >
            Optimize your sleep, activity, recovery and wellness with your personalized
            research-based sleep tips
          </h2>,
          <h2
            className="Typography_typography-h2 _nV2DM"
            style={{
              color: "#e9e9e9",
              fontWeight: 300,
              fontSize: "24px",
              
            }}
          >
            Sleep is the foundation of your physical health, mental health and energy levels — explore your unique sleep plan...

          </h2>,
          <div
            style={{
              fontSize: "18px",
              marginTop: "60px",
              fontWeight: "600",
              listStyleType: "lower-latin"
            }}
          >
            <p>
              Get morning light, as sunlight is the main controller of the
              natural body clock. Natural sunlight is best, even on cloudy days.
              Try to step outside for at least 20 minutes within 1 hour of
              waking.
            </p>
            <br />
            <p>
              Practice relaxation techniques before bedtime, such as deep
              breathing, meditation, yoga, or tai chi.
            </p>
            <br />
            <p>
              Establish a consistent sleep schedule by going to bed and waking
              up at the same time every day, including weekends.
            </p>
            <br />
            <p>
              Limit caffeine and alcohol intake, especially in the afternoon and
              evening.
            </p>
          </div>,
        ];
      case "Moderate sleep issues":
        return [
          <h2
            className="Typography_typography-h2 _nV2DM"
            style={{
              color: "#e9e9e9",
              fontWeight: 300,
              fontSize: "24px",
             
            }}
          >
            Optimize your sleep, activity, recovery and wellness with your personalized
            research-based sleep tips
          </h2>,
          <h2
            className="Typography_typography-h2 _nV2DM"
            style={{
              color: "#e9e9e9",
              fontWeight: 300,
              fontSize: "24px",
              
            }}
          >
            Sleep is the foundation of your physical health, mental health and energy levels — explore your unique sleep plan...
          </h2>,
          <div
            style={{
              textAlign: "left",
              fontSize: "18px",
              marginTop: "60px",
              listStyleType: "lower-latin"
            }}
          >
            <p>
            Get morning light, as sunlight is the main controller of the
              natural body clock. Natural sunlight is best, even on cloudy days.
              Try to step outside for at least 20 minutes within 1 hour of
              waking.
            </p>
            <br />
            <p>
              Set a consistent bedtime. There are certain times at night that
              your body will be able to sleep better than others. If you feel
              sleepy but your brain is busy thinking, it can't shut off and go
              to sleep. Try write down the things that concern you to review and
              attend to the following day.
            </p>
            <br />
            <p>
              Create a calm ritual before bedtime, such as taking a hot shower
              or bath, yoga postures for sleep, soothing music, meditation, to
              assist in preparing for sleep.
            </p>
            <br />
            <p>
              Keep your bedroom cool, quiet, and dark to promote better sleep.
            </p>
            <br />
            <p>
              Avoid heavy meals, alcohol, and vigorous exercise close to
              bedtime.
            </p>
          </div>,
        ];

      case "Significant sleep issues":
        return [
          <h2
            className="Typography_typography-h2 _nV2DM"
            style={{
              color: "#e9e9e9",
              fontWeight: 300,
              fontSize: "24px",
              
            }}
          >
            Optimize your sleep, activity, recovery and wellness with your personalized
            research-based sleep tips
          </h2>,
          <h2
            className="Typography_typography-h2 _nV2DM"
            style={{
              color: "#e9e9e9",
              fontWeight: 300,
              fontSize: "24px",
              
            }}
          >
            Sleep is the foundation of your physical health, mental health and energy levels — explore your unique sleep plan...
          </h2>,
          <div
            style={{
              textAlign: "left",
              fontSize: "18px",
              marginTop: "60px",
              listStyleType: "lower-latin"
            }}
          >
            <p>
              Consider seeking help from a sleep specialist to address
              underlying sleep disorders.
            </p>
            <br />
            <p>
              Get morning light, as sunlight is the main controller of the
              natural body clock. Natural sunlight is best,even on cloudy days.
              Try to step outside for at least 20 minutes within 1 hour of
              waking.
            </p>
            <br />
            <p>
              Set a consistent bedtime. There are certain times at night that
              your body will be able to sleep better than others. If you feel
              sleepy but your brain is busy thinking, it can't shut off and go
              to sleep. Try write down the things that concern you to review and
              attend to the following day.
            </p>
            <br />
            <p>
              Create a comfortable sleep environment, a place that is cool,
              dark, and quiet.
            </p>
            <br />
            <p>
              Prepare yourself for sleep before bed, by committing to some
              relaxation techniques, such as slow breathing or yoga
            </p>
            <br />
            <p>
              Limit screen time before bed and limit watching TV whilst in bed.
              Mobile phones and all electronic devices make it harder for your
              brain to turn off, and even dim light from devices may delay the
              release of the hormone melatonin, interfering with your body
              clock.
            </p>
            <br />
            <p>
              Engage in regular physical activity during the day to promote
              better general health, as well as sleep at night.
            </p>
            <br />
            <p>
              If you cannot fall asleep in 15-20 minutes, get out of bed and do
              a quiet activity — read a book, or journal with dim lighting until
              you feel drowsy, then return to bed.
            </p>
            <br />
            <p>
              Try to avoid day naps, or limit them to 20 minutes in the early
              afternoon.
            </p>
          </div>,
        ];
      default:
        return [];
    }
  };
  //
  const onSaveNotes = React.useCallback(() => {
    updateSleepNotes({
      variables: {
        sleepId: sleep._id,
        notes: notesRef.current.value,
      },
    });
  }, [updateSleepNotes, sleep]);

  
// Function to render the sleep plan
  return (
    <><video autoPlay muted loop id="backgroundVideo">
    <source src="./assets/nightsky.mp4" type="video/mp4"/>
  </video>
 
    <div id="yourplanContainer">
    <div
      id="yourplanContents"
      className="container mx-auto"
      style={{
        textAlign: "center",
        color: "white",
        padding: "20px",
        marginTop: "40px"

      }}
    >
      <h2 style={{marginTop: "20px"}}>Your Plan</h2>
      {loading ? (
        <p>Loading...</p>
      ) : 
        
        sleep.category ?
        ( <>
          <div style={{padding: "26px"}}>
            {generateSleepPlan(sleep.category)}
          </div>
          <div>
            <h2>Notes</h2>
            <textarea style={{backgroundColor: "#e9e9e9", color: "black", padding: "8px", fontSize: "18px", borderRadius: "7px"}} rows="4" cols="50" name="notes" value={sleep.notes} ref={notesRef} />
            <br />
            <button class="bg-transparent mt-4 text-white font-semibold hover:text-gray-300 py-2 px-4 border border-white rounded ml-4" onClick={onSaveNotes}>Save</button> 
          </div>
          </>) 
        : 
        (<>
          <h2>Take the Sleep Quiz to get your personalized sleep plan!</h2>
        </>)
        
      }
       
    </div>
    </div>
    </>

  );
};

export default YourPlan;


//use content??
  /*<header className="text-center py-8">
       <h1 className="text-4xl text-white font-bold">Your Plan</h1>
     </header>
     <div className="px-8">
       <img src="assets/Plan.png" alt="hikers" />
       <Container className="yourplan-section text-white" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
         <Container>
           {Auth.loggedIn() ? (
             loading ? (
               <div>Loading...</div>
             ) : (

                <Row style={{ justifyContent: "center", padding: "10px" }}>
                  <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px", }}>
                    <p>What are some further ways to promote sleep?</p>
                    <br />
                    <br /> 
                    Between 18-64 years, we need 7-9 hours of sleep per night.
                    <br />
                    <br />
                    But challenges falling asleep and poor-quality sleep are common. 
                    Stress, caffeine, nicotine, and alcohol can contribute to sleep issues*.
                    <br />
                    <br />  
                    <p>There are, however, some strategies to assist in getting to sleep and improving sleep quality: </p>
                    <br />
                    <br />
                    - View bright sunlight outdoors within 30-60 minutes of waking to stimulate optimal circadian rythms.
                    <br />
                    <br />
                    - Consistent sleep schedules: aim to go to bed and get up at the same time every day, including weekends and when traveling. 
                    <br />
                    <br />
                      A calm ritual before bedtime: taking a hot shower or bath, yoga postures for sleep, soothing music, meditation, and dim lighting
                      all help to prepare the body and mind for sleep as well as reduce anxiety and stress.
                    <br />
                    <br />
                    - Avoid sleep disruptors: avoid the factors* mentioned above as well as exercising just before bed. Limit the use of tech devices and watching TV whilst in bed. 
                    <br />
                    <br />If you cannot fall asleep in 15-20 minutes: sit in a chair with dim lighting until you feel drowsy, then return to bed. 
                      Be kind to yourself if you find you are awake longer than you expect; sleep quality requires time and practice. 
                    <br />
                    <br />
                    - Prioritize sleep: aim to have sufficient sleep as much as possible. It can be difficult juggling numerous demands and focusing less on sleep, 
                      but seeing sleep as necessary for optimal functioning is a worthy shift.
                    <br />
                    <br />
                    - Day naps: Engaging in daytime sleep can impact the amount of sleep you have during the nighttime. Naps longer than 20 minutes can lead to drowsiness upon waking. 
                    <br />
                    <br />
                    - Bedroom environment: create a calming space to enhance your sleep by ensuring light is blocked with thick curtains, etc., use of earplugs, 
                      and a white noise machine if needed to block out loud sounds may be of value. Try to have the room at a temperature of around 19 degrees Celsius as our body temperature has to drop in order for us to establish sleep
                    <br />
                    <br />
                    - Healthy lifestyle: healthy eating and moderate exercise enhance sleep quality. 
                    <br />
                    <br />
                    - Check your mattress and pillow: spinal aches and pains are common, so changing your mattress and pillow may improve your sleep quality by reducing spinal pain. 
                      It is worth researching and trialling the best mattress that suits you. Avoid sleeping on your stomach, and sleep with just one pillow so your neck is in alignment with the rest of the spine. 
                    <br /> 
                    <br /> 
                    <p className="my-4" style={{ textAlign: 'left', color: 'lightblue', paddingBottom: '10%' }}>
                    <p>Please Note: if sleep deprivation is impacting your daytime functioning for more than two weeks, it is important to speak with your GP or another medical professional</p>
                    </p>
                    <p className="my-4" style={{ textAlign: 'left', color: 'lightblue', paddingBottom: '20%' }}>
                    For more information on sleep, please visit the following websites:https://aasm.org/ https://aasm.org/,https://www.verizon.com/about/blog/tips-for-better-sleep/,https://www.sleepfoundation.org/
                    </p>
                  </Col>  
                </Row>
              )
            ) : (
              <p>
                You need to be logged in to view your plans. Please{' '}
                <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
              </p>
            )}
          </Container>
        </Container>
      </div>
    </div>
  );
};

//whole background image : `url(${sleepImage}) center center no-repeat`,
        backgroundSize: "cover",

export default YourPlan;*/
