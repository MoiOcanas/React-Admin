import React, { Component } from 'react';
import './App.css';

//Router
import { Link } from 'react-router-dom';

//Firebase
import firebase from './Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('posts');
    this.unsubcribe = null;

    this.state = {
      posts: []
    }
  }

  onCollectionUpdate = (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach(doc => {
      const { title, description, author } = doc.data();
      posts.push({
        key: doc.id,
        doc,
        title,
        description,
        author,
      });
    });
    this.setState({ posts });
  }

  componentDidMount() {
    this.unsubcribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                POST LIST
            </h3>
            </div>
            <div className="panel-body">
              <h4><Link to="/create">Add Post</Link></h4>
              <table className="table table-stripe">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Author</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.posts.map((post, i) =>
                    <tr key={i}>
                      <td><Link to={`/show/${post.key}`}>{post.title}</Link></td>
                      <td>{post.description}</td>
                      <td>{post.author}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
