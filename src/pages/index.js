import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import config from '../../config';
import WorkTimeline from '../components/WorkTimeline';
import CustomizedTimeline from '../components/CustomizedTimeline';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        {/* <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul> */}
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
            education timeline
          </h2>
          <br />
          {/* <OppositeContentTimeline /> */}
          <CustomizedTimeline />
        </header>

        <header className="major">
          <h2
            style={{ color: 'white', marginTop: '7rem', marginBottom: '4rem' }}
          >
            {' '}
            Work experience timeline
          </h2>
          <WorkTimeline />
        </header>
        {/* <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul> */}
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      {/* <h2
        style={{
          color: 'white',
          display: 'flex',
          justifyContent: 'center',

          borderBottom: '1px solid white',
        }}
      >
        {' '}
        Some of my apps and websites
      </h2> */}

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

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Accumsan mus tortor nunc aliquet</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Arcu accumsan</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
