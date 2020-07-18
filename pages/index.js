// import React, { Component } from 'react'

// class Index extends Component {
//   constructor(props) {
//     super(props);
//   }

// static async getInitialProps() {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   const { data } = res;
//   return { posts: data };
// }

//   render() {
//const {post} = this.props;
//     return (
//       <div>

//       </div>
//     )
//   }
// }
import axios from "axios";
import  Link  from "next/link";

const Index = ({ posts }) => (
  <div>
    <h1>Our Index Page</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}><a>{post.title}</a></Link>
          {/* <Link href={`/posts/[id]`} as={`/posts/${post.id}`} ><a>{post.title}</a></Link> */}
        </li> 
      ))}
    </ul>
  </div>
);

export async function getStaticProps() {
  //Isomorphic Unfetch instead of axios
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = res;
  return { props: { posts: data } };
}

export default Index;
