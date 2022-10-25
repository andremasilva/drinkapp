import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './search.css'

const Search = () => {
    const [input, setInput] = useState("");
    const Navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        Navigate("/searched/" + input);
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    value={input}
                />
            </div>
        </form>
    );
}

export default Search;

