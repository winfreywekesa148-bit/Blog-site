function About (post, index, image) {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>{post.date}</small>
            <p>Index: {post.index}</p>
            <img src={image} alt={post.title} />
        </div>
    )
}

export default About;
