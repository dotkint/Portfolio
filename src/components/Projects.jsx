/**
 * @copyright 2025 thatkint
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "./ProjectCard";


    const projects = [
    {
        imgSrc: '/images/4.png',
        title: 'Chat Application',
        tags: ['Networking', 'Chat'],
        projectLink: 'https://group1-bsit2b-it114-chatapplication-nxrt.onrender.com'
    },
    {
        imgSrc: '/images/5.png',
        title: 'Dunkin Inventory System',
        tags: ['Java', 'Web-Development']
    },
    {
        imgSrc: '/images/6.png',
        title: 'DATOS: A Web-Based Digitization System',
        tags: ['Web-Dev', 'Digitization System'],
        projectLink: 'https://datos.bicol-u.cloud/'
    },
    {
        imgSrc: '/images/7.png',
        title: 'Bicol University Student Archiving System',
        tags: ['Laravel', 'Web-development']
    },
    {
        imgSrc: '/images/8.png',
        title: 'E-Commerce website',
        tags: ['eCommerce', 'Hi-Fi Prototype']
    },
    {
        imgSrc: '/images/project-6.jpg',
        title: 'Personal portfolio',
        tags: ['Web-design', 'Development']
    },
    ];



const Projects = () => {
    return (
        <section id="projects"
        className="section">

            <div className="container">

                <h2 className="headline-2 mb-8 reveal-up">
                    My Projects Highlights
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {projects.map(({imgSrc, title, tags, projectLink}, key) => (
                     <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                     />

                    ))

                    }
                </div>

            </div>

        </section>
    )

}

export default Projects