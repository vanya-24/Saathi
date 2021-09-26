import React from 'react';
// import {useParams} from 'react-router-dom';
import { db } from '../services/firebase';

class  PostDetails extends React.Component {
    state = {
        post: {},   // here an object
    };
    componentDidMount() {
        const { match : { params }} = this.props;
        console.log(params.postId);
        db.collection('posts')
        .doc(params.postId)
            .get()
            .then((snapshot) => {
                // console.log(snapshot);
               
                this.setState({
                    post : snapshot.data(),
                })   //post collection of data
            });
    }
    render(){
        const { post } = this.state;
        return (
            <div className="post-detail"  style={{paddingTop:'10rem'}}>
                <h1 style={{textAlign:'center'}} >{post.title}</h1>
                
                <p className="container center">
                   {post.content}
                </p>
            </div>
        );
    }
}

export default PostDetails;
