import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-primary">
                <a className="navbar-brand navbar-text" href="#">Google 📚 Search</a>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                </div>
            </nav>

        </div>
    )
}

export default Header;