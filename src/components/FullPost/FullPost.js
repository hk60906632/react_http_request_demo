import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate () {
        if (this.props.id){
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)){
                axios.get('https://my-json-server.typicode.com/hk60906632/my_dummy_jason_server/posts/' + this.props.id)
                    .then(response => {
                        //console.log(response);
    
                        //without the if statement check, this will cause a infinite loop due to re-render(), should not setState() here
                        this.setState({loadedPost: response.data});
                    });
            }
        }   
    }

    deletePostHandler = () => {
        axios.delete('https://my-json-server.typicode.com/hk60906632/my_dummy_jason_server/posts/' + this.props.id)
            .then(response => console.log(response));
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}> Loading.....! </p>;
        }

        //null is treated as false, so this mean id has to be not null
        //if the id is bigger than 0, it will treat as true
        if (this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }

        
        return post;
    }
}

export default FullPost;