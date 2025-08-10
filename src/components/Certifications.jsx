/**
 * @copyright 2025 thatkint
 * @license Apache-2.0
 */

/**
 * Components
 */
import CertificationCard from "./CertificationCard";

const certifications = [
  {
    imgSrc: "/images/intern-cert.jpg",
    description: "Bicol University - University Regustrar Office Intern"
  },
  {
    imgSrc: "/images/bootcamp.jpg",
    description: "Basic Web Development Workshop"
  },
  {
    imgSrc: "/images/microsoft-office.jpg",
    description: " Microsoft Office Specialist: Excel Associate Certification Training Program"
  },
  {
    imgSrc: "/images/dictV-webinar.jpg",
    description: "Scaling up an IT Startup: Strategies for Growth and Transition organized by the Department of Information and Communications Technology—Camarines Norte, Region 5"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Certifications</h2>

        {/* Only 2 columns per row */}
        <div className="grid gap-x-6 gap-y-8 grid-cols-1 md:grid-cols-2">
        {certifications.map(({ imgSrc, description }, key) => (
            <CertificationCard
            key={key}
            imgSrc={imgSrc}
            description={description}
            />
        ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
