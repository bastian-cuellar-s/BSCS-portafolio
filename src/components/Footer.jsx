import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> con <i className="fas fa-heart" /> por{" "}
        <a
          rel="noopener"
          href="https://github.com/bastian-cuellar-s"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Bastián Cuellar
          </span>
        </a>{" "}
        usando <i className="fab fa-react" />
      </Container>
    </footer>
  );
};

export default Footer;
