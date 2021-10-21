import React from 'react';
import { Link } from 'react-router-dom';
import { db } from '../services/firebase';
import { Helmet } from 'react-helmet';
import './style.css';


class Stress extends React.Component {
    state = {
        stress: [],
    };
    componentDidMount() {
        db.collection('stress')
            .get()
            .then((snapshot) => {
                console.log(snapshot);
                const stress = snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                });  // docs is an array
                // console.log(stress);
                this.setState({
                    stress,
                })   //post collection of data
            });
    }
     render(){
        const { stress } = this.state;
         return(
            <section>
                 <Helmet>
                   <title>Saathi | Stress Relief</title>
                </Helmet>
                <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#161d6f'}}>
                    <div class="container-fluid">
                        <Link to="/activities"><i class="fas fa-arrow-left fa-2x"></i></Link>
                        <h1 style={{color: 'white'}}>Stress Reducing Activities</h1>
                    </div>
                </nav>
                <div class="container" style= {{marginTop:"5rem"}}>
                <img src="images/v1.jpg" alt="mk" />
                    <br />
                    <p class="para">
                        Stress is an inevitable part of life. Stress is something that cannot be completely removed from life. However, it can be managed. To help you making conscious efforts towards making your life better, I have created a list of stress reducing activities for everyone.
                        <br />
                        These stress-reducing activities are a part of stress management techniques and can be done anytime and anywhere without any hassle. Apart from managing stress, these activities will help you in reducing blood pressure.
                        <br />
                        Try these stress-reducing activities list and let us know in the comment section how it worked for you. Let’s get started.
                    </p>
                    <h1>Stress Reducing Activities</h1>
                    {/* <h1>STRESS RELIEF</h1> */}
                        {/* <div className="blog-by">By Vanya</div> */}
                         {stress.map((st) =>(
                             <ol>
                             <div id="st" className="card-body">
                                 <h2>{st.title}</h2> 
                                 <img src={st.image} alt="hi" />
                                 <p className="para">{st.content}</p>
                                 <hr />
                                 {/* <small> {post.createdAt}</small> */}
                            </div>
                            </ol>
                          ))}
                    </div>
    </section>
        );
     }
}

export default Stress;
