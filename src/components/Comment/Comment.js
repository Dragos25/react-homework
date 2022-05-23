import React from "react";
import axios from "axios";
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { withRouter } from "react-router";
import CommentClass from "./CommentClass";
import ReactDOM from 'react-dom';



function useQuery() {

    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

function useId() {

    let { id } = useParams();

    return id;
}

function Comment() {
    let idParam = useId();
    console.log('idParam', idParam);

    return fetch('https://jsonplaceholder.typicode.com/comments?postId=' + idParam).then(
        (response) => {
            response
                .json()
                .then((object) =>{
                    console.log(object);
                    return object;
                }
                    
                );
        }
    );
    
}

export default Comment;