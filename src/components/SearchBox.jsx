import React from "react";
const SearchBox = (props) => {
    return (
        <div className="input">
            <input 
                type="text" 
                placeholder="Type to search..." 
                className="bg-stone-100 text-stone-900 py-2 px-3 outline-0 rounded-md" 
                value={props.value}
                onChange={(e) => (props.setValue(e.target.value))}
                />
        </div>
    )
}
export default SearchBox;
