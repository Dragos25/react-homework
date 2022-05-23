import React from "react";
import axios from "axios";
import RandomImage from "../../components/RandomImage/RandomImage";
import { Link } from "react-router-dom";

import './posts.css';

export default class Posts extends React.Component{
    state = {
        posts: [],
        render : false
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            res => {
                const posts = res.data;
                this.setState({posts});
                
            });
        // axios.get('https://jsonplaceholder.typicode.com/users').then(
        //     res => {
        //         const users = res.data;
        //         this.setState({users});
                
        //     });
    }
    getUserById(id){
        return axios.get('https://jsonplaceholder.typicode.com/users').then(    
            res => {
                let result = res.data.filter(u => u.id == id);
                this.state.render = true;
                
                return result[0];
            }
        
        );
   
        
    }
    

    render(){
        return(
            <div class="container">
                {
                    this.state.posts
                    .map(post =>
                        <>
                        <h2 class="title">{post.title}</h2>
                        <ul class="info__container">
                            <li class="info__item">Destination Europe</li>
                            <li class="info__item">
                                
                                {this.getUserById(post.userId).name}
                                
                            </li>
                        <li class="info__item">July 01, 2018</li>
                        </ul>
                        <div class="actions__container">
                            <button type="button" class="actions__btn">Edit</button>
                            <button type="button" class="actions__btn">Delete</button>
                         </div>

                         <RandomImage/>
                         <div class="content__container">
                             {post.body}
                         </div>
                         <Link to = {"/comments/" +post.id}><button>Comments</button></Link>


                        
                        </>
                        )
                        
                }
            </div>
        )
    }
}