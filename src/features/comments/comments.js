import Comment from './comment';

function Comments(props) {

    if (props.numComments > 0) {
        return (
            <div className="comments-container">
                <h4>Comments <span>({props.numComments})</span></h4>
                <Comment />
                <div className="comments-cover"></div>
                <button id="expand-comments" className="button-secondary">View All</button>
            </div>
        )
    }
    
};

export default Comments;