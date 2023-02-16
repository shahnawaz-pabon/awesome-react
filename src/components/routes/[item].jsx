import { Link } from "react-router-dom";
import { ArrowBackIcon } from "../Icons";

const Item = (props) => {
  const { page } = props;
  if (page === "homepage") {
    return <div id="page">{page}</div>;
  } else {
    return (
      <>
        {/* <Link to="/">
          <button className="btn">
            <ArrowBackIcon /> Back to Home
          </button>
        </Link> */}
        <div id="page">{page}</div>
      </>
    );
  }
};

export default Item;
