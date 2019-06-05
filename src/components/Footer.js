import React from 'react';
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <Container>
        <div>2019 <i className="fa fa-copyright"></i> Pau Berengueras. Made in Barcelona with <i className="fa fa-heart"></i></div>
      </Container>
    </footer>
  );
};

export default Footer;
