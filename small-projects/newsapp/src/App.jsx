import { useEffect, useState } from "react";
import "./App.css";
import { fetchNews } from "./api";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Container from "./Components/Container";

function App() {
  const CATEGORIES = [
    "Top Headlines",
    "Business",
    "Crime",
    "Environment",
    "Entertainment",
    "Fashion",
    "Food",
    "Government",
    "Health",
    "Lifestyle",
    "Politics",
    "Science",
    "Technology",
    "War",
  ];
  const [newsArticle, setNewsArticle] = useState([]);
  const [category, setCategory] = useState(CATEGORIES[0]);

  const getNews = async () => {
    const data = await fetchNews(category);
    setNewsArticle(data);
  };

  useEffect(() => {
    getNews();
  }, [category]);

  return (
    <div className="App">
      <Header />

      <div className="main-container">
        <Sidebar
          CATEGORIES={CATEGORIES}
          category={category}
          setCategory={setCategory}
        />
        <Container newsArticle={newsArticle} />
      </div>
    </div>
  );
}

export default App;
