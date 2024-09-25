import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if the user has already acknowledged the use of essential cookies
        const cookieConsent = Cookies.get('cookieConsent');
        if (!cookieConsent) {
            setShowBanner(true);
        }
    }, []);

    const handleAcknowledge = () => {
        // Set a cookie to remember the user's acknowledgment
        Cookies.set('cookieConsent', 'acknowledged', { expires: 365 });
        setShowBanner(false);
    };

    if (!showBanner) {
        return null;
    }

    return (
        <div className="cookie-banner">
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <p>
                            Questo sito utilizza solo cookie essenziali per garantire il corretto funzionamento. 
                            Non utilizziamo cookie di tracciamento o di terze parti.{' '}
                            <Link to='/cookie-policy' style={{ color: 'black', textDecoration: 'underline' }}>
                                Scopri di più
                            </Link>.
                        </p>
                    </Col>
                    <Col xs={12} md={4} className="text-md-right">
                        <Button variant="primary" className="cookie-button" onClick={handleAcknowledge}>
                            OK
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CookieBanner;
