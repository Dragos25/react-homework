import React from "react";
import axios from "axios";

// export default class RandomImage extends React.Component{
//     state = {
//         imag: ""
//     }

//     componentDidMount(){
//         axios.get('https://picsum.photos/200').then(
//             res => {
//                 const imag = res.data;
//                 this.setState({imag});
//             })
//     }

//     render(){
//         return({state})
//     }
// }

export default function RandomImage(){
    let image = 'https://picsum.photos/1280/720'
    return(
        <img src={image}></img>
    )
}