// eslint-disable-next-line
import React from "react";
// import p1 from 'C:/Users/Vanya/Desktop/SowMinds--React/sowminds/public/images/selfcare3.jpg';
class Home extends React.Component{
    render(){
    return(
       <section>
           <section class="home" id="para" style={{  backgroundImage: `url("images/selfcare3.jpg")` }}>
    	<div class = "headtext" style={{height:'700px'}}>
			<h1>MENTAL HEALTH</h1>
	        <div>
                <p>Mental health refers to cognitive, behavioral, and emotional well-being.
                    <br /> 
                It is all about how people think, feel, and behave.
                <br />
                People sometimes use the term “mental health” to mean the absence of a mental disorder.
                <br />
                Mental health can affect daily living, relationships, and physical health.
                    <br /> <button onclick="document.location='disorder.html'">learn more</button><b />
                </p>
	        </div>
  </div>
    </section>
    <br />
    <br />
    <div style={{height:'700px'}}>
        {/* <!-- just to make scrolling effect possible --> */}
			<h2 class="myH2">Who are we?</h2>
			<p class="myP">We are group of three members keen to serve society by our techskills. We aim to help each and every individual out there who struggles with mental conflicts, identity crisis,..etc
            <br />
            This is a platform where an individual can communicate with others either anonymously or by revealing their identity by posting his blogs, personal experiences on our blog page. Lonely wolf can interact with chat bot to have some motivational chit-chat. Various quizzes and activities have also been introduced for engaging people and in fun making them learn the importance of mental helath </p>
			<p class="myP">WE HOPE YOU FIND THIS USEFULL</p>
			<div class="container" style={{marginTop: '4rem'}}>
			 <h3>Related Posts</h3> 
			<div class="card-deck">
			  <div class="card">
			    <img class="card-img-top" src="images/dd1.jpg" alt="Card" />
			    <div class="card-body">
			      <a href="https://www.youtube.com/watch?v=3ZBXldCxZEA"><h5 class="card-title">Therapy</h5></a>
			      <p class="card-text">Therapy Vs Medication - The Best Choice</p>
			    </div>
			  </div>
			  <div class="card">
			    <img class="card-img-top" src="images/dd2.png" alt="Card" />
			    <div class="card-body">
			      <a href="https://www.youtube.com/watch?v=VRNS8XTADEU"><h5 class="card-title">Therapy</h5></a>
			      <p class="card-text">Dance Movement Therapy : A Beautiful Emotio...</p>
			    </div>
			  </div>
			  <div class="card">
			    <img class="card-img-top" src="images/dd3.jpg" alt="Card" />
			    <div class="card-body">
			      <a href="https://www.youtube.com/watch?v=8133Tf1CAHQ"><h5 class="card-title">Self Help Therapy</h5></a>
			      <p class="card-text">5 Ways to Deal with Toxic Ma...</p>
			    </div>
			  </div>
			</div>
			</div>
    </div>
</section>
    );
	}
}

export default Home;
