import React from 'react';

//Router
import { Link } from 'react-router-dom';

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
                                <div >
                                    <label for="title">Title: </label>
                                    <input type="text"
                                        name="title"
                                        value={this.state.title} onChange={this.onChange}
                                        placeholder="Title" />
                                </div>
                                <div>
                                    <label for="description">Description: </label>
                                    <input type="text"
                                        name="description"
                                        value={this.state.description} onChange={this.onChange}
                                        placeholder="Description" />
                                </div>
                                <div>
                                    <label for="author">Author: </label>
                                    <input type="text"
                                        name="author"
                                        value={this.state.author} onChange={this.onChange}
                                        placeholder="Author" />
                                </div>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;