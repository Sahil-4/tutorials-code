import { Link } from "react-router-dom";
import { MdContentCopy, MdDelete } from "react-icons/md";

function URLBox({ url }) {
  const copyURL = () => {};
  const deleteURL = () => {};

  return (
    <div className="url-box">
      <Link className="text" to={url} target="_blank">
        {url}
      </Link>
      <MdContentCopy onClick={copyURL} />
      <MdDelete onClick={deleteURL} />
    </div>
  );
}

export default URLBox;
