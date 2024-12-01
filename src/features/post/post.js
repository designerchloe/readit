import Vote from '../../components/vote';
import BookImg from '../../assets/book-img.png';
import Comments from '../comments/comments';

function Post(props) {
    return (
        <div className="post-container">
            <img className="post-img" src={BookImg} />
            <div className="post-main-content-container">
                <div className="post-top-content-container">
                    <div className="post-text" >
                        <h2>{props.name}</h2>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet...</p>
                        <div className="post-metadata" >
                            <span className="link" >easyreader</span>
                            <span>11 hours ago</span>
                        </div>
                    </div>
                    <Vote />
                </div>
                <div className="rule" ></div>
                <Comments />
            </div>
            
        </div>
    )
};

export default Post;