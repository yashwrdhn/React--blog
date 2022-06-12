import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({blogs, handleDelete}) => {

    return ( 
        <div className="blog-list">
             {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                
                {/* <button onClick={ () => handleDelete(blog.id)}>delete</button> */}
                <Link to= {`/blogs/${blog.id}`} >
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <p> { blog.content} </p>
                </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;  