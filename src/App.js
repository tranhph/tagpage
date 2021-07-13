import './App.css';
import ArticleCard from './Components/ArticleCard/ArticleCard';

function App() {
  return (
    <div className="tagPageContainer">
      <h1 className="tagName">#Văn Hóa</h1>

      <p className="relatedTagHeader">Related tags</p>
      <div className="relatedTags">
        <a href="/" title="song xanh">#sống xanh</a>
        <a href="/" title="doi song">#đời sống</a>
        <a href="/" title="song dep">#sống đẹp</a>
        <a href="/" title="phong cach">#phong cách</a>
      </div>
      <div className="articlesContainer">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
      <div className="btnContainer">
        <button><a title="Xem thêm bài viết" href="/">Xem thêm bài viết</a></button>
      </div>
    </div>
  );
}

export default App;
