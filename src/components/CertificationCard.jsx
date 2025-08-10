/**
 * @copyright 2025 thatkint
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

const CertificationCard = ({ imgSrc, description, classes }) => {
  return (
    <div
      className={
        "p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
        (classes || "")
      }
    >
      {/* Image */}
      <figure className="img-box aspect-video rounded-lg mb-4">
        <img
          src={imgSrc}
          alt={description}
          loading="lazy"
          className="image-cover"
        />
      </figure>

      {/* Description */}
      <p className="text-zinc-300 text-base">{description}</p>
    </div>
  );
};

CertificationCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  classes: PropTypes.string
};

export default CertificationCard;
