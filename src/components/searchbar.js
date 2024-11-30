import React, {useState} from 'react';

function Searchbar() {
    const [term, setTerm] = useState('');

    const handleTermChange = (event) => {
        setTerm(event.target.value);
        console.log(term);
      };

    const search = (event) => {
        event.preventDefault();
        console.log('searched!');
    }

    return (
        <form className="search-form" onSubmit={search} >
            <input className="search-input" type='text' onChange={handleTermChange} />
            <button type='submit' >
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3854 16.154C11.7351 18.2767 7.85569 18.1096 5.3989 15.6529C2.76287 13.0168 2.76287 8.74295 5.3989 6.10691C8.03494 3.47087 12.3088 3.47087 14.9448 6.10691C17.4016 8.56369 17.5687 12.4431 15.446 15.0934L20.6017 20.249C20.8946 20.5419 20.8946 21.0168 20.6017 21.3097C20.3088 21.6026 19.8339 21.6026 19.541 21.3097L14.3854 16.154ZM6.45956 14.5922C4.40931 12.5419 4.40931 9.21782 6.45956 7.16757C8.50982 5.11732 11.8339 5.11732 13.8842 7.16757C15.9329 9.21632 15.9344 12.5371 13.8887 14.5877C13.8872 14.5892 13.8857 14.5907 13.8842 14.5922C13.8827 14.5937 13.8812 14.5952 13.8797 14.5967C11.8291 16.6424 8.50831 16.6409 6.45956 14.5922Z" fill="white"/>
                </svg>
            </button>
        </form>
    )
};

export default Searchbar;