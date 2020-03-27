import React, { Component } from 'react';
import axiosInstance from '../../../axios';
import { Route, Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        //cannot store this get() request into a const, because the get request happens asynchronously, it needs time to go to server to get data
        //But javascript execute code in a synchronous manner, so after the get reqest, the next line execute immediately, 
        //wont pause until the get() request is finish
        //so need to use the then() function
        console.log(this.props);
        axiosInstance.get('/posts')
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
                })//this then() function will be executed once the data return from server
                .catch(error => {
                    console.log(error);
                    //this.setState({error: true});
                }); //this catch() is to catch the http request error
    }


    //using link is fine, but sometimes you want to navigate after something finished, after a HTTP request
    postSelectedHandler = (id) => {
        //this.setState({selectedPostId: id});
        //the "history" property has that push method allow you to push a new page onto the stack of pages
        //navigation is about a stack of pages, last page and next page means go on different pages in this stack of pages
        
        this.props.history.push({pathname: '/posts/' + id})
        //alternative: this.props.history.push('/posts/' + id)
    }

    render () {
        //if error exists from the http request, will only return this
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;

        //if http request successful, this post will overwrite the error message
        if (!this.state.error){
            posts = this.state.posts.map( post => {
                return (
                        //<Link to={'/posts' + post.id} key={post.id}>
                            <Post
                                key={post.id}  
                                title={post.title} 
                                author={post.author} 
                                clicked={() => this.postSelectedHandler(post.id)}/>
                        //</Link>
                        );
            });
        }

        //<Route> can be use anywhere, as long as the page or the component where you are using it is wrapped by the <BrowserRouter> (in App.js)

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                {/* this url property is the url responsible for loading this posts component 
                this make this dynamic, the root url will change automatically*/}
                <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
            </div>
            
        );
    }
}


export default Posts;