const SponsorMarquee = () => {
  const sponsors = [
    { src: 'https://dorjeteas.com/cdn/shop/t/12/assets/filmfare.png?v=96037557510982678901727180884', width: 100, height: 50, alt: 'filmfare' },
    { src: 'https://dorjeteas.com/cdn/shop/t/12/assets/ny-times.png?v=164553845239927063361727180908', width: 100, height: 50, alt: 'the new york times' },
    { src: 'https://dorjeteas.com/cdn/shop/t/12/assets/shark-tank.png?v=22130100970633715031727180917', width: 60, height: 60, alt: 'shark tank india' },
    { src: 'https://dorjeteas.com/cdn/shop/t/12/assets/the-hindu.webp?v=135666454381222598581727180953', width: 100, height: 50, alt: 'the hindu' },
    { src: 'https://dorjeteas.com/cdn/shop/t/12/assets/the-telegraph.png?v=151253304608265041841727180971', width: 200, height: 50, alt: 'telegraph' },
    { src: 'https://dorjeteas.com/cdn/shop/t/12/assets/lbb.png?v=88727115815771359391727180899', width: 150, height: 50, alt: 'LLB' },
    { src: 'https://dorjeteas.com/cdn/shop/t/12/assets/the-economist.png?v=179933046215115110891727180929', width: 60, height: 60, alt: 'the economist' },
  ];

  return (
    <div className="sponsor-grid">
      {sponsors.map((sponsor, index) => (
        <img 
          key={index}
          src={sponsor.src} 
          alt={sponsor.alt} 
          width={sponsor.width} 
          height={sponsor.height}
          className="sponsor-item"
        />
      ))}
    </div>
  );
};

export default SponsorMarquee;