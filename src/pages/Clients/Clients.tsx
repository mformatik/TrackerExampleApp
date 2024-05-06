import ForbiddenException from "../../utils/ForbiddenException";
import {DetailsModel} from "../../types/DetailsModel";

const Clients = () => {
  const handleClick = () => {
    const details: DetailsModel = {
      message: "Access forbidden",
      code: "403",
      path: "/restricted"
    };

    throw new ForbiddenException(details);
  }

  return (
    <>
      <div className={"alert alert-light-primary"}>
        <div className={"title"}>
          The error on this page is a custom exception
        </div>
        <ul>
          <li>
            Click on the <strong>button</strong>  to simulate a real click
          </li>
          <li>
            Send the report to the <strong>TroubleTrack</strong> platform
          </li>
        </ul>
      </div>
      <h2>clients page</h2>
      <button onClick={handleClick}>click me</button>
    </>
  )
}

export default Clients