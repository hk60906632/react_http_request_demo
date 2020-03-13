import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    componentDidUpdate () {
        if (this.props.id){
            axios.get('https://my-json-server.typicode.com/hk60906632/my_dummy_jason_server/posts/' + this.props.id)
                .then(response => {
                    console.log(response);
                });
        }   
    }


    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;


        //null is treated as false, so this mean id has to be not null
        //if the id is bigger than 0, it will treat as true
        if (this.props.id){
            post = (
                <div className="FullPost">
                    <h1>Title</h1>
                    <p>Content</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }

        
        return post;
    }
}

export default FullPost;