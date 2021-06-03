import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import axios from "axios";
import Show from "./Show"
require("dotenv").config();



const Search = (props) => {
    const goBack = () => {
        props.history.push("/");
    };
    const [search, setSearch] = React.useState(
        props.location.state ? props.location.state : ""
    );
    const [results, setResults] = React.useState([]);
    const [info, setInfo] = React.useState("");

    const searchGoogle = async (e) => {
        e.preventDefault();
        axios.get("https://v2.jokeapi.dev/joke/Programming,Dark?type=single").then((response) => {
            alert(response.data.joke);
        })
        try {
            const response = await axios.get(
                `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_KEY}&cx=${process.env.REACT_APP_CX}&q=${search}`
            );
            if (response) {
                setResults(response.data.items);
                setInfo(response.data.searchInformation);
            }
        } catch (error) {
            console.log(error);
        }
    };
    React.useEffect(() => {
        async function getPosts() {
            if (props.location.state) {
                try {
                    const response = await axios.get(
                        `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_KEY}&cx=${process.env.REACT_APP_CX}&q=${props.location.state}`
                    );
                    if (response) {
                        setResults(response.data.items);
                        setInfo(response.data.searchInformation);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
        getPosts();
    }, [props.location.state]);

    return (
        <div className="search">
            <div className="search-from">
                <div className="search-form-logo">
                    <img src="/images/celebrating-frank-kameny-google-logo.png" alt="Google logo" onClick={goBack} />
                </div>
                <div className="search-form-input">
                    <form className="home-form" onSubmit={searchGoogle} >
                        <input type="text" className="home-input"
                            value={search} onChange={(e) => setSearch(e.target.value)} />
                        <SearchIcon className="search-icon" />
                        <MicIcon className="mic-icon" />
                    </form>
                </div>
            </div>
            <Show results={results} info={info} />
        </div>
    )
}

export default Search
