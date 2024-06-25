import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if the user has already accepted cookies
        const cookieConsent = Cookies.get('cookieConsent');
        if (!cookieConsent) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        // Set a cookie to remember the user's consent
        Cookies.set('cookieConsent', 'true', { expires: 365 });
        setShowBanner(false);
    };

    if (!showBanner) {
        return null;
    }
  
    const rejectCookies = () => {
      alert('I cookies sono necessari per il funzionamento del sito');
      // Handle rejection logic here (optional)

    };
  
    return (
        <div className={`cookie-banner ${showBanner ? 'show' : ''}`}>
        <p>Utilizziamo i cookie per garantirti la migliore esperienza sul nostro sito. <Link to='/cookie-policy'>Scopri di più</Link></p>
        <div className="cookie-buttons">
          <button className="cookie-button" onClick={handleAccept}>Accetta</button>
          <button className="cookie-button" onClick={rejectCookies}>Rifiuta</button>
        </div>
      </div>
    );
  };
  
  export default CookieBanner;
