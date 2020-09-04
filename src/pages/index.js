import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import EmailIcon from '@material-ui/icons/Email';
import pic1 from '../assets/images/pic01.webp';
import pic2 from '../assets/images/pic02.webp';
import pic3 from '../assets/images/pic03.webp';
import pic4 from '../assets/images/pic04.webp';
import pic5 from '../assets/images/pic05.webp';
import config from '../../config';
import WorkTimeline from '../components/WorkTimeline';
import CustomizedTimeline from '../components/CustomizedTimeline';
import Contact from '../components/Contact';
import SimpleTimeline from '../components/SimpleTimeline';
import StarIcon from '@material-ui/icons/Star';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Know More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            A few words about me
            <br />
          </h2>
          <p>
            I am Ajay, I am a final year student of computer engineering. I
            started programming when I was 16 years old and fell in love with it
            ever since. I have worked in my family business as a web developer
            for last 8 years, in those times I worked on plenty of web designing
            project to propel my passion for full stack web development. I have
            been learning AI from past 1 year and love making projects on it.
          </p>
        </header>
        <header className="major">
          <h2 style={{ color: 'white', marginBottom: '4rem' }}>
            {' '}
            Education and Work experience timeline
          </h2>
          <br />

          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#101820FF', color: '#fff' }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(33, 150, 243)',
              }}
              date="2021(Expected)"
              iconStyle={{ background: '#101820FF', color: '#fff' }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">BE | SPPU</h3>

              <p>
                Pursuing BE in Computer Engineering from Alard College of
                Engineering, Pune. Currently in final year scored 8.48 SGPA in
                third year.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#101820FF', color: '#fff' }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(33, 150, 243)',
              }}
              date="August 2020 - Present"
              iconStyle={{ background: '#FEE715FF', color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Junior Engineer Intern
              </h3>

              <p>
                Started working at MoPharma Digital Solutions Pvt Limited as an
                intern.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#101820FF', color: '#fff' }}
              date="2017"
              iconStyle={{ background: '#101820FF', color: '#fff' }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Diploma | MSBTE
              </h3>
              <p>
                Completed diploma in Computer Engineering from Y.B. Patil
                Polytechnic, Akurdi. Scored 74.13% aggregate.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#101820FF', color: '#fff' }}
              date="2013"
              iconStyle={{ background: '#101820FF', color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                High School | SSC
              </h3>

              <p>
                Completed high school from SNBP International School in SSC
                board. Scored 78.55%.
              </p>
            </VerticalTimelineElement>
            {/* <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<StarIcon />}
            /> */}
          </VerticalTimeline>

          {/* <CustomizedTimeline /> */}
        </header>
        {/* 
        <header className="major">
          <h2
            style={{ color: 'white', marginTop: '7rem', marginBottom: '4rem' }}
          >
            {' '}
            Work experience timeline
          </h2>
          <WorkTimeline />
        </header> */}

        <header className="major">
          <h2
            style={{ color: 'white', marginTop: '7rem', marginBottom: '4rem' }}
          >
            {' '}
            My Skills
          </h2>
          <div className="skills">
            <div className="particularSkill">
              <h2>Frontend development</h2>
              <br />
              <p>HTML, CSS, JavaScript, jQuery, React.js, Gatsby.js</p>
            </div>

            <div className="particularSkill">
              <h2>Backend development</h2>
              <br />
              <p>
                Node.js, Express.js, Django,Php
                <br />
              </p>
            </div>

            <div className="particularSkill">
              <h2>Database</h2>
              <br />
              <p>
                MySQL, PostgreSQL, MangoDB
                <br />
              </p>
            </div>

            <div className="particularSkill">
              <h2>Programming Languages</h2>
              <br />
              <p>
                C, C++, Java, JavaScript, Python, Php
                <br />
              </p>
            </div>

            <div className="particularSkill">
              <h2>Graphics Designing</h2>
              <br />
              <p>
                Adobe Illustrator, Adobe Photoshop, Figma, Gimp
                <br />
              </p>
            </div>
          </div>
        </header>

        <a href="#" className="button primary">
          Download Resume
        </a>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <header
        className="major"
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          paddingTop: '4rem',
        }}
      >
        <h2>Some of my projects and websites</h2>
      </header>

      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>Personal portfolio website</h2>
          <p>
            This website is designed using React.js and Gatsby.js with
            MaterialUI
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              height: '3em',
            }}
          >
            <a
              href="https://github.com/ajayjarhad/portfolio-v1/"
              className="button primary"
            >
              Source
            </a>
          </div>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>Face detection AI full stack website</h2>
          <p>
            The app is designed using React.js with Redux as a frontend
            framework with Node.js and Express.js as backend. It uses PostgreSQL
            to manage users.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              height: '2.7rem',
            }}
          >
            <a
              href="https://face-recongnition-ai.herokuapp.com/"
              className="button primary"
              style={{ marginTop: '-1em' }}
            >
              Demo
            </a>
            <a
              href="https://github.com/ajayjarhad/face_recognition_ai/"
              className="button primary"
              style={{ marginTop: '-1em' }}
            >
              Source
            </a>
          </div>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>Global Covid-19 tracker</h2>
          <p>
            The web app uses React.js with Hooks and MaterialUI and Chart.js
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              height: '2.7rem',
            }}
          >
            <a
              href="https://covid-19-tracker-reactjs.herokuapp.com/"
              className="button primary"
              style={{ marginTop: '-1em' }}
            >
              Demo
            </a>
            <a
              href="https://github.com/ajayjarhad/covid-19-tracker/"
              className="button primary"
              style={{ marginTop: '-1em' }}
            >
              Source
            </a>
          </div>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic4} alt="" />
        </div>
        <div className="content">
          <h2>Techni Kalash's Website</h2>
          <p>The website uses HTML,CSS,JS and Bootstrap 4</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              height: '3em',
            }}
          >
            <a href="http://technikalash.com/" className="button primary">
              Demo
            </a>
          </div>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic5} alt="" />
        </div>
        <div className="content">
          <h2>Trading In Zones's Website</h2>
          <p>The website uses Wordpress</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              height: '3em',
            }}
          >
            <a href="http://tradinginzones.com/" className="button primary">
              Demo
            </a>
          </div>
        </div>
      </section>
    </section>

    <section className="contact">
      <header
        className="major"
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <h2>Get in touch</h2>
      </header>
      <div className="form">
        <Contact />
      </div>
      <div className="personal">
        <PhoneInTalkIcon />{' '}
        <a
          href="tel:+9195034 84682"
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          +91-9503484682
        </a>{' '}
        <br />
        <br />
        <EmailIcon />{' '}
        <a href="mailto:ajayjarhad1@gmail.com">ajayjarhad1@gmail.com</a>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
