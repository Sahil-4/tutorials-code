import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Container from "./Components/Container";
import { fetchNews } from "./api";
import "./App.css";

function App() {
  const CATEGORIES = [
    "Top Headlines",
    "AI",
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
  const [newsArticles, setNewsArticles] = useState([]);
  const [category, setCategory] = useState(CATEGORIES[0]);

  const getNews = async () => {
    const data = await fetchNews(category);
    setNewsArticles(data);
  };

  useEffect(() => {
    getNews();
  }, [category]);

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Sidebar CATEGORIES={CATEGORIES} category={category} setCategory={setCategory} />
        <Container newsArticles={newsArticles} />
      </div>
    </div>
  );
}

export default App;
