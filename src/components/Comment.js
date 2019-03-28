import React from 'react';

//Styles
import '../styles/comment.css';

const Comment = (props) => (
    <div className="comment">
        {props.comment}
    </div>
);

export default Comment;