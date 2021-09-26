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
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{paddingTop:'8rem'}}>
                <a class="navbar-brand" href="..">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item"><Link to="/blogs">Blog</Link></li>
                        <li class="nav-item active"><Link to="/create">Create</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="create-post">
                <h1>Create Post</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="card-body">
                    <div class="form-group">
                        <label>Post Title</label>
                        <input  className="form-control" value={title} onChange={(e) => this.setState({title:e.target.value})} />  
                    </div>

                    <div class="form-group">
                        <label>Post Sub Title</label>
                        <input className="form-control" value={subTitle} onChange={(e) => this.setState({ subTitle:e.target.value })} />  
                    </div>

                    <div class="form-group">
                        <label>Content</label>
                        <textarea  className="form-control" cols="30" rows="10" value={content} onChange={(e) => this.setState({content:e.target.value })}></textarea> 
                    </div>
                    <button className="create-post btn btn btn-success" style={{cursor:'pointer'}}>Create Post</button>
                    </div>
                </form>
            </div>
            </section>
        );
    }
}

export default Create;