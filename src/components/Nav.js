import React from 'react';

//Router
import { Link } from 'react-router-dom';

//Styles
import '../styles/navbar.css';

const Nav = () => (
    <div>
        <ul>
            <i className="fab fa-react fa-2x" style={{ float: 'left', padding: '10px', marginLeft: '5px', marginTop: '5px'}}> </i>
            <span style={{ float: 'left', padding: '10px', marginTop: '10px'}}>React-Firebase Admin</span>
            <li><Link to={ process.env.PUBLIC_URL + "/"}>Home</Link></li>
        </ul>
    </div>
);

export default Nav;