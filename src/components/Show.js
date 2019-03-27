import React from 'react';

//Firebase
import firebase from '../Firebase';

//Router
import { Link } from 'react-router-dom';

class Show extends React.Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('comments');

        this.state = {
            post: {},
            key: '',
            comment: '',
            comments: [],
        }

        this.loadComments = this.loadComments.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { comment } = this.state;

        this.ref.add({ comment })
            .then(docRef => {
                this.setState({ comment: '' });
            })
            .catch(error => {
                console.log('Error ', error);
            });
        
        this.loadComments();
    }

    loadComments() {
        const refComment = firebase.firestore().collection('comments');
        const comments = [];

        refComment.get()
            .then(res => {
                res.docs.forEach(doc => {
                    comments.push(doc.data());
                })
                this.setState({
                    comments
                });
            })    
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('posts').doc(this.props.match.params.id);
        ref.get()
            .then(doc => {
                if (doc.exists) {
                    this.setState({
                        post: doc.data(),
                        key: doc.id,
                        isLoading: false
                    });
                } else {
                    console.log('Error, where is the doc dude?');
                }
            });
        
        this.loadComments();
    }



    delete(id) {
        firebase.firestore().collection('posts').doc(id).delete()
            .then(() => {
                console.log('Document deleted');
                this.props.history.push('/');
            })
            .catch(error => {
                console.error('Error: ', error);
            })
    }

    deleteComment(id) {
        firebase.firestore().collection('comments').doc(id).delete();
        this.loadComments();
    }

    render() {
        const { comments, comment } = this.state;
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4>
                            <Link to="/">Posts list</Link>
                        </h4>
                        <h3>
                            {this.state.post.title}
                        </h3>
                    </div>
                    <div className="panel-body">
                        <dl>
                            <dt>Description:</dt>
                            <dd>{this.state.post.description}</dd>
                            <dt>Author</dt>
                            <dd>{this.state.post.author}</dd>
                        </dl>
                        <Link to={`/edit/${this.state.key}`} className="btn btn-success">Edit</Link>
                        <button onClick={this.delete.bind(this, this.state.key)} className="btn btn-danger">Delete</button>
                    </div>
                </div>
                <div className="panel panel-default">
                    <h4>Add a comment...</h4>
                    <input
                        className="form-control"
                        name="comment"
                        onChange={this.onChange}
                        value={comment}
                        type="text" />
                    <button className="btn btn-success" onClick={this.onSubmit}>Submit</button>
                </div>
                <div className="pane panel-default">
                   <ul>
                       {
                           comments.map((com, i) => <li key={i}>{ com.comment }</li>)
                       }
                   </ul>
                </div>
            </div>
        );
    }
}

export default Show;