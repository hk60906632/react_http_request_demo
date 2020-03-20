import React from 'react';
//import { withRouter } from 'react-router-dom';

import './Post.css';

const post = (props) => {
    console.log(props);
    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    );
};
    

//there are some props in the Posts component (match, location, history...) wont pass into the post component
//the post can be pass by one by one like props = {...this.props} in posts component

//or use withRouter() higher order component here to pass props form posts to post

// export default withRouter(post);
export default post;