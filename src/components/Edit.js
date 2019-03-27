import React from 'react';

//Firebase
import firebase from '../Firebase';

//Router
import { Link } from 'react-router-dom';

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

    render() {
        return(
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            EDIT POST
                        </h3>
                    </div>
                    <div className="panel-body">
                        <h4>
                            <Link to={`/show/${this.state.key}`} className="btn btn-primary">Post List</Link>
                        </h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label for="title">Title: </label>
                                <input type="text" 
                                    className="form-control" 
                                    name="title" 
                                    value={this.state.title} onChange={this.onChange} 
                                    placeholder="Title" />
                            </div>
                            <div className="form-group">
                                <label for="description">Description: </label>
                                <input type="text" 
                                    className="form-control" 
                                    name="description" 
                                    value={this.state.description} onChange={this.onChange} 
                                    placeholder="Description" />
                            </div>
                            <div className="form-group">
                                <label for="author">Author: </label>
                                <input type="text" 
                                    className="form-control" 
                                    name="author" 
                                    value={this.state.author} onChange={this.onChange} 
                                    placeholder="Author" />
                            </div>
                            <button type="submit" className="btn btn-sucess">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;