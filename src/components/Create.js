import React  from "react";
import {Link} from 'react-router-dom';
import { db } from '../services/firebase';

class Create extends React.Component {
    
    state = {
        title:'',
        subTitle:'',
        content:'',
    };
    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        db.collection('posts').add({
            ...this.state,
            createdAt: new Date(),
        });
    };

    render() {
        const {title,subTitle,content} = this.state;
        return (
            <section>
                <title>Saathi | Blogs</title>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ paddingTop: '8rem' }}>
                        {/* <a class="navbar-brand" href="..">Navbar</a> */}
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link style={{textDecoration:'none',padding:'10px 24px',backgroundColor:'darkblue',color:'whitesmoke', fontSize:'10px'}} to="/blogs" type="button"><h1>Read Blogs</h1></Link>
                        <h2><Link style={{textDecoration:'none', color:'darkblue',textAlign:'center',marginLeft:'700px'}} to="/create">Share Your Thoughts</Link></h2>
                        </div>
                        {/* <Link style={{textDecoration:'none'}} to="/create" type="button">Blogs</Link> */}
                    </nav>
            <div className=" container create-post">
                <form onSubmit={this.handleFormSubmit}>
                    <div className="card-body">
                    <div class="form-group">
                        <label><strong style={{fontSize:'15px'}}>Post Title</strong></label>
                        <input  className="form-control" value={title} onChange={(e) => this.setState({title:e.target.value})} />  
                    </div>

                    <div class="form-group">
                    <label><strong style={{fontSize:'15px'}}>Post Sub Title</strong></label>
                        <input className="form-control" value={subTitle} onChange={(e) => this.setState({ subTitle:e.target.value })} />  
                    </div>

                    <div class="form-group">
                        <label><strong style={{fontSize:'15px'}}>Content</strong></label>
                        <textarea  className="form-control" cols="30" rows="10" value={content} onChange={(e) => this.setState({content:e.target.value })}></textarea> 
                    </div>
                    <button className="create-post btn btn btn-success" style={{cursor:'pointer',fontSize:'15px'}}>Create Post</button>
                    </div>
                </form>
            </div>
            </section>
        );
    }
}

export default Create;