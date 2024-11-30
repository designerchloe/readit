import React from 'react';
import { useSelector } from 'react-redux';
import Post from './post';
import {selectPosts} from './postsSlice';

function Posts() {

    const posts = useSelector(selectPosts);

    return (
        <div className="posts-container">
            {
                posts.map(post => {
                    return <Post />
                })
            }
        </div>
    )
};

export default Posts;