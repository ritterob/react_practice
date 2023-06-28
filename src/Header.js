import React, { useState } from 'react';

export default function Header(props) {
    const [toggleNav, setToggleNav] = useState(false);
    const handleContentChange = (content) => {
        props.setShowContent(content);
        setToggleNav(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <header>
            <nav className='navbar navbar-expand-lg'>
                <button className='navbar-brand' onClick={() => handleContentChange('Profile')}>
                    React Practice
                </button>

                <button className='menuToggle' onClick={() => setToggleNav(true)}>
                    <div className='hamburger-outer'>
                        <div className='hamburger-inner'></div>
                        <div className='hamburger-inner'></div>
                        <div className='hamburger-inner'></div>
                    </div>
                </button>

                {toggleNav && (
                    <div className='menu'>
                        <button className='close-menu' onClick={() => setToggleNav(false)}>
                            &times;
                        </button>
                        <ul>
                            <li onClick={() => handleContentChange('Profile')}>Profile</li>
                            <li onClick={() => handleContentChange('Projects')}>Projects</li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}
