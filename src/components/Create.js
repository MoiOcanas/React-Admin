import React from 'react';

//Firebase
import firebase from '../Firebase';

//Router
import { Link } from 'react-router-dom';

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

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
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

        return(
            <div>
                <div>
                    <div>
                        <h3>
                            ADD POST
                        </h3>
                    </div>
                    <div>
                        <h4>
                            <Link to="/">Post List</Link>
                        </h4>
                        <form onSubmit={this.onSubmit}>
                            <div>
                                <label forHtml="title">Title: </label>
                                <input type="text" 
                                    name="title" 
                                    value={title} 
                                    onChange={this.onChange} 
                                    placeholder="Title" />
                            </div>
                            <div>
                                <label forHtml="description">Description: </label>
                                <input type="text" 
                                    name="description" 
                                    value={description} 
                                    onChange={this.onChange} 
                                    placeholder="Description" />
                            </div>
                            <div>
                                <label forHtml="author">Author: </label>
                                <input type="text" 
                                    name="author" 
                                    value={author} 
                                    onChange={this.onChange} 
                                    placeholder="Author" />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;