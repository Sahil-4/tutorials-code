import NewsItem from "./NewsItem";

function Container({ newsArticles=[] }) {

  return (
    <div className="news-container">
      {newsArticles.map((article, index) => (
        <NewsItem key={index + article} article={article} />
      ))}
    </div>
  );
}

export default Container;
