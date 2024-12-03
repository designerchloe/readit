import React, {useEffect, useState} from 'react';
import Vote from '../../components/vote';
import BookImg from '../../assets/book-img.png';
import Comments from '../comments/comments';
import { useDispatch } from 'react-redux';
import {fetchCommentstByPostId} from '../comments/commentsSlice';

function Post(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCommentstByPostId(props.permalink));
    }, [dispatch]);

    //Description text formatting
    const selfText = props.text;
    const abbrText = selfText.slice(0, 60) + '...';

    //Post timing formatting
    const givenEpochTime = props.created;
    const currentEpochTime = Math.floor(Date.now() / 1000);
    const hoursAgo = Math.ceil((currentEpochTime - givenEpochTime) / 3600);
    const daysAgo = Math.ceil(hoursAgo / 24);

    return (
        <div className="post-container">
            <img className="post-img" src={props.image} />
            <div className="post-main-content-container">
                <div className="post-top-content-container">
                    <div className="post-text" >
                        <h2>{props.title}</h2>
                        <p>{selfText.length < 2 ? '' : abbrText}</p>
                        <div className="post-metadata" >
                            <span className="link" >{props.author}</span>
                            <span>{hoursAgo > 23 ? daysAgo : hoursAgo} {hoursAgo > 23 ? 'days ago' : 'hours ago'}</span>
                        </div>
                    </div>
                    <Vote score={props.score} />
                </div>
                <div className="rule" ></div>
                <Comments numComments={props.numComments} />
            </div>
            
        </div>
    )
};

export default Post;