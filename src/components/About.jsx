/**
 * @copyright 2025 thatkint
 * @license Apache-2.0
 */


const aboutItems = [
  {
    label: 'Project done',
    number:5
  },
  {
    label: 'Years of experience',
    number: 0
  }
];


const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Welcome! I’m Kent, a passionate frontend developer with a creative edge. I specialize in building visually engaging and user-friendly websites, while also bringing design ideas to life through thoughtful graphic work. My goal is to create digital experiences that look great and perform seamlessly.
                    </p>

                    <div className="flex flex-wrap items-center gap-5 md:gap-8">
                        {
                            aboutItems.map(({ label, number}, key) => (
                               <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-bold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl"></span>
                                    </div>

                                    <p className="">{label}</p>
                                </div>
                                ))   
                        }

                        <img 
                        src={`${import.meta.env.BASE_URL} images/logo.png`} 
                        alt="logo"
                        width={30}
                        height={30} 
                        className="ml-auto md:w-[40px] md:h-[40px]"/>

                    </div>
                </div>

            </div>


        </section>
    )
}

export default About