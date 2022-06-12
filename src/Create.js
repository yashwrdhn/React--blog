import { useState } from "react";
import { useHistory } from "react-router-dom";

import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/storage";
import "firebase/compat/firestore";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const history = useHistory();
  const db = firebase.firestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };


    // fetch('http://localhost:8000/blogs/', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(blog)
    // }).then(() => {
    //   // history.go(-1);
    //   history.push('/');
    // })
    
      db.collection("react-blog")
        .doc()
        .set({
          title: title,
          body: body,
          author: author,
        })
        .then(function () {
          console.log("blog added successfully ");
        })
        .then(() => {
            history.go(-1);
            history.push('/');
          })
        .catch(function (error) {
          console.error("Error adding blog ", error);
        });
    
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="guest">guest</option>
          <option value="yash">yash</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
}
 
export default Create;