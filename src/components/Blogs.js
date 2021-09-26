import React from 'react';
import { Link } from 'react-router-dom';
import { db } from '../services/firebase';

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
                <section>
                    <title>Saathi | Blogs</title>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ paddingTop: '8rem' }}>
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
                    <div className="blog">
                        <h1>Blogs</h1>
                        <div className="blog-by">By Vanya</div>
                        {posts.map((post) =>(
                            <div id="post" className="card-body">
                                <Link to={`/post/${post.id}`}> 
                                <h3>{post.title}</h3> 
                                </Link>
                                <p>{post.name}</p>
                                <p>
                                    {post['subTitle']}
                                </p>
                                {/* <small> {post.createdAt}</small> */}
                            </div>
                         ))}
                    </div>
                </section>
            </section>
        )
    }
}

export default Blogs;