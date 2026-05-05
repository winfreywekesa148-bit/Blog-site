import Header from "./BLOG/Header";
import Article from "./BLOG/Article";
import ArticleList from "./BLOG/Article List";
import About from "./BLOG/About";
import Blog from "./BLOG/Blog";

function App() {
  return (<div>
    <Header />
    <ArticleList posts={posts} />
    <About post={post} index={index} image={image} />
  </div>
  );
}

export default App;
