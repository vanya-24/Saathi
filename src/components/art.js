import React from 'react';
import { Link } from 'react-router-dom';
import { db } from '../services/firebase';
import { Helmet } from 'react-helmet';
import './style.css';


class Art extends React.Component {
    state = {
        art: [],
    };
    componentDidMount() {
        db.collection('art')
            .get()
            .then((snapshot) => {
                console.log(snapshot);
                const art = snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                });  // docs is an array
                // console.log(stress);
                this.setState({
                    art,
                })   //post collection of data
            });
    }
     render(){
        const { art } = this.state;
         return(
            <section>
                 <Helmet>
                   <title>Saathi | Art Therapy</title>
                </Helmet>
                <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#161d6f'}}>
                    <div class="container-fluid">
                        <Link to="/activities"><i class="fas fa-arrow-left fa-2x"></i></Link>
                        <h1 style={{color: 'white'}}>Art THerapy</h1>
                    </div>
                </nav>
                <div class="container" style= {{marginTop:"5rem"}}>
                    <img src="images/art2.jpg" alt=".." />
                    <br />
                    <p class="para">
                        Anni Albers appropriately quoted, “Art is something that makes you breathe with a different 
                        kind of happiness.” Since childhood whenever I hear anything related to art, it catches my attention 
                        and fulfills my heart with curiosity.
                        <br />
                        Curiosity of creativity, curiosity of learning a new art form, curiosity of spending my alone time, 
                        curiosity of drawing my thoughts on a piece of paper, and most importantly curiosity of reducing my stress 
                        level instantly.
                    </p>
                    <div class="container" style= {{marginTop:"2rem"}}>
                        <h3>What is Art Therapy?</h3>
                        <p>
                            Art therapy is a term used for referring to the practice of creativity which helps in 
                            healing the spirit or mind. Art therapists are specially appointed for increasing the wide swatch 
                            of stress-busting and rejuvenating ailments that has various mental health benefits.
                        </p>
                    </div>
                    <div class="container" style= {{marginTop:"2rem"}}>
                    <h2>Art therapy Techniques for Kids and Adults:</h2>
                    <hr />
                         {art.map((a) =>(
                             <ol>
                             <div id="a" className="card-body">
                                 <h2>{a.title}</h2> 
                                 <img src={a.image} alt="hi" />
                                 <p className="para">{a.content}</p>
                                 <hr />
                            </div>
                            </ol>
                          ))}
                    </div>
                    </div>
    </section>
        );
     }
}

export default Art;
