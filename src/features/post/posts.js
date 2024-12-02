import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from './post';
import {selectPosts} from './postsSlice';
import {fetchPost} from './postsSlice';
import { finalImages } from './postImages';

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
                posts.map((post, index) => {
                    return <Post 
                    author={post.data.author} 
                    title={post.data.title}
                    text={post.data.selftext}
                    created={post.data.created_utc}
                    score={post.data.score}
                    image={finalImages[index]} />
                })
            }
        </div>
    )
};

export default Posts;