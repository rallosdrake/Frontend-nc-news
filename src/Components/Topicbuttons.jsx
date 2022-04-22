import "react-dropdown/style.css";
import { Link } from "react-router-dom";

const TopicButtons = () => {
  return (
    <>
      <div className="buttons">
        <h3>View by topic:</h3>
        <div className="Inner">
          <label htmlFor="articles"></label>
          <Link to="/coding">
            <button type="button">
              <h4>Coding</h4>
            </button>
          </Link>
        </div>
        <div className="Inner">
          <label htmlFor="articles"></label>
          <Link to="/cooking">
            <button type="button">
              <h4>Cooking</h4>
            </button>
          </Link>
        </div>
        <div className="Inner">
          <label htmlFor="articles"></label>
          <Link to="/football">
            <button type="button" className="allarticles">
              <h4>Football</h4>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default TopicButtons;
