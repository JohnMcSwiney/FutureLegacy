import React from 'react';
import { Navigate, useNavigate, Link } from "react-router-dom";
import './style.css';

export default function FL_footer() {
    const navigate = useNavigate();
    const redirectAbout = () => {navigate(`/about`);};
    const redirectApply = () => {navigate(`/apply`);};
    const redirectCollections = () => {navigate(`/BrowseCollections`)};
    const redirectSignIn = () => {navigate(`/login`)};
    return (
    <div className='FL--footer--cont--cont'>
        <div className='FL--footer--content--cont'>
            <div className='FL--footer--box--cont'>
                <h3>Future <strong>Legacy</strong></h3>
                <a onClick={redirectAbout}>About</a>
                <a>The Ledger</a>
                <a>API</a>
                <a>Contact</a>
            </div>


            <div className='FL--footer--box--cont'>
            <h3>Artists</h3>
                <a onClick={redirectApply}>Become an artist</a>
                <a>Create collection</a>
                <a onClick={redirectSignIn}>Log in</a>
                
            </div>
            <div className='FL--footer--box--cont'>
            <h3 onClick={redirectCollections}>Collections</h3>
                <a>Favorite collections</a>
                <a>Featured collections</a>
                <a>Browse by Artist</a>
                <a>Apply to join <strong>Future</strong>Legacy</a>
            </div>
            <div className='FL--footer--box--cont'>
            <h3>Subscribe</h3>
                <a>Educational Subscription</a>
                <a>Premium Subscription</a>
                <a>Enterprise Subscriptions</a>

            </div>
            
        </div>
        <div className='temp--6'>MVP Version 0.0 - Site Designed By <a target='_blank' href="https://github.com/JohnMcSwiney">John McSwiney</a> - November 2023</div>
    </div>
  )
}
