import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';

const Home = (props) => {

    const [state, setState] = React.useState("");
    const searchGoogle = e => {
        props.history.push({ pathname: "/search", state });
    };

    return (
        <div className="home">
            <div className="home-container">
                <div className="home-logo">
                    <img src="/images/googleLogo.png" alt="Google Logo" />
                </div>
                <form className="home-form" onSubmit={searchGoogle} >
                    <input type="text"
                        className="home-input"
                        onChange={(e) => setState(e.target.value)}
                        value={state} />
                    <div className="home-group">
                        <input type="submit" className="home-btn" value="Google Search" />
                    </div>
                    <SearchIcon className="search-icon" />
                    <MicIcon className="mic-icon" />
                </form>
                {/* <SearchBar /> */}
            </div>
        </div >
    )
}

export default Home
