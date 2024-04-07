import { useState } from "react";

function URLShortenerBox() {
  const [URL, setURL] = useState("");

  const shortURL = () => {
    if (URL === "") return alert("Not a valid URL");
    console.log(URL);
  };

  const copyURL = () => {
    if (URL === "") return alert("Not a valid URL");
    console.log(URL);
  };

  return (
    <div>
      <div className="url-shortener-box">
        <input
          type="text"
          name="url"
          value={URL}
          placeholder="Enter URL Here"
          onChange={(e) => setURL(e.target.value)}
        />

        <div>
          <button className="pointer" onClick={shortURL}>
            Short
          </button>
          <button className="pointer" onClick={copyURL}>
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default URLShortenerBox;
