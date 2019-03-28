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