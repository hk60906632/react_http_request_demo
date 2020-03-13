import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount () {
        //cannot store this get() request into a const, because the get request happens asynchronously, it needs time to go to server to get data
        //But javascript execute code in a synchronous manner, so after the get reqest, the next line execute immediately, 
        //wont pause until the get() request is finish
        //so need to use the then() function

        axios.get('https://my-json-server.typicode.com/hk60906632/my_dummy_jason_server/posts')
                .then(response => {

                    //only display 4 post from the response
                    const posts = response.data.slice(0, 4);
                    //add the author field to the response
                    const updatePosts = posts.map(post => {
                        return {
                            ...post,
                            author: 'Max'
                        }
                    })

                    this.setState({posts: updatePosts})
                    //this.setState({posts: response.data})
                    //console.log(response);
                }); //this then function will be executed once the data return from server
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        const posts = this.state.posts.map( post => {
            return <Post key={post.id} 
                        title={post.title} 
                        author={post.author} 
                        clicked={() => this.postSelectedHandler(post.id)} />;
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;