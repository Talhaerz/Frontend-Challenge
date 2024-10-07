import { InputAdornment, InputBase } from "@mui/material";
import React from "react";
import SearchIcon from "../assets/search-icon.svg";


const MiniSearchBar = ({searchQuery, setSearchQuery}) =>{

    return(
        <InputBase
        sx={{
            marginLeft:'10px',
            borderRadius:'15px',
            border:'none',
            outline:'none',
            backgroundColor:'#282828',
            color:'#ffffff',
            
        }}
        placeholder="Search playlists"
        startAdornment= {(
            <InputAdornment position="start">
                <img src={SearchIcon} alt="Search" style={{width:"16px", marginLeft:"10px", height:"16px"}} />
            </InputAdornment>
        )}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        />
    );
};

export default MiniSearchBar;