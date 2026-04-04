const MissionCard = ({ image, title, description }) => {
  return (
    <div className="mission-card">
      <img src={image} alt={title} />
      <div className="mission-card-content">
        <hr className="bold-line" />
        <h3>
          {title}
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 20 20" fill="#16273D">
            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06" clipRule="evenodd" />
          </svg>
        </h3>
        <hr />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MissionCard;