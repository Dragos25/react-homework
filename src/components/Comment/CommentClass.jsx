import React from 'react';


function CommentClass(props) {
    return (
        <li>
            <span>{props.email}</span>
            <br />
            <span>{props.body}</span>
            
        </li>
    );
}

export default CommentClass;