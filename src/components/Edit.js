import React from 'react';

//Firebase
import firebase from '../Firebase';

//Styles
import '../styles/edit.css';

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: '',
            title: '',
            description: '',
            author: ''
        }
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('posts').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                const board = doc.data();
                this.setState({
                    key: doc.id,
                    title: board.title,
                    description: board.description,
                    author: board.author
                });
            } else {
                console.log("No such document!");
            }
        });
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({ board: state });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { title, description, author } = this.state;

        const updateRef = firebase.firestore().collection('posts').doc(this.state.key);
        updateRef.set({
            title,
            description,
            author
        }).then((docRef) => {
            this.setState({
                key: '',
                title: '',
                description: '',
                author: ''
            });
            this.props.history.push("/show/" + this.props.match.params.id)
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

    render() {
        return (
            <div>
                <div className="edit-container">
                    <div>
                        <div>
                            <h3>
                                Edit Post
                            </h3>
                        </div>
                        <div>
                            <form onSubmit={this.onSubmit}>
                                <input type="text"
                                    className="edit-input"
                                    name="title"
                                    value={this.state.title} onChange={this.onChange}
                                    placeholder="Title" />
                                <input type="text"
                                    name="description"
                                    className="edit-input"
                                    value={this.state.description} onChange={this.onChange}
                                    placeholder="Description" />
                                <input type="text"
                                    name="author"
                                    className="edit-input"
                                    value={this.state.author} onChange={this.onChange}
                                    placeholder="Author" />
                                <br />
                                <button type="submit" className="edit-button">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;