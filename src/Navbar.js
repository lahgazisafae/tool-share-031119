import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){

    return (

        <div class="ui three item menu">
            <Link to="/home" class="item">Home</Link>
            <Link to="/about_us" class="item">About Us</Link>
            <Link to="/new_tool" class="item active">Add New Tool</Link>
        </div>

    )

}

export default Navbar;