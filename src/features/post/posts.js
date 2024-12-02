import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from './post';
import {selectPosts} from './postsSlice';
import {fetchPost} from './postsSlice';

function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const [hasFetched, setHasFetched] = useState(false);

    useEffect(() => {
        if (!hasFetched) {
        dispatch(fetchPost());
        setHasFetched(true);
        }
    }, [dispatch, hasFetched]);

    return (
        <div className="posts-container">
            {
                posts.map(post => {
                    return <Post 
                    author={post.data.author} 
                    title={post.data.title}
                    text={post.data.selftext}
                    created={post.data.created_utc}
                    score={post.data.score} />
                })
            }
        </div>
    )
};

export default Posts;