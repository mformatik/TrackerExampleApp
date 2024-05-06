import {useEffect} from "react";
import axios from "axios";

const Products = () => {
  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get("https://example.api/v1.0/products")
    }

    //uncomment this line
    //fetchProducts()
  }, []);

  return (
    <div className={"alert alert-light-primary"}>
      <div className={"title"}>
        The error on this page is that you want to connect to a server that does not exist or is not in service
      </div>
      <ul>
        <li>
          Uncomment the fetch <strong>fetchProducts</strong> function
        </li>
        <li>
          Show the error alert to show the user the nature of the error
        </li>
        <li>
          Send the report to the <strong>TroubleTrack</strong> platform
        </li>
      </ul>
    </div>
  )
}
export default Products