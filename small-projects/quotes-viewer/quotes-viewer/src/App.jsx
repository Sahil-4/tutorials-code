import { useEffect, useState } from 'react';
import refreshIcon from "./Assets/refreshbutton.png";
import './App.css'

function App() {
  // this will hold the quote
  const [quote, setQuote] = useState({_id: "", content: "", author: ""});

  async function updateQuote() {
    // this will fetch new quote from API
    const API_URL = "https://api.quotable.io/quotes/random";

    // fetching data 
    const response = await fetch(API_URL); // for get request 
    // parsing the response 
    const data = await response.json();

    // and then it will update the quote on UI
    setQuote({_id : data[0]._id, content : data[0].content, author : data[0].author})
  }

  useEffect(() => {
    updateQuote();
  }, [])

  return (
    <div className="container_main">
      <h1>{quote.content}</h1>
      <h2>By ~{quote.author}</h2>

      <button className="refresh_button" id="refreshButton" onClick={updateQuote}>
        <img src={refreshIcon} alt="Refresh icons - Flaticon" />
      </button>
    </div>
  )
}

export default App
