import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';
import { Search } from './Search';

export function Banner() {
    const [showSearch, setshowSearch] = useState(false);
    const navigate = useNavigate ();

    return (
        <div className='banner'>
            <div className='banner__search' varient="outlined">
                {showSearch && <Search />}
                <Button 
                onClick={() => setshowSearch(!showSearch)} 
                className='banner__searchButton'>{showSearch ? "Hide":"Search Dates"}</Button>
            </div>
            <div className='banner__info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button varient="outlined" onClick={()=>navigate("/search")}>Explore Nearby</Button>
            </div>
        </div>
    );
}
