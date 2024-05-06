import {useEffect, useState} from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      setPosts(response.data)
    }

    //uncomment this line
    //fetchPosts()
  }, []);

  return (
    <>
      <div className={"alert alert-light-primary"}>
        <div className={"title"}>The error on this page is that you want to access an undefined value</div>
        <ul>
          <li>
            Uncomment the fetch <strong>fetchPosts</strong> function
          </li>
          <li>
            Then expose a fallback interface after the error occurs
          </li>
          <li>
            Send the report to the <strong>TroubleTrack</strong> platform
          </li>
        </ul>
      </div>

      {
        posts.map(post => (
          <div style={{border: "1px solid ", padding: 8}} key={post.id}>
            userId : {post.userId}
            description :{post.data.description} {/*Cannot read properties of undefined (reading 'description')*/}
          </div>
        ))
      }
    </>
  )
}
export default Posts