import React, { Component } from 'react';
// import axios from 'axios';
import './Blog.css';
import Posts from './Posts/Posts';
//import FullPost from './FullPost/FullPost';
import { Route, NavLink, Switch, Redirect }  from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';

//import NewPost from './NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => {

    //lazy loading ---> only render when called 
    //whatever in the import() is only imported when this function is executed , this function will only executed once we render AsyncNewPost to the screen
    return import('./NewPost/NewPost');
});


//<Link> tag can route to different page without senting request and reload the page like <a>, the state wont be lost, retained the state
//react is re-rendering parts of the page , not loading the same page again

// <Link> always generate absolute path,relative path: pathname: this.props.match.url + '/new-post'

//<NavLink> has the class='active' allow to put some styling compare to <Link>, or set custom activeClassName="my-active" 

class Blog extends Component {
    state = {
        auth: true
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                    to="/posts" 
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                {/* react router to detemine which path you are on , sees if your current path starts with this path if this is a prefix
                so need to override this by adding "exact" which is a boolean

                ****without "exact" router will check does the path start with this,
                ****with "exact" router will check does the EXACT path start with this */}

                
                {/*
                <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/" render={() => <h1>Home 2</h1>}/> 
                

                Without <Switch> both of the /-new-post and /:id will be triggered
                or you can use url to make only one is trigger , /post/:id
                <Switch> make only the first route that matches a given path will loaded, it wont render anyother path */}
                
                <Switch>      
                    {/* 
                    This act as guard, only auth === true will route the new post 
                    if auth === false, the "/" will catch, and redirect ti /posts
                    
                    {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}
                    */}
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}  


                    {/* <Route path="/new-post" exact component={NewPost}/> */}
                    <Route path="/posts" component={Posts}/>


                    {/* if outside the switch statement, "from" can't be specific */}
                    <Redirect from="/" to="/posts" />
                    
                    {/* catch all route , catch unknown route, will clash with Redirect "/", so leave to the last  */}
                    <Route render={() => <h1>404 Not Found</h1>}/>



                    {/* This is one way of redirecting :
                    <Route path="/" component={Posts}/> */}

                    {/* parse top to bottom, so position matters, :id is a flexible variable route parameter,  means whenever there is / something, this route here is meant */}
                    {/* <Route path="/:id" exact component={FullPost}/> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;