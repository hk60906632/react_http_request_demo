import React, { Component } from 'react';
// import axios from 'axios';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import { Route, NavLink }  from 'react-router-dom';

//<Link> tag can route to different page without senting request and reload the page like <a>, the state wont be lost, retained the state
//react is re-rendering parts of the page , not loading the same page again

// <Link> always generate absolute path,relative path: pathname: this.props.match.url + '/new-post'

//<NavLink> has the class='active' allow to put some styling compare to <Link>, or set custom activeClassName="my-active" 

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                    to="/" 
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }}>Home</NavLink></li>
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

                without "exact" router will check does the path start with this,
                with "exact" router will check does the EXACT path start with this */}

                {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/" render={() => <h1>Home 2</h1>}/> */}

                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" exact component={NewPost}/>
                {/* parse top to bottom, so position matters, :id means whenever there is / something, this route here is ment */}
                <Route path="/:id" exact component={FullPost}/>

                
                
                {/* <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;