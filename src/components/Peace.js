import React from "react";
import { Helmet } from "react-helmet";
import './Peace.css';



class Peace extends React.Component{
  render(){
    return(
        <section>
            <embed src="audio/a1.mp3" loop="true" autostart="true" width="2" height="0" />
            <Helmet>
                SAATHI | PEACE SESSION
            </Helmet>
<section className="section">
<div className="container" style={{ paddingTop: '150px' }}>
        <div className="row justify-content-between">
          <div className="col-md-6">
          <div class="container">
  <div class="row">
    <div class="col-md-4" id="style_1">Peace</div>
    <div class="col-md-4 ms-auto"  id="style_2">Love</div>
  </div>
  <div class="row">
    <div class="col-md-3 ms-md-auto"  id="style_3">Shanti</div>
    {/* <div class="col-md-3 ms-md-auto"  id="style">Shanti</div> */}
    <div class="col-auto me-auto"  id="style_4">Happy</div>
  </div>
  <div class="row">
    <div class="col-auto me-auto"  id="style_5">Positivity</div>
    {/* <div class="col-md-3 ms-md-auto"  id="style">.ghc</div> */}
  </div>
</div>
          <div><img src="images/y1.png"/></div>
          </div>
          <div className="col-md-5 my-auto">
            <div className="main-heading">
              <div>
                <p className="landing-text" style={{color:'black',fontWeight:'bold',fontSize:'30px',fontFamily:'cursive'}}>
                “Peace is the result of retraining your mind to process life as it is, rather than as you think it should be.”
                </p>
                {/* <div className="row-fluid">
                    <a href="#scroll" className="link text-capitalize mr-md-4">
                        Meditation
                        </a>
                        <a href="#scroll" className="link text-capitalize mr-md-4">
                        Meditation
                        </a>
                        <a href="#scroll" className="link text-capitalize mr-md-4">
                        Meditation
                        </a>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section className="meditation" style={{paddingTop:'5rem'}}>
      <div className="row justify-content-between" style={{paddingLeft:'150px'}}>
          <div className="col-md-5 my-auto">
            <div>
              <div>
               <h1 style={{fontFamily:'monospace',fontWeight:'bold'}}>MEDITATION</h1>
               <p>
               Mindfulness training isn’t limited to meditation, but it’s a great place to start. 
               Meditation is both a skill and an experience that can positively impact your overall health and happiness.
               </p>
               <br />
               <h2>
                   STEPS:
               </h2>
               <ul>
                   <li>Gaining a new perspective on stressful situations</li>
                   <li>Building skills to manage your stress</li>
                   <li>Increasing self-awareness</li>
                   <li>Focusing on the present</li>
                   <li>Reducing negative emotions</li>
                   <li>Increasing imagination and creativity</li>
                   <li>Increasing patience and tolerance</li>
               </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
              <ul>
                  <li>
                  Upchaar Gayatri Mantra
                  <br />
                      <audio controls>
                        <source src="audio/gayatri.mp3" />
                    </audio>
                  </li>
                  <li>
                  Om Mantra
                  <br />
                      <audio controls>
                        <source src="audio/om.mp3" />
                    </audio>
                  </li>
                  <li>
                  Binaural Beats
                  <br />
                  <audio controls>
                        <source src="audio/a4.mp3" />
                    </audio>
                    <audio controls>
                        <source src="audio/a1.mp3" />
                    </audio>
                    <audio controls>
                        <source src="audio/a2.mp3" />
                    </audio>
                    <audio controls>
                        <source src="audio/a3.mp3" />
                    </audio>
                  </li>
              </ul>
          </div>
        </div>
        <hr />
        <div className="row justify-content-between" style={{paddingLeft:'150px'}}>
        <div className="col-md-6">
        <iframe width="500" height="400" src="https://www.youtube.com/embed/MKEUEWEVTiE">
    </iframe>
          </div>
          <div className="col-md-5 my-auto">
            <div>
              <div>
               <br />
               <h2>
                  BENEFITS
               </h2>
               <ul>
                   <li>Breathe in deeply, and relax as you breathe out.</li>
                   <li>Drop all your worries and concerns</li>
                   <li>Bring more awareness into breathing</li>
                   <li>Start counting the breaths slowly. And repeat</li>
                   <li>Get deeply immersed in the breathing process</li>
                   <li>Do not drift off with the thoughts moving through your mind.</li>
                   <li>Keep settling more and more into a peaceful awareness.</li>
               </ul>
              </div>
            </div>
          </div>
        </div>
        
        
      </section>
        </section>
    );

  }
}

export default Peace; 