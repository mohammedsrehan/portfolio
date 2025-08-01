import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.landing}>
        <nav className={styles.nav}>
          <a href="#projects">Projects</a>
          <a href="#About">About </a>
          <a href="#Contact">Contact</a>
        </nav>
        <div className={styles.hero}>
          <h2 className={styles.header_text}>
            Hi, I'm <span className={styles.span_color}>Salman </span>
          </h2>
          <h1 className={styles.sub_Title}>
            Software Engineer | Front-End Developer
          </h1>
          <p className={styles.header_sentence}>
            Transforming Designs into Responsive & Immersive Experiences
          </p>
          <div className={styles.button_container}>
            <button className={styles.button}>
              <a href="#projects">Projects</a>
            </button>
            <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className={styles.button}>Resume</button>
            </a>
          </div>
          <div className={styles.socials}>
            <a href="https://github.com/mohammedsrehan/" target="_blank" className={styles.social_link}>
              <Image src="/github.png" alt="GitHub" width={24} height={24} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mohammed-salmanuddin-rehan/" target="_blank" className={styles.social_link}>
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
              Linkedin
            </a>
          </div>
        </div>
      </section>
      <section className={styles.projects} id="projects">
        <h2 className={styles.project_header_text}>Projects</h2>
        <p className={styles.projects_subtitle}>
          Discover the projects that highlight my skills and passion for
          developing
        </p>
        <div className={styles.projects_list}>
          <div className={styles.project_item}>
            <Image
              src="/ieee.png"
              alt="IEEE Student Branch Website"
              width={300}
              height={200}
            />

            <div className={styles.project_description}>
              <h3 className={styles.span_color}>IEEE Student Branch Website</h3>
              <div className={styles.project_links}>
                <a
                  href="https://ieee-website-2-0-9w3r8coz9-mohammedrehan275.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &#128279; Live Site
                </a>
                <a
                  href="https://github.com/ieeensakcet/ieee-website-2.0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &#128279; Source Code
                </a>
              </div>
              <p>
                A dynamic, multi-functional website built for the IEEE Student
                Branch at Nawab Shah Alam Khan College of Engineering and
                Technology, designed to manage events, engage students, and
                provide an interactive experience.
              </p>
              <ul className={styles.project_features}>
                <li>
                  <strong>Key Features:</strong>
                </li>
                <li>
                  Event Management System: Developed a full-fledged event system
                  where users can view, register, and review past and upcoming
                  events.
                </li>
                <li>
                  Admin Panel: Created a secure admin dashboard to manage events,
                  members, content, and feedback — with role-based access.
                </li>
                <li>
                  Multi-Language Support: Implemented language translation using
                  i18n, allowing the site to be viewed in multiple languages for
                  wider accessibility.
                </li>
                <li>
                  Event Scheduling with Cloud Functions: Used Firebase Cloud
                  Functions to automate event announcements based on scheduled
                  dates.
                </li>
                <li>
                  Chatbot Integration: Integrated a chatbot to answer frequently
                  asked questions about IEEE, events, and joining instructions.
                </li>
                <li>
                  Responsive Design: Built a fully responsive and
                  mobile-friendly UI to ensure a smooth experience across
                  devices.
                </li>
              </ul>
              <div className={styles.project_technologies}>
                <Image src="/js.png" alt="javascript" width={24} height={24} />
                <Image src="/nextjs.svg" alt="Next.js" width={24} height={24} />
                <Image src="/github.png" alt="Git" width={24} height={24} />
                <Image
                  src="/materialUI.png"
                  alt="Material UI"
                  width={24}
                  height={24}
                />
                <Image
                  src="/redux.svg"
                  alt="Redux Toolkit"
                  width={24}
                  height={24}
                />
                <Image
                  src="/firebase.svg"
                  alt="Firebase"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className={styles.project_item}>
            <Image
              src="/cov-19.png"
              alt="Cov-19 Updated with Live News Feed"
              width={300}
              height={200}
            />
            <div className={styles.project_description}>
              <h3 className={styles.span_color}>
                Covid-19 Updates with Live News Feed
              </h3>
              <div className={styles.project_links}>
                <a
                  href="https://github.com/mohammedsrehan/cov-19-updates"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &#128279; Source Code
                </a>
              </div>
              <p>
                Built a real-time global COVID tracker with interactive map
                visualizations, searchable data tables, and a live news section.
                Integrated multiple APIs and developed dynamic front-end
                features for improved data exploration.
              </p>
              <ul className={styles.project_features}>
                <li>
                  <strong>Key Features:</strong>
                </li>
                <li>
                  Integrated Real-Time COVID-19 APIs to fetch live case counts
                  and news data
                </li>
                <li>
                  Implemented Interactive Map using like Leaflet to show dynamic
                  case data per country
                </li>
                <li>
                  Added Live News Section by integrating a secondary API to
                  display latest global news related to COVID-19
                </li>
              </ul>
              <div className={styles.project_technologies}>
                <Image src="/js.png" alt="JavaScript" width={24} height={24} />
                <Image src="/react.png" alt="react.js" width={24} height={24} />
                <Image src="/github.png" alt="Git" width={24} height={24} />
                <Image
                  src="/materialUI.png"
                  alt="Material UI"
                  width={24}
                  height={24}
                />
                <Image
                  src="/firebase.svg"
                  alt="Firebase"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className={styles.project_item}>
            <Image
              src="/ecommerce.png"
              alt="Bismillah Collection"
              width={300}
              height={200}
            />
            <div className={styles.project_description}>
              <h3 className={styles.span_color}>
                  E-commerce Website (Bismillah Collection)
              </h3>
              <div className={styles.project_links}>
                <a
                  href="https://bismillahcollection.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &#128279; Live Site
                </a>
                <a
                  href="https://github.com/mohammedsrehan/clothing_brand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &#128279; Source Code
                </a>
              </div>
              <p>
                Developed a modern, responsive e-commerce platform for
                "Bismillah Collection". The primary goal was to establish a
                strong online presence, facilitate direct-to-consumer sales, and
                provide an intuitive, engaging shopping experience for
                customers.
              </p>
              <ul className={styles.project_features}>
                <li>
                  <strong>Key Features:</strong>
                </li>
                <li>
                  Developed a responsive e-commerce platform for Bismillah
                  Collection to expand their online presence, streamline sales,
                  and enhance customer shopping experience
                </li>
                <li>
                  Added features such as dynamic product listings and user
                  authentication.
                </li>
                <li>
                  Built a secure admin panel for "Bismillah Collection" staff to
                  manage product inventory, process orders, and update content.
                </li>
              </ul>
              <div className={styles.project_technologies}>
                <Image
                  src="/ts_logo.svg"
                  alt="TypeScript"
                  width={24}
                  height={24}
                />
                <Image src="/nextjs.svg" alt="Next.js" width={24} height={24} />
                <Image src="/github.png" alt="Git" width={24} height={24} />
                <Image
                  src="/materialUI.png"
                  alt="Material UI"
                  width={24}
                  height={24}
                />
                <Image
                  src="/firebase.svg"
                  alt="Firebase"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className={styles.project_item}>
            <Image
              src="/reminder.png"
              alt="Reminder Web Application"
              width={300}
              height={200}
            />
            <div className={styles.project_description}>
              <h3 className={styles.span_color}>Reminder Web Application</h3>
              <div className={styles.project_links}>
                <a
                  href="https://github.com/mohammedsrehan/reminder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &#128279; Source Code
                </a>
              </div>
              <p>
                I developed this lightweight web application to address the
                common challenge of forgotten tasks and missed appointments,
                aiming to boost personal and team productivity. My core
                objective was to create a simple, intuitive platform for users
                to schedule timely reminders, initially focusing on email
                notifications with a clear path for future SMS integration.
              </p>
              <ul className={styles.project_features}>
                <li>
                  <strong>Key Features:</strong>
                </li>
                <li>
                  Lets users easily set up reminders by entering the recipient,
                  message, and time
                </li>
                <li>
                  Automatically sends reminders at the right time using
                  background functions
                </li>
                <li>
                  Shows all scheduled reminders in a clean, organized dashboard
                </li>
                <li>
                  Provides instant feedback when fields are missing or inputs
                  are invalid
                </li>
              </ul>
              <div className={styles.project_technologies}>
                <Image src="/js.png" alt="JavaScript" width={24} height={24} />
                <Image src="/react.png" alt="React" width={24} height={24} />
                <Image src="/nextjs.svg" alt="Next.js" width={24} height={24} />
                <Image src="/github.png" alt="Github" width={24} height={24} />
                <Image
                  src="/firebase.svg"
                  alt="Firebase"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.opensource}>
        <h2 className={styles.opensource_header_text}>
          Open Source Contributions
        </h2>
        <div className={styles.project_item}>
          <Image
            src="/frontend_pro.png"
            alt="Frontend Pro"
            width={300}
            height={200}
          />
          <div className={styles.project_description}>
            <h3 className={styles.span_color}>Frontend Pro</h3>
            <div className={styles.project_links}>
              <a
                href="https://github.com/mohammedsrehan/coding-space"
                target="_blank"
                rel="noopener noreferrer"
              >
                &#128279; Source Code
              </a>
            </div>
            <p>
              Frontend Pro (formerly "Coding Space") is the platform where the
              platform aim to provide lots of different real-world UI-based
              challenges that can help developers to improve their web and
              mobile development skills.
            </p>
            <ul className={styles.project_features}>
              <li>
                <strong>Key Features:</strong>
              </li>
              <li>
                I have contributed to the Frontend Pro project, by adding
                responsiveness to the website.
              </li>
              <li>
                Reduced layout bugs and visual overflow issues on small screens
              </li>
              <li>
                Improved mobile usability with adaptive layouts and media
                queries
              </li>
            </ul>
            <div className={styles.project_technologies}>
              <Image
                src="/ts_logo.svg"
                alt="Typescript"
                width={24}
                height={24}
              />
              <Image src="/github.png" alt="Git" width={24} height={24} />
              <Image
                src="/tailwind.svg"
                alt="Tailwind CSS"
                width={24}
                height={24}
              />
              <Image src="/react.png" alt="React" width={24} height={24} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.about} id="About">
        <h2 className={styles.about_header_text}>
          <span className={styles.span_color}>About Me </span>
        </h2>
        <p className={styles.about_text}>
          Computer Science Engineer with competencies in web development and
          cloud computing, with hands on experience in designing and developing
          websites and. Possess experience in 5+ programming languages,
          particularly skilled in JavaScript, React and Python. Pursuing a
          Master's in Computer Science.
        </p>
        <div className={styles.skills}>
          <h3 className={styles.skills_header}>Technologies</h3>
          <ul className={styles.skills_list}>
            <li className={styles.skill_item}>
              <Image src="/js.png" alt="JavaScript" width={24} height={24} />
              JavaScript
            </li>
            <li className={styles.skill_item}>
              <Image
                src="/ts_logo.svg"
                alt="TypeScript"
                width={24}
                height={24}
              />
              TypeScript
            </li>
            <li className={styles.skill_item}>
              <Image src="/react.png" alt="React" width={24} height={24} />
              React
            </li>
            <li className={styles.skill_item}>
              <Image src="/nextjs.svg" alt="Next.js" width={24} height={24} />
              Next.js
            </li>
            <li className={styles.skill_item}>
              <Image src="/github.png" alt="Git" width={24} height={24} />
              Git
            </li>
            <li className={styles.skill_item}>
              <Image
                src="/programing.png"
                alt="Node.js"
                width={24}
                height={24}
              />
              Node.js
            </li>
            <li className={styles.skill_item}>
              <Image src="/python.png" alt="python" width={24} height={24} />
              Python
            </li>
            <li className={styles.skill_item}>
              <Image
                src="/materialUI.png"
                alt="Material UI"
                width={24}
                height={24}
              />
              Material UI
            </li>
            <li className={styles.skill_item}>
              <Image
                src="/redux.svg"
                alt="Redux Toolkit"
                width={24}
                height={24}
              />
              Redux Toolkit
            </li>
            <li className={styles.skill_item}>
              <Image
                src="/firebase.svg"
                alt="Firebase"
                width={24}
                height={24}
              />
              Firebase
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.contact} id="Contact">
        <h2 className={styles.contact_header_text}>
          <span className={styles.span_color}>Get in touch </span>
        </h2>
        <p className={styles.contact_text}>
          Reach me out on Linkedin or GitHub, or send me an email at
        </p>
        <div className={styles.contact_socials}>
          <a href="mailto:rehan@gmail.com" className={styles.social_link}>
            <Image src="/gmail.svg" alt="Email" width={24} height={24} />
            mdsalmanurehan@gmail.com
          </a>
          <a
            href="https://github.com/mohammedsrehan"
            target="_blank"
            className={styles.social_link}
          >
            <Image src="/github.png" alt="GitHub" width={24} height={24} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-salmanuddin-rehan/"
            target="_blank"
            className={styles.social_link}
          >
            <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
            Linkedin
          </a>
        </div>
      </section>
      <footer className={styles.footer}>
        <p className={styles.footer_text}>
          &copy; {new Date().getFullYear()} Designed and Developed by Salman.
          All rights reserved.
        </p>
      </footer>
    </div>
  );
}
