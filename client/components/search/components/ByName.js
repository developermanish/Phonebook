import React, { useState, useRef, useEffect } from "react";
import TextInput from "../../common/TextInput";
import SuggestionList from "./Suggestion";
import debounce from "lodash.debounce";
import { searchByName } from "../../../services/contact";
import useDebounce from "./useDebounce";

// import "../search.css";
const ByName = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(
        () => {
            async function fetching() {
                if (debouncedSearchTerm) {
                    setIsSearching(true);
                    console.log(debouncedSearchTerm)
                    const response = await searchByName(debouncedSearchTerm);
                    console.log(response)
                    if (response) {
                        setIsSearching(false);
                        setResults(response);
                    }
                    // searchCharacters(debouncedSearchTerm)//call API and 
                } else {
                    setResults([]);
                }
            }
            fetching()
        }, [debouncedSearchTerm]
    );

    // const [keyword, setKeyword] = useState("");

    // const onChange = () => {
    //     const alpha = setKeyword(e.target.value);
    //     console.log(alpha);
    //     // getSuggestions()
    // }

    // const [showSuggestions, setShowSuggestions] = useState(false);
    // const [keyword, setKeyword] = useState("");
    // const [activeSuggestion, setActiveSuggestion] = useState(0);
    // const [suggestions, setSuggestionsArray] = useState([]);
    // const [filteredSuggestions, setFilteredSuggetions] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);



    // const onChange = async (e) => {
    //     // let { suggestions } = ['amna', 'asda', 'qweqweq'];
    //     setKeyword(e.currentTarget.value);
    //     // a += e.currentTarget.value;//Remove after problem resolved
    //     // // setSuggestionsArray([]);
    //     // console.log("hello before");
    //     // console.log(a);
    //     let result = await searchByName(a);
    //     console.log(result)
    //     const newSuggestions = [...result, ...suggestions];
    //     setSuggestionsArray(newSuggestions);
    //     console.log("after")
    //     console.log(suggestions);


    //     // Filter our suggestions that don't contain the user's input
    //     setFilteredSuggetions(newSuggestions.filter(
    //         suggestion =>
    //             suggestion.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    //     ));

    //     // Update the user input and filtered suggestions, reset the active
    //     // suggestion and make sure the suggestions are shown

    //     setActiveSuggestion(0);
    //     // setFilteredSuggetions([]);
    //     setShowSuggestions(true);
    //     // setKeyword(e.currentTarget.value);
    // };

    // // Event fired when the user clicks on a suggestion
    // const onClick = e => {
    //     // Update the user input and reset the rest of the state

    //     setActiveSuggestion(0);
    //     setFilteredSuggetions([]);
    //     setShowSuggestions(true);
    //     setKeyword(e.currentTarget.innerText);
    // };

    // // Event fired when the user presses a key down
    // const onKeyDown = e => {
    //     // const { activeSuggestion, filteredSuggestions } = this.state;

    //     // User pressed the enter key, update the input and close the
    //     // suggestions
    //     if (e.keyCode === 13) {

    //         setActiveSuggestion(0);
    //         setFilteredSuggetions([]);
    //         setShowSuggestions(false);
    //         setKeyword(filteredSuggestions[activeSuggestion]);
    //     }
    //     // User pressed the up arrow, decrement the index
    //     else if (e.keyCode === 38) {
    //         if (activeSuggestion === 0) {
    //             return;
    //         }
    //         setActiveSuggestion(activeSuggestion - 1);
    //     }
    //     // User pressed the down arrow, increment the index
    //     else if (e.keyCode === 40) {
    //         if (activeSuggestion - 1 === filteredSuggestions.length) {
    //             return;
    //         }

    //         setActiveSuggestion(activeSuggestion + 1);
    //     }
    // };

    // let suggestionsListComponent;

    // if (showSuggestions && keyword) {
    //     if (filteredSuggestions.length) {
    //         suggestionsListComponent = (
    //             <ul class="suggestions">
    //                 {filteredSuggestions.map((suggestion, index) => {
    //                     let className;

    //                     // Flag the active suggestion with a class
    //                     if (index === activeSuggestion) {
    //                         className = "suggestion-active";
    //                     }

    //                     return (
    //                         <li
    //                             className={className}
    //                             key={suggestion}
    //                             onClick={onClick}
    //                         >
    //                             {suggestion}
    //                         </li>
    //                     );
    //                 })}
    //             </ul>
    //         );
    //     } else {
    //         suggestionsListComponent = (
    //             <div class="no-suggestions">
    //                 <em>No suggestions, you're on your own!</em>
    //             </div>
    //         );
    //     }
    // }

    return (
        <div className="max-w-screen-md mx-auto justify-center text-center">
            <TextInput
                type="text"
                placeholder="Search By Name"
                onChange={e => setSearchTerm(e.target.value)}
            // onKeyDown={onKeyDown}
            />
            {isSearching && <div>Searching...</div>}
            {console.log(results)}
            {
                results.map(result => (
                    <div key={result._id}>
                        <h4>{result.name}</h4>
                    </div>
                ))
            }
            {/* 
            {suggestionsListComponent}
            {suggestions && console.log(suggestions)} */}
        </div>
    );
}
export default ByName;

