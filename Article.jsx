import React from "react";

function Article({ post}) {
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>{post.date}</small>
            <p>Index: {post.index}</p>
        </article>
    );
}

export default Article;
