import URLBox from "./URLBox";

function URLList() {
  const urls = [
    "https://some.random/url/redirect1",
    "https://some.random/url/redirect2",
    "https://some.random/url/redirect3",
    "https://some.random/url/redirect4",
    "https://some.random/url/redirect5",
    "https://some.random/url/redirect6",
    "https://some.random/url/redirect7",
    "https://some.random/url/redirect8",
    "https://some.random/url/redirect9",
    "https://some.random/url/redirect10",
    "https://some.random/url/redirect1",
    "https://some.random/url/redirect2",
    "https://some.random/url/redirect3",
    "https://some.random/url/redirect4",
    "https://some.random/url/redirect5",
    "https://some.random/url/redirect6",
    "https://some.random/url/redirect7",
    "https://some.random/url/redirect8",
    "https://some.random/url/redirect9",
    "https://some.random/url/redirect10",
    "https://some.random/url/redirect1",
    "https://some.random/url/redirect2",
    "https://some.random/url/redirect3",
    "https://some.random/url/redirect4",
    "https://some.random/url/redirect5",
    "https://some.random/url/redirect6",
    "https://some.random/url/redirect7",
    "https://some.random/url/redirect8",
    "https://some.random/url/redirect9",
    "https://some.random/url/redirect10",
  ];

  return (
    <div className="list">
      {urls.map((url) => (
        <URLBox key={url} url={url} />
      ))}
    </div>
  )
}

export default URLList