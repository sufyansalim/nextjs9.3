import axios from "axios";

function Post(props) {
  console.log(props);
  return (
    <div>
      {props.comments.map((comment) => (
        <Comment key={comment.id} {...comment}/>
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

export async function getStaticPaths() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const data = res.data;
  return {
    paths: data.map((post) => ({
      params: {
        id: post.id.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${params.id}`
  );
  return { props: { comments: res.data } };
}

export default Post;
