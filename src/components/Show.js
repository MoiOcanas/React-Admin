import React from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Show extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            post: {},
            key: ''
        }
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

    render() {
        return(
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4>
                            <Link to="/">Posts list</Link>
                        </h4>
                        <h3>
                            { this.state.post.title }
                        </h3>
                    </div>
                    <div className="panel-body">
                        <dl>
                            <dt>Description:</dt>
                            <dd>{ this.state.post.description }</dd>
                            <dt>Author</dt>
                            <dd>{ this.state.post.author }</dd>
                        </dl>
                        <Link to={`/edit/${this.state.key}`} className="btn btn-sucess">Edit</Link>
                        <button onClick={this.delete.bind(this, this.state.key)} className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Show;