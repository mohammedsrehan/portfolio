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
          <h2 className={styles.header_text}>Hi, I'm <span className={styles.span_color}>Salman </span></h2>
          <h1 className={styles.sub_Title}>
            Software Engineer | Front-End Developer
          </h1>
          <p className={styles.header_sentence}>
            Transforming Designs into Responsive & Immersive Experiences
          </p>
          <div className={styles.button_container}>
            <button className={styles.button}>Projects</button>
            <button className={styles.button}>Resume</button>
          </div>
          <div className={styles.socials}>
            <a href="/github" target="_blank" className={styles.social_link}>
              <Image src="/github.png" alt="GitHub" width={24} height={24} />
              GitHub
            </a>
            <a href="/linkedin" target="_blank" className={styles.social_link}>
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
              src="/bg_image.png"
              alt="Project 1"
              width={300}
              height={200}
            />
            <div className={styles.project_description}>
              <h3>
                <span className={styles.span_color}>Project 1</span>
              </h3>
              <p>
                Description of project 1. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Libero voluptas dignissimos unde
                pariatur maiores cum facilis autem consequuntur fugit atque!
              </p>
              <div className={styles.project_technologies}>
                <Image src="/github.png" alt="React" width={24} height={24} />
                <Image src="/github.png" alt="Next.js" width={24} height={24} />
                <Image
                  src="/github.png"
                  alt="Tailwind CSS"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className={styles.project_item}>
            <Image
              src="/bg_image.png"
              alt="Project 1"
              width={300}
              height={200}
            />
            <div className={styles.project_description}>
              <h3>
                <span className={styles.span_color}>Project 1</span>
              </h3>
              <p>
                Description of project 1. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Libero voluptas dignissimos unde
                pariatur maiores cum facilis autem consequuntur fugit atque!
              </p>
              <div className={styles.project_technologies}>
                <Image src="/github.png" alt="React" width={24} height={24} />
                <Image src="/github.png" alt="Next.js" width={24} height={24} />
                <Image
                  src="/github.png"
                  alt="Tailwind CSS"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className={styles.project_item}>
            <Image
              src="/bg_image.png"
              alt="Project 1"
              width={300}
              height={200}
            />
            <div className={styles.project_description}>
              <h3>
                <span className={styles.span_color}>Project 1</span>
              </h3>
              <p>
                Description of project 1. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Libero voluptas dignissimos unde
                pariatur maiores cum facilis autem consequuntur fugit atque!
              </p>
              <div className={styles.project_technologies}>
                <Image src="/github.png" alt="React" width={24} height={24} />
                <Image src="/github.png" alt="Next.js" width={24} height={24} />
                <Image
                  src="/github.png"
                  alt="Tailwind CSS"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
          
        </div>
      </section>
      <section className={styles.about} id="About">
        <h2 className={styles.about_header_text}>
          <span className={styles.span_color}>About Me </span>
        </h2>
        <p className={styles.about_text}>
          I am a passionate software engineer with a focus on front-end
          development. I love creating responsive and immersive user experiences
          using modern web technologies. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Obcaecati impedit nostrum dolore cum hic maiores
          nihil fugit, ab nisi et sed quo doloremque illo possimus asperiores ut
          deleniti blanditiis molestias velit, numquam deserunt ullam. Nulla
          voluptates aspernatur beatae eum? Ullam eum aspernatur veritatis porro
          praesentium! Tempora voluptatibus molestiae atque nulla expedita nam
          laudantium ratione numquam tempore! Fuga nemo aliquam quas incidunt
          cum, quae culpa adipisci? Rem magnam, minima excepturi soluta,
          temporibus labore expedita ut dolor vero similique doloribus eligendi.
          Magni esse assumenda error dolore! Necessitatibus, deleniti
          perferendis obcaecati rem perspiciatis culpa distinctio non tempora?
          Repellat doloribus inventore temporibus magnam illum?
        </p>
        <div className={styles.skills}>
          <h3 className={styles.skills_header}>Technologies</h3>
          <ul className={styles.skills_list}>
            <li className={styles.skill_item}>
              <Image
                src="/github.png"
                alt="JavaScript"
                width={24}
                height={24}
              />
              JavaScript
            </li>
            <li className={styles.skill_item}>
              <Image src="/github.png" alt="React" width={24} height={24} />
              React
            </li>
            <li className={styles.skill_item}>
              <Image src="/github.png" alt="Next.js" width={24} height={24} />
              Next.js
            </li>
            <li className={styles.skill_item}>
              <Image
                src="/github.png"
                alt="Tailwind CSS"
                width={24}
                height={24}
              />
              Tailwind CSS
            </li>
            <li className={styles.skill_item}>
              <Image src="/github.png" alt="Node.js" width={24} height={24} />
              Node.js
            </li>
            <li className={styles.skill_item}>
              <Image
                src="/github.png"
                alt="Express.js"
                width={24}
                height={24}
              />
              Express.js
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
            <Image src="/github.png" alt="Email" width={24} height={24} />
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
          &copy; {new Date().getFullYear()} Designed and Developed by Salman. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
