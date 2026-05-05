import React from "react";

function Header() {
    return (
        <header>
            <h1>{blog.name}</h1>
            <img src={blog.image} alt={blog.name} />
        </header>
    );
}

export default Header;
