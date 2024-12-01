import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from './post';
import {selectPosts} from './postsSlice';
import {fetchPost} from './postsSlice';

function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);

    useEffect(() => {
        dispatch(fetchPost())
    }, [posts]);

    return (
        <div className="posts-container">
            {
                posts.map(post => {
                    return <Post name={post.name} />
                })
            }
        </div>
    )
};

export default Posts;