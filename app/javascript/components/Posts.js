import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] =  useState([])

  useEffect(() => {
    fetch('/api/v1/posts').then(response => response.json()).then(data => setPosts(data)); 
  }, [])

  return(
    <div className="container">
      <h2 className="text-center">All posts</h2>
      <div className="row">
        {posts.map(post => (
          <div className="col-md-4" key={post.id}>
            <div className="card" >
              <div className="card-header">
                {post.title}
              </div>
              <div className="card-body">
                <p className="card-text"> {post.body}</p>
                <Link to={`/posts/${post.id}`} className="btn btn-primary">Show</Link>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts;
