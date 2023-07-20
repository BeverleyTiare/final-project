import React from 'react';
import { useQuery } from '@apollo/client'; 
import { Link } from 'react-router-dom'; 
import { QUERY_SLEEP_DATA } from '../utils/queries'; // import our query
import Auth from '../utils/auth';
import { Container, Row, Col } from 'react-bootstrap';

const YourPlan = () => {
  const { loading, data } = useQuery(QUERY_SLEEP_DATA);
  const sleep = data?.sleeps || [];

  setTimeout(() => {
    console.log(data)
  }, 1000);

  //return 3 CATS. of Plan : #TODO 
  return (
    <div className="container mx-auto">

      {
        data ? (
          <div style={{fontSize: "24px", color: "white"}}>
            {
              JSON.stringify(data)
              }
          </div>
        ) : null
      }
      <header className="text-center py-8">
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
                  <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px", textAlign: "left" }}>
                    <strong>What are some ways to promote sleep?</strong>
                    <br />
                    <br /> 
                    Between 18-64 years, we need 7-9 hours of sleep per night.
                    <br />
                    <br />
                    But challenges falling asleep and poor-quality sleep are common. 
                    Stress, caffeine, nicotine, and alcohol can contribute to sleep issues*.
                    <br />
                    <br />  
                    <strong>There are, however, some strategies to assist in getting to sleep and improving sleep quality: </strong>
                    <br />
                    <br />
                    - Consistent sleep schedules: aim to go to bed and get up at the same time every day, including weekends and when traveling. 
                    <br />
                    <br />
                    - A calm ritual before bedtime: taking a hot shower or bath, yoga postures for sleep, soothing music, meditation, and dim lighting
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
                    <strong>Please Note: if sleep deprivation is impacting your daytime functioning for more than two weeks, it is important to speak with your GP or another medical professional</strong>
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

export default YourPlan;

//Video: update! https://vimeo.com/806947756?share=copy
//<div>
//<div style={{padding:"91.67% 0 0 0", position: "relative"}}><iframe src="https://player.vimeo.com/video/842391142?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style={{position: "absolute", top:0,left:0,width:"100%",height:"100%",}} title="sleep vid"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
//</div>


/*return (
  <div className="container mx-auto">
    <div className="px-8">
    {Auth.loggedIn() ? (
      <>
       {loading ? (
          <div>Loading...</div>
        ) : (
          JSON.stringify(sleep)
        )}
       
      </>
    ) : (
      <p>
        You need to be logged in to view your plans. Please{' '}
        <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
      </p>
    )}
    </div>
  </div>
);
};*/