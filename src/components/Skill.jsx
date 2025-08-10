/**
 * @copyright 2025 thatkint
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: `${import.meta.env.BASE_URL}images/figma.svg`,
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/css3.svg`,
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/javascript.svg`,
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/nodejs.svg`,
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/php.svg`,
    label: 'PHP',
    desc: 'Backend Scripting Language'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/mysql.png`,
    label: 'Mysql',
    desc: 'Database'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/react.svg`,
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/tailwindcss.svg`,
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">
          Essential Tools I use
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
