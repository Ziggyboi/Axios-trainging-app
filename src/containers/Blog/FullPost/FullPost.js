import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate () {

        // Ir buscar data ao servidor atravez dum get request usando a lib axios axios.get(JSON file)
        if (this.props.id) {
            if ( !this.state.loadedPost || (this.state.loadedPost && (this.state.loadedPost.id !== this.props.id))) {
                axios.get('/posts/' + this.props.id)
                    .then(response => {
                        // console.log(response);
                        this.setState({loadedPost: response.data})
                    });
            }
        }

        // else {
        //     console.log('No props id') Este bloco foi usado para descobrir um bug 
        // }
    }
    

    // Request atravez do axios.delete('jsonfile+ id') duma Delete action
    deletePost = () => {
        axios.delete('http://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading...!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button  onClick={this.deletePost()} className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;