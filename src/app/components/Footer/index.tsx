" use client"
/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import styles from './footer.module.scss'

// assets
import Logo from '../../../../public/logo.svg'

const Footer = () => {
    return (
        <footer className={styles.footer} id='contact-us'>
            <div className={styles.footerTop}>
                <Container>
                    <Row className={`${styles.row} justify-space-between`}>
                        <Col>
                            <Logo />
{/*                             <p >
                                Devatha Plaza 606, 6th Floor, Field Marshal Cariappa Rd, Shanthala
                                Nagar, Ashok Nagar, Bengaluru, Karnataka 560025
                            </p> */}
                        </Col>
                        <Col >
                            <h5>Contact Details</h5>
                            <p>Aaron D'cruz</p>
                            <p>+91-9036100018</p>
                            <p> <Link href="mailto:aaron@bluebot.in"> aaron@bluebot.in </Link></p>
                        </Col>
                        <Col>
                            <h5 >Connect with us</h5>
                            <div className={styles.socialMenu}>
                                <Link href="http://www.youtube.com/@ArtificialLabsAI" target="blank"><FontAwesomeIcon icon={faYoutube} className="fa-fw" /></Link>
                                <Link href="https://www.instagram.com/artificiallabs.in/" target="blank"><FontAwesomeIcon icon={faInstagram} className="fa-fw" /></Link>
                                <Link href="https://www.linkedin.com/company/artificial-labs/" target="blank"><FontAwesomeIcon icon={faLinkedin} className="fa-fw" /></Link>
                                <Link href="#" target="blank"><FontAwesomeIcon icon={faXtwitter} className="fa-fw" /></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={styles.footerBottom}>
                <Container>
                    &copy; <span id="cYear"></span>
                    <span>Artifical Labs. All rights reserved.</span>
                </Container>
            </div>
        </footer>
    )
}

export default Footer
