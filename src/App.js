import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';

export default function App() {
    const [showContent, setShowContent] = useState('Profile');
    return (
        <div className='site-container'>
            <Header setShowContent={setShowContent} />
            {showContent === 'Profile' && <Profile />}
            {showContent === 'Projects' && <Projects />}
        </div>
    );
}
