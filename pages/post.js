import React from "react";
import axios from "axios";
import { withRouter } from "next/router";

function Post(props) {
  //console.log(props);
  return (
    <div>
      {props.comments.map((comment) => (
        <Comment {...comment}/>
      ))}
    </div>
  );
  
}

const Comment=({email,body})=>(
  <div>
    <h5>{email}</h5>
    <p>{body}</p>
  </div>
)

export default Post;

export async function getServerSideProps({ query }) {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  );

  // console.log(res)

  return {
    props: { ...query, comments: res.data },
  };
 }

