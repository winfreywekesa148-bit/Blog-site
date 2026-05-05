import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    return (<div>
        {posts.map((post, index) => (
            <Article key={index} post={post} />
        ))}
    </div>
    );
}
