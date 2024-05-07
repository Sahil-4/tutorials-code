function Sidebar({ CATEGORIES, category, setCategory }) {
  return (
    <div className="sidebar">
      <ul>
        {CATEGORIES.map((cat, index) => (
          <li
            key={index + cat}
            className={cat === category ? "active" : ""}
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
