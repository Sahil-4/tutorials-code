function NewsItem({ article }) {
  return (
    <div className="news-item">
      <img src={article.urlToImage} alt="" />
      <div>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <a href={article.url} rel="noreferrer" target="_blank">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
