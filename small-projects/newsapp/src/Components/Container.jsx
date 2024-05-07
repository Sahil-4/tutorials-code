import NewsItem from "./NewsItem";

function Container({ newsArticle }) {
  return (
    <div className="news-container">
      {newsArticle.map((article, index) => (
        <NewsItem key={index + article} article={article} />
      ))}
    </div>
  );
}

export default Container;
