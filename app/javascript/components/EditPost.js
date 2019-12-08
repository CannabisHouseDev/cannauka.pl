import React, { useState, useEffect } from "react";

const EditPost = (props) => {
  const [post, setPost] = useState({})

  useEffect(() => {
    const id = props.match.params.id
    fetch(`/api/v1/posts/${id}`).then(response => response.json()).then(data => setPost(data)).catch(error => console.log("error", error))
  }, [])

  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    const body = {
      post: post
    }
    fetch(`/api/v1/posts/${props.match.params.id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('[name=csrf-token]').content
      }
    }).then(response => response.json()).then(data => props.history.push(`/posts/${data.id}`)).catch(error => console.log("error", error));
  }

  return(
    <div className="container">
      <h2 className="text-center">Update Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="title">Title</label>
          <input type="text" className="form-control" name="title" value={post.title} onChange={e => handleChange(e)} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="body">Body</label>
          <input type="text" className="form-control" name="body" value={post.body} onChange={e => handleChange(e)} />
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary" title="Opublikuj" />
        </div>
      </form>
    </div>
  )
}

export default EditPost;
