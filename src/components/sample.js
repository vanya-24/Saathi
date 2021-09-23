import React from "react";
import {db} from '../services/firebase';
// import Create from './Create';
import {
    Link
} from "react-router-dom";

// console.log(db);
let postCollection = document.querySelector('#posts-collection');


// let postCollection = document.querySelector('#posts-collection');
function createPost(title,time,content) {
    let div = document.createElement("div");
    div.setAttribute("class","col-md-4");

    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let small = document.createElement("small");

    h2.textContent = title;
    small.textContent = time;
    p.textContent = content;

    div.appendChild(h2);
    div.appendChild(small);
    div.appendChild(p);

    postCollection.appendChild(div);
    // document.getElementById("mainContent").appendChild(p);
}

function getPosts(){
    db.collection("posts")
    .get()
    .then(snapshot =>{
        snapshot.docs.forEach(docs => {
            createPost(
                docs.data().author,
                docs.data().createdAt,
                docs.data().post,
                console.log(docs),
            );
        });
    }).catch(err => {
        console.log(err);
    });
}


getPosts();

class Blogs extends React.Component{
    render(){
    return(
        <section>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{paddingTop:'8rem'}}>
                <a class="navbar-brand" href="..">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active"><Link to="/blogs"><h1>Blog</h1></Link></li>
                        <li class="nav-item"><Link to="/create">Create</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="container" style={{padding:'1rem'}}>
                <div className="row" id="posts-collection">
                    <h1>My</h1>
                  <hr />
                </div>
            </div>
          </section>

    );
}
}

export default Blogs;




// Create post 
import React from "react";
import {
    Link
} from "react-router-dom";
import { db } from "../services/firebase";


var el = document.getElementById('#submitBtn');
if(el){
    el.document.querySelector("#submitBtn").addEventListener("click",
    function(){
        let postAuthor = document.querySelector("#author").value;
        let postTitle = document.querySelector("#postTitle").value;
        let postContent = document.querySelector("#postContent").value;
        let postDate = document.querySelector("#postDate").value;
    
        if(postAuthor === '' || postTitle === '' || postContent === '' || postDate === ''){
            alert('Fields Emoty')
        } else{
            db.collection('posts').doc().set({
                author : postAuthor,
                createdAt : postDate,
                post: postContent,
                // postName : postContent
            })
        }
    });
}

class Create extends React.Component{
    render(){
    return(
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
            <h1>Create blogs</h1>
            <main role="main">
                <div className="container">
                    <div className="card m-4">
                        <div className="card-body">
                            <h2 className="pt-4">Create Post</h2>
                            <div className="form-group">
                                <label for="Author">Author</label>
                                <input type="text" id="author" placeholder="Author" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label for="Post Title">Post Title</label>
                                <input type="text" className="form-control" id="postTitle" placeholder="Post Title" />
                            </div>
                            <div className="form-group">
                                <label for="Post Content">Post Content</label>
                                <textarea id="postContent" cols="30" rows="10" className="form-control"></textarea>
                            </div>
                            <div className="form-group">
                                <label for="Date">Date</label>
                                <input type="date" id="postDate" className="form-control" />
                            </div>
                            <input type="submit" value="Post" className="btn btn-primary" id="submitBtn"  />
                        </div>
                    </div>
                </div>
            </main>
            {/* <div className="container" style={{padding:'2rem'}}>
                <div className="row" id="posts-collection">
                    <h1>My</h1>
                  <hr />
                </div>
            </div> */}
        </section>
    );
        }
}

export default Create;