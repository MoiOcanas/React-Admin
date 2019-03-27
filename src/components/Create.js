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

    render() {
        const { title, description, author } = this.state;

        return(
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            ADD POST
                        </h3>
                    </div>
                    <div className="panel-body">
                        <h4>
                            <Link to="/" className="btn btn-primary">Post List</Link>
                        </h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label for="title">Title: </label>
                                <input type="text" 
                                    className="form-control" 
                                    name="title" 
                                    value={title} 
                                    onChange={this.onChange} 
                                    placeholder="Title" />
                            </div>
                            <div className="form-group">
                                <label for="description">Description: </label>
                                <input type="text" 
                                    className="form-control" 
                                    name="description" 
                                    value={description} 
                                    onChange={this.onChange} 
                                    placeholder="Description" />
                            </div>
                            <div className="form-group">
                                <label for="author">Author: </label>
                                <input type="text" 
                                    className="form-control" 
                                    name="author" 
                                    value={author} 
                                    onChange={this.onChange} 
                                    placeholder="Author" />
                            </div>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;