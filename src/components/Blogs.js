import React from 'react';
import {Link} from 'react-router-dom';

class Blogs extends React.Component {
    render(){
        return(
            <section style={{paddingTop:'10rem'}}>
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
            <div className="blog">
                <h1>Blogs</h1>
                <div className="blog-by">By Vanya</div>

                <div id="post">
                   <Link to="/post/someid"> <h3>Tester Blogs!</h3> </Link>

                    <p>
                        Yo yo yoy yoyo
                    </p>
                </div>
            </div>
            </section>
            </section>
        )
    }
}

export default Blogs;