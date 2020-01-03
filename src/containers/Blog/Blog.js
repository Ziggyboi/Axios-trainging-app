import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
// Using instances
//import axios from 'axios';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost'; 
import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">    
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" 
                                exact
                                // redondancia  
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }} >
                                    Home
                                </NavLink>
                            </li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?query-submit=true'
                                // ultimos parametros nao fazem nada nesta aplicaçao mas demonstra outras referencias que podemos passar ao component NavLink do react-router
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1> } />
                <Route path="/" render={() => <h1>Home2</h1> } /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;