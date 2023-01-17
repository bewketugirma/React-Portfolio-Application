import React from 'react'
import { useRef,useState,useEffect } from 'react';
import Typed from "typed.js";
export default function Main(){
    const el = useRef(null);
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [
          "Full stack developer",
          "Front-end developer",
          "AI engineer",
        ],
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        loop: true,
      });
  
      // Destroying
      return () => {
        typed.destroy();
      };
    }, []);




    return(
        <>
{/* <!-- ======= Mobile nav toggle button ======= --> */}
  <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

  {/* <!-- ======= Header ======= --> */}
  <header id="header">
    <div  className="d-flex flex-column">

      <div className="profile">
        <img src="./assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle"/>
        <h1 className="text-light"><a href="index.html">Girma Bewketu</a></h1>
        <div className="social-links mt-3 text-center">
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      
        </div>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
          <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav>
      {/* <!-- .nav-menu --> */}
    </div>
  </header>
  {/* <!-- End Header --> */}
  <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
  <div className="hero-container" dataAos="fade-in">

    <h1>Girma Bewketu</h1>
    <p>I'm <span className="typed" ref={el}></span>{""}</p>
  </div>
</section>
{/* // <!-- End Hero --> */}

<main id="main">

  {/* <!-- ======= About Section ======= --> */}
  <section id="about" className="about">
    <div className="container">

      <div className="section-title">
        <h2>About</h2>
        <p>Hello! My name is Girma and I enjoy creating things that live on the internet. My interest in software development started back in 2016 when I decided to try building android apps</p>
      </div>

      <div className="row">
        <div className="col-lg-4" dataAos="fade-right">
          <img src="assets/img/profile-img.jpg" className="img-fluid" alt=""/>
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" dataAos="fade-left">
          <h3>Software Developer &amp; AI Engineer.</h3>
         
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.ethioprogrammers.com</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+251 935 493 051</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Addis Abeba, Ethiopia</span></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>bewketugirma@gmail.com</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
              </ul>
            </div>
          </div>
        
        </div>
      </div>

    </div>
  </section>
  {/* <!-- End About Section --> */}

  
  {/* <!-- ======= Skills Section ======= --> */}
  <section id="skills" className="skills section-bg">
    <div className="container">

      <div className="section-title">
        <h2>Skills</h2>
        </div>

      <div className="row skills-content">

        <div className="col-lg-6" dataAos="fade-up">

          <div className="progress">
            <span className="skill">HTML <i className="val">100%</i></span>
            <div className="progress-bar-wrap">
              <div style={{width: '100%'}} className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">CSS <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div style={{width: '100%'}} className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
            </div>
          </div>
          <div className="progress">
            <span className="skill">Java <i className="val">95%</i></span>
            <div className="progress-bar-wrap">
              <div style={{width: '100%'}} className="progress-bar" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">JavaScript <i className="val">85%</i></span>
            <div className="progress-bar-wrap">
              <div style={{width: '100%'}} className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
            </div>
          </div>
          <div className="progress">
            <span className="skill">Python(Django) <i className="val">95%</i></span>
            <div className="progress-bar-wrap">
              <div style={{width: '100%'}} className="progress-bar" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
            </div>
          </div>
           <div className="progress">
            <span className="skill">Node <i className="val">85%</i></span>
            <div className="progress-bar-wrap">
              <div style={{width: '100%'}} className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
            </div>
          </div>
            <div className="progress">
            <span className="skill">NestJs <i className="val">95%</i></span>
            <div className="progress-bar-wrap">
              <div style={{width: '100%'}} className="progress-bar" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
            </div>
          </div>

        </div>

        <div className="col-lg-6" dataAos="fade-up" dataAosDelay="100">

          <div className="progress">
            <span className="skill">PHP <i className="val">95%</i></span>
            <div className="progress-bar-wrap">
              <div style={{width: '100%'}} className="progress-bar" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">Joomla/CMS <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div style={{width: '100%'}} className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">React <i className="val">95%</i></span>
            <div className="progress-bar-wrap">
              <div style={{width: '100%'}} className="progress-bar" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
            </div>

          </div>
          <div className="progress">
            <span className="skill">C# <i className="val">95%</i></span>
            <div className="progress-bar-wrap">
              <div style={{width: '100%'}} className="progress-bar" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
            </div>
            
          </div>
          <div className="progress">
            <span className="skill">Flutter <i className="val">85%</i></span>
            <div className="progress-bar-wrap">
              <div style={{width: '100%'}} className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
            </div>
            
          </div>

        </div>

      </div>

    </div>
  </section>
  {/* <!-- End Skills Section --> */}

  {/* <!-- ======= Resume Section ======= --> */}
  <section id="resume" className="resume">
    <div className="container">
             
      <div className="section-title">
        <h2>Resume</h2>
      </div>

      <div className="row">
        <div className="col-lg-6" dataAos="fade-up">
          <h3 className="resume-title">Summary</h3>
          <div className="resume-item pb-0">
            <h4>Girma Bewketu</h4>
            <p><em>Innovative and deadline-driven software developer with 2+ years of experience designing and developing user-centered software products for the mobile,desktop and the web from initial concept to final, polished deliverable.</em></p>
            <ul>
              <li>6kilo,Addis Abeba, Ethiopia</li>
              <li>(251) 935-493051</li>
              <li>bewketugirma@gmail.com</li>
            </ul>
          </div>

          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>Master of Computer Science</h4>
            <h5>2020 - 2021</h5>
            <p><em>Bahir Dar Institute of Technology, Bahir Dar, Ethiopia</em></p>
           
          </div>
          <div className="resume-item">
            <h4>Bachelor of Computer Science</h4>
            <h5>2014 - 2017</h5>
            <p><em>Arba Minch Institute of Technology, Arba Minch, Ethiopia</em></p>
            
          </div>
          <h3 className="resume-title">Projects</h3>
          <div className="resume-item">
            <p><em>E-learning system</em></p>
           <p><em>Land management system</em></p>
           <p><em>Data annotation platform for android</em></p>
           <p><em>Android based Text books</em></p>
           <p><em>Zumardi vedio conference platform</em></p>
           <p><em>Machine translation system</em></p>
           <p><em>Chatbot for telebirr service</em></p>
           <p><em>Exam scheduling system</em></p>
          </div>
         
        </div>
        <div className="col-lg-6" dataAos="fade-up" dataAosDelay="100">
          <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <h4>AI Developer</h4>
            <h5>2018 - 2019</h5>
            <p><em>iCog Labs, Addis Abeba, Ethiopia </em></p>
            <ul>
              <li>I were a member of the team in the project called "Emotion recognition from speech"</li>
              <li>Employed Deep learning algorithms to develop a speech recognition model</li>
              <li>Tested a Speech emotion recognition model on a raspberry pi based robot</li>
            </ul>
          </div>
           <div className="resume-item">
            <h4>Fullstack developer</h4>
            <h5>2022-2023</h5>
            <p><em>Maxbridge Education and Developmenty S.C,Addis Abeba,Ethiopia</em></p>
            <ul>
              <li>Developed an elearning system.</li>
              <li>Used React and Node frameworks</li>
              <li>Deployed the system on local network</li>
              </ul>
          </div>
           <div className="resume-item">
            <h4>AI engineer and backend developer</h4>
            <h5>2022-2023</h5>
            <p><em>United states of Africa(USA) Black health matters,nairobi, kenya</em></p>
            <ul>
              <li>Team member of the project "zumardi vedio conferencing platform"</li>
              <li>Developed a speech recognition system for amharic.</li>
              <li>Used python and Django frameworks</li>
              
              </ul>
          </div>
          <div className="resume-item">
            <h4>Website developer</h4>
            <h5>12-2019-05-2020</h5>
            <p><em>Freelance</em></p>
            <ul>
              <li>Developed Three websites for personal business.</li>
              <li>Used React and Tailwind css frameworks</li>
              <li>Deployed websites on firebase</li>
              </ul>
          </div>
          <div className="resume-item">
            <h4>Fullstack developer</h4>
            <h5>2020-06-2020</h5>
            <p><em>Private business</em></p>
            <ul>
              <li>Developed a land administration system for a city.</li>
              <li>Used Html, Php and bootstrap frameworks</li>
              <li>Deployed the system on local network</li>
              </ul>
          </div>
         
        </div>
      </div>

    </div>
  </section>
  {/* <!-- End Resume Section --> */}

 
  {/* <!-- ======= Services Section ======= --> */}
  <section id="services" className="services">
    <div className="container">

      <div className="section-title">
        <h2>Services</h2>
        <p>We provide different services in the IT world.The following are some of services every one can get easily.</p>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6 icon-box" dataAos="fade-up">
          <div className="icon"><i className="bi bi-briefcase"></i></div>
          <h4 className="title"><a href="">Project Work</a></h4>
          <p className="description">We do software projects for Mobile,Desktop and the Web</p>
        </div>
        <div className="col-lg-4 col-md-6 icon-box" dataAos="fade-up" dataAosDelay="100">
          <div className="icon"><i className="bi bi-card-checklist"></i></div>
          <h4 className="title"><a href="">Research</a></h4>
          <p className="description">We do Researchs in the areas of Artificial Intelligence, Computer Science, Software Engineering,Information Technology and Information Science</p>
        </div>
       
        <div className="col-lg-4 col-md-6 icon-box" dataAos="fade-up" dataAosDelay="300">
          <div className="icon"><i className="bi bi-binoculars"></i></div>
          <h4 className="title"><a href="">Trainings</a></h4>
          <p className="description">We give short term trainings of programming languages and software development for our customers both physically and virtually.</p>
        </div>
        
       
      </div>

    </div>
  </section>
  {/* <!-- End Services Section --> */}


  {/* <!-- ======= Contact Section ======= --> */}
  <section id="contact" className="contact">
    <div className="container">

      <div className="section-title">
        <h2>Contact</h2>
        <p>Every one who wants to get contact for our services can use the following addresses. You are wellcome with your ideas and we'll be happy to solve your problems with our technologies. Contact us soon,so that we'll make you effective developer with our programming tutorials.</p>
      </div>

      <div className="row" dataAos="fade-in">

        <div className="col-lg-5 d-flex align-items-stretch">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>6kilo,Addis Abeba, Ethiopia</p>
            </div>

            <div className="email">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>bewketugirma@gmail.com</p>
            </div>

            <div className="phone">
              <i className="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>(251) 935-493051</p>
            </div>

            <iframe src="https://maps.google.com/maps?q=addis%20abeba%206%20kilo&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" style={{border:0, width: "100%", height: "290px"}} allowfullscreen></iframe>
          </div>

        </div>

        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="form-group col-md-6">
                <label for="name">Your Name</label>
                <input type="text" name="name" className="form-control" id="name" required/>
              </div>
              <div className="form-group col-md-6">
                <label for="name">Your Email</label>
                <input type="email" className="form-control" name="email" id="email" required/>
              </div>
            </div>
            <div className="form-group">
              <label for="name">Subject</label>
              <input type="text" className="form-control" name="subject" id="subject" required/>
            </div>
            <div className="form-group">
              <label for="name">Message</label>
              <textarea className="form-control" name="message" rows="10" required></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>

      </div>

    </div>
  </section>
  {/* <!-- End Contact Section --> */}

</main>
{/* <!-- End #main --> */}

{/* <!-- ======= Footer ======= --> */}
<footer id="footer">
  <div className="container">
    <div className="copyright">
      &copy; Copyright <strong><span>Girma Bewketu</span></strong>
    </div>
    <div className="credits">
      
      Designed by <a href="#">Girma Bewketu</a>
    </div>
  </div>
</footer>
{/* <!-- End  Footer --> */}

        </>
            );

}