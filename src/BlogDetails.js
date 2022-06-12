import { useHistory, useParams } from "react-router-dom";
// import useFetch from "./useFetch";
import { useEffect, useState } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import React from "react";


const BlogDetails = () => {
  const { id } = useParams();
  // const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();
  const db = firebase.firestore();

  const [blog, setBlog] = useState(null);
  const doc = db.collection("react-blog").doc(id);

  useEffect( () => {
    doc.get().then( doc => setBlog(doc.data()));
  }, [doc]);
  
  // console.log(blog)
  // const handleClick = () => {
    // fetch('http://localhost:8000/blogs/' + blog.id, {
    //   method: 'DELETE'
    // }).then(() => {
    //   history.push('/');
    // })
  const handleClick = () => {
    doc.delete()
      .then( () => {
        history.push('/');
        console.log('blog deleted');
    })
    .catch((err) => console.log(err)); 
  }

  return (
    <div className="blog-details">
      {/* { isPending && <div>Loading...</div> } */}
      {/* { error && <div>{ error }</div> } */}
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;