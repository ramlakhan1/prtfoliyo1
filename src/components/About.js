import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Typed from 'react-typed';

import {FaLinkedin, FaGithub} from 'react-icons/fa';

const About = () => {


  return (
  <section style={styles.about} className="flex-column">
			<div style={styles.profileImg}></div>
			<div style={styles.details}>
				<h2 style={styles.title} className="font-weight-bold">Hi, I'm Ram Lakhan Singh.<br />
        <Typed className="font-weight-light"
          strings={['I eat react', 'I sleep with react', 'I solve your problems.']}
          backSpeed={70} typeSpeed={60} backDelay={1000}
          /></h2>
			</div>
			<div><a className="my-button" href="mailto:pt2867000@gmail.com">Get In Touch</a></div>

			<div className="text-center mt-4">
				<a href="https://github.com/ramlakhan1">
          <FaGithub size="28"/>
        </a>
				<a href="https://www.linkedin.com/in/ram-lakhan-singh-61a924200/">
          <FaLinkedin size="28"/>
        </a>
			</div>

		</section>
  )
}

var styles = {

  about: {
    marginTop: '10em',
		border: '1px solid #eee',
		backgroundColor: 'white',
		paddingBottom: '1em',
    textAlign: 'center'
  },
  profileImg: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/profile.jpg)`,
    width: '200px',
    height: '200px',
    margin: '0 auto',
    borderRadius: '50%',
    backgroundSize: 'cover',
    marginTop: '-100px',
    marginBottom: '40px'
  },
  details: {
    margin: '0',
    marginTop: '-2em'
  },
  title: {
    color: '#646464',
		fontSize: '3.8em',
		paddingBottom: '1em'
  }
}

export default About;
