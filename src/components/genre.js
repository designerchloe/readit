import fantasyImg from '../assets/fantasy.png';

function Genre() {
    return (
        <div className="genre-container">
            <img src={fantasyImg} className="genre-img"></img>
            <span className="link" >R/Fantasy</span>
        </div>
    )
}

export default Genre;