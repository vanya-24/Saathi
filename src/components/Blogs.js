import React from 'react';
import { Link } from 'react-router-dom';
import { db } from '../services/firebase';
import { Helmet } from 'react-helmet';
import BlogCard from './blogCard';
// import Skeleton from '@material-ui/lab/Skeleton';
// import { Modal } from 'bootstrap';
// import { Container } from 'react-bootstrap';

class Blogs extends React.Component {
    state = {
        posts: [],
    };
    componentDidMount() {
        db.collection('posts')
            .get()
            .then((snapshot) => {
                console.log(snapshot);
                const posts = snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                });  // docs is an array
                console.log(posts);
                this.setState({
                    posts,
                })   //post collection of data
            });
    }
    render() {
        const { posts } = this.state;
        return (
            <section style={{ paddingTop: '10rem' }}>
                <Helmet>
                   <title>Saathi | Blogs</title>
                </Helmet>
                <section>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ paddingTop: '8rem' }}>
                        {/* <a class="navbar-brand" href="..">Navbar</a> */}
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <h2><Link style={{textDecoration:'none', color:'darkblue',textAlign:'center',marginLeft:'700px',fontSize:'20px'}} to="/blogs">Recent Blogs</Link></h2>
                        </div>
                        <Link style={{textDecoration:'none',padding:'10px 24px',backgroundColor:'darkblue',color:'whitesmoke', fontSize:'18px'}} to="/create" type="button"><i class="fas fa-plus 2x"></i></Link>
                    </nav>
                    <div className="container text-center my-5 row mx-auto g-4">
        {posts.length > 0 ? posts.map((post,index) => (

          <BlogCard key={index} index={index % 3} postId={post.id} content={post.content} title={post.title} subTitle={post.subTitle} />

        )) : [0, 1, 2].map((e) => {
          return (
            <div
              key={e}
              className="card col-lg-4 col-md-12 mb-lg-0 mb-4"
              style={{ padding: '0 20px' }}
            >
              {/* <div className="view overlay rounded z-depth-2 mb-4 waves-light"> */}
              {/* <div variant="rect" height="22rem" className="img-fluid card-image" /> */}
              <div variant="text" className="font-weight-bold mb-3" style={{ marginTop: '1rem' }} />
              <div variant="rect" className="font-weight-bold mb-2" />
              <div variant="rect" height="2rem" className="dark-grey-text" />
              <small> {posts.createdAt}</small>
            </div>
          );
        })}
      </div>
                </section>
            </section>
        )
    }
}

export default Blogs;

// eslint-disable-next-line

{/* <div class="card-deck"> */}
  {/* <div class="card"> */}
    //   <div className="blog">
                        // <h1>Blogs</h1>
                        {/* <div className="blog-by">By Vanya</div> */}
                        // {posts.map((post) =>(
                            // <div id="post" className="card-body">
                                // <Link to={`/post/${post.id}`}> 
                                // <h3>{post.title}</h3> 
                                // </Link>
                                // <p>{post.name}</p>
                                // <p>
                                    // {post['subTitle']}
                                // </p>
                                // {/* <small> {post.createdAt}</small> */}
                            // </div>
                        //  ))}
//   </div>
// </div>