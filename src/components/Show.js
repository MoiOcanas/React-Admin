import React from 'react';

//Firebase
import firebase from '../Firebase';

//Router
import { Link } from 'react-router-dom';

//Components
import Comment from './Comment';

//Styles
import '../styles/show.css';

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

    onChange(e){
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit(e){
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
            <div>
                <div className="show-container">
                    <div>
                        <h3>
                            {this.state.post.title}
                        </h3>
                    </div>
                    <div>
                        <dl>
                            <h4>Description</h4>
                            <dd>{this.state.post.description}</dd>
                            <h4>Author</h4>
                            <dd>{this.state.post.author}</dd>
                        </dl>
                        <Link to={`/edit/${this.state.key}`}  className="edit-button">Edit Post</Link>
                        <button onClick={this.delete.bind(this, this.state.key)} className="delete-button">Delete</button>
                    </div>
                </div>
                <div className="comment-container">
                    <h4>Add a comment...</h4>
                    <input
                        name="comment"
                        className="comment-input"
                        onChange={this.onChange}
                        value={comment}
                        type="text" />
                        <button onClick={this.onSubmit} className="comment-button">Add Comment</button>
                </div>
                
                <div>
                   <div>
                       {
                           comments.map((com, i) => <Comment key={i} comment={com.comment}/>)
                       }
                   </div>
                </div>
            </div>
        );
    }
}

export default Show;