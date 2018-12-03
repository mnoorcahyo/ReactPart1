import React, { Component } from "react";
import {Link} from "react-router-dom"
import Pokeball from '../pokeball.png'
import {connect} from 'react-redux'

class Home extends Component {
  render() {
    console.log(this.props)
    const {posts} = this.props
    const postList = posts.length ? (
      posts.map(post =>{
        return (
          <div className="post card" key={post.id}>
          <img src={Pokeball} alt="A pokeball"></img>
            <div className="card-content">
            <Link to={"/" + post.id}>
              <span className="card-title red-text">{post.title}</span>
            </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No Post Yet !</div>
    )
    return (
      <div className="container home">
        <h4 className="center">Home Page</h4>
        {postList}
      </div>
    );
  }
}
const mapStateProps = (state) =>{
  return{
    posts: state.posts
  }
}

export default connect(mapStateProps)(Home);
