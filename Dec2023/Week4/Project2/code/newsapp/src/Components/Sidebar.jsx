
function Sidebar({ CATEGORIES=[], category, setCategory}) {

  return (
    <div className="sidebar">
      <ul>
        {CATEGORIES.map((cat, index) => (
          <li
            className={cat === category ? "active" : ""}
            key={index + cat}
            onClick={() => {
              setCategory(cat);
            }}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
