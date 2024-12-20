function Vote(props) {
    return (
        <div className="vote-container" >
            <button>
                <svg fill="none" height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="m9.43658 10.7989c-.29289.2929-.76777.2929-1.06066 0s-.29289-.7678 0-1.06068l3.99998-4c.2929-.29289.7678-.29289 1.0607 0l4 4c.2929.29288.2929.76778 0 1.06068s-.7678.2929-1.0607 0l-2.7197-2.71969v9.68939c0 .4142-.3357.75-.75.75-.4142 0-.75-.3358-.75-.75v-9.68939z" fill="#fff"/></svg>
            </button>
            <h4 id="score">{props.score}</h4>
            <button>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6562 16.7069L16.3759 13.9872C16.6688 13.6944 17.1437 13.6944 17.4366 13.9872C17.7295 14.2801 17.7295 14.755 17.4366 15.0479L13.4366 19.0479C13.1437 19.3408 12.6688 19.3408 12.3759 19.0479L8.37592 15.0479C8.08303 14.755 8.08303 14.2801 8.37592 13.9872C8.66881 13.6944 9.14369 13.6944 9.43658 13.9872L12.1562 16.7069L12.1562 7.01758C12.1562 6.60336 12.492 6.26758 12.9062 6.26758C13.3205 6.26758 13.6562 6.60336 13.6562 7.01758L13.6562 16.7069Z" fill="white"/>
                </svg>
            </button>
        </div>
    )
}

export default Vote;