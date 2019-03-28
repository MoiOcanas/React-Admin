import React from 'react';

//Firebase
import firebase from '../Firebase';

//Styles
import '../styles/create.css'

class Create extends React.Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection('posts');

        this.state = {
            title: '',
            description: '',
            author: ''
        };
    }

    onChange(e) {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit(e) {
        e.preventDefault();
        const { title, description, author } = this.state;

        this.ref.add({
            title,
            description,
            author
        })
            .then(docRef => {
                this.setState({
                    title: '',
                    description: '',
                    author: ''
                });
                this.props.history.push("/");
            })
            .catch(error => {
                console.log('Error ', error);
            });
    }

    render() {
        const { title, description, author } = this.state;

        return (
            <div className="create-container">
                <div>
                    <h3>
                        ADD POST
                    </h3>
                </div>
                <div>
                    <form onSubmit={this.onSubmit}>
                            <input type="text"
                                name="title"
                                value={title}
                                className="create-input"
                                onChange={this.onChange}
                                placeholder="Title" />
                            <input type="text"
                                name="description"
                                value={description}
                                className="create-input"
                                onChange={this.onChange}
                                placeholder="Description" />
                            <input type="text"
                                name="author"
                                value={author}
                                className="create-input"
                                onChange={this.onChange}
                                placeholder="Author" />
                                <br />
                        <button type="submit" className="create-button">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Create;