import { useNavigate } from "react-router-dom";
import "react-dropdown/style.css";
import { Link } from "react-router-dom";

const TopicButtons = () => {
  return (
    <>
      <div className="buttons">
        <h3>View by topic:</h3>
        <div className="Inner">
          <label htmlFor="articles"></label>
          <Link to="/articles/coding">
            <button type="button">
              <h4>Coding</h4>
            </button>
          </Link>
        </div>
        <div className="Inner">
          <label htmlFor="articles"></label>
          <Link to="/articles/cooking">
            <button type="button">
              <h4>Cooking</h4>
            </button>
          </Link>
        </div>
        <div className="Inner">
          <label htmlFor="articles"></label>
          <Link to="/articles/football">
            <button type="button" className="allarticles">
              <h4>Football</h4>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
  // const navigate = useNavigate();
  // const routeChange = () => {
  //   let path = `https://enigmatic-tor-40960.herokuapp.com/api/articles/cooking`;
  //   navigate(path);
  // };
  // return (
  //   <>
  //     <form>
  //       <label htmlFor="topics">
  //         Choose a topic to view all associated articles:
  //       </label>
  //       <select name="topics" id="topics">
  //         <option value="Cooking">Cooking</option>
  //         <option value="Coding">Coding</option>
  //         <option value="Football">Football</option>
  //       </select>
  //     </form>
  //     <input
  //       type="submit"
  //       value="Submit"
  //       onSubmit={() => routeChange()}
  //     ></input>
  //   </>
  // );
};
export default TopicButtons;
