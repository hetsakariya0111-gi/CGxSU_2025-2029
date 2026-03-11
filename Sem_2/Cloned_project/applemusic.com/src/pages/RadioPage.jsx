const RadioPage = () => {
  const stations = [
    { 
      id: 1, 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUmoCjYlwBy4UahDRUDth5yAW0ibgspq4ddA&s', 
      name: 'Apple Music 1', 
      color: '#fa2d48' 
    },
    { 
      id: 2, 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbJSxjvBdT77j8Qt1BvAVeH-HJt8coOj2MA&s', 
      name: 'Apple Music Hits', 
      color: '#007aff' 
    },
    { 
      id: 3, 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9UK4oxV6IbCdYZ-2i-tSDzCbnROzQC6aYw&s', 
      name: 'Apple Music Country', 
      color: '#ff9500' 
    },
    { 
      id: 4, 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNEeHt3W092GdLqAOuFfVlvuJpIfDQIH06Qg&s', 
      name: 'Apple Música Uno', 
      color: '#ff2d55' 
    },
    { 
      id: 5, 
      image: 'https://cdn-profiles.tunein.com/s345726/images/logog.png?t=2', 
      name: 'Apple Music Club', 
      color: '#5856d6' 
    },
    { 
      id: 6, 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZpmjCfUhVI9IrfF8w9qwX6aXP9Komn0fwYw&s', 
      name: 'Apple Music Chill', 
      color: '#5ac8fa' 
    }
  ];

  const episodes = [
    { 
      id: 1, 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFDQRWBuXMWcRu_nkqg8NlcpGRIgE2IwciFQ&s', 
      title: 'Soundclash BTS', 
      subtitle: 'Dotty relives the best of Soundclash 2025.' 
    },
    { 
      id: 2, 
      logo: 'https://i1.sndcdn.com/artworks-102WGy29YcBUj9yf-QodTZA-t500x500.png', 
      title: 'Episode 705', 
      subtitle: 'A D\'Angelo Tribute by Joe Kay & Sahar Habibi.' 
    },
    { 
      id: 3, 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ0srKgtyl2VA-ATzChAjaew8dPZ-X_0zDWg&s', 
      title: 'Mobb Deep Mix', 
      subtitle: 'A special mix to celebrate the Queensbridge rap duo.' 
    },
    { 
      id: 4, 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5yPQ65oBj1mk2l5IA41sPQpZuL9aGyZkKw&s', 
      title: 'Monday Mixtape: Tame Impala 2.0', 
      subtitle: 'Deadbeat selections and Kevin Parker collaborations.' 
    },
    { 
      id: 5, 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfgRp430NnQLyeBwW1GcAVwqZl2c1rohKHxw&s', 
      title: 'Sam Fender', 
      subtitle: 'Sam and Elton John talk about their collab "Talk to You."' 
    },
    { 
      id: 6, 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQYOhmFAkP3euNeEX9i3baQORJagBTu27Qw&s', 
      title: '100 años de Celia Cruz', 
      subtitle: 'A tribute to the Queen of Salsa.' 
    }
  ];

  const interviews = [
    { 
      id: 1, 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD8HRU_vjj8yvI2w3RYh4HzpnIdMrX59w7gA&s', 
      title: 'Chappell Roan chats to Zane Lowe', 
      duration: '9 min 38 sec' 
    },
    { 
      id: 2, 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwadAkOZx-ELgqz-ITxBq4w0c_-sZvCg4h1A&s', 
      title: 'Elton John\'s Rocket Hour with Gia Ford', 
      duration: '5 min 23 sec' 
    },
    { 
      id: 3, 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRntqvKljbHANryPn3WAohFOp8b6sDewNlQ&s', 
      title: 'Elton John and Brandi Carlile on "Swing for the Fences"', 
      duration: '4 min 54 sec' 
    },
    { 
      id: 4, 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_xBPHj6UYB6_fl_HpgdoIshsDIx4jXokPSA&s', 
      title: 'Elton John\'s Rocket Hour with Humble the Great', 
      duration: '4 min 33 sec' 
    }
  ];

  const localBroadcasters = [
    { 
      id: 1, 
      logo: 'https://is1-ssl.mzstatic.com/image/thumb/Features1/v4/8d/68/9b/8d689be3-7727-5395-9de0-2c6c157c3f2b/pr_source.png/1200x630wp-60.jpg', 
      title: 'NPR News and Culture', 
      subtitle: 'Stories that inform, inspire, and entertain.', 
      logoClass: 'npr' 
    },
    { 
      id: 2, 
      logo: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d0/55/8e/d0558ef2-84ed-22d4-8345-96548495ae3f/WorldDetails9417930474545197193.png/1200x630bf-60.jpg', 
      title: 'Z100', 
      subtitle: 'iHeartRadio' 
    },
    { 
      id: 3, 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82pBjQ9pK3dJBCxPBTP2kSALO_aU3WfQXZw&s', 
      title: 'V101.1', 
      subtitle: 'iHeartRadio' 
    },
    { 
      id: 4, 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFcOpOU6CxtJfIL63vXpo2itC8icwBNzgrA&s', 
      title: '102.7 KIIS-FM Los Angeles', 
      subtitle: 'iHeartRadio' 
    },
    { 
      id: 5, 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS6ageCXuudYV-DT8McfajemtylNPjcd-gfg&s', 
      title: 'Rock 95.5', 
      subtitle: 'iHeartRadio' 
    },
    { 
      id: 6, 
      logo: 'https://i.iheart.com/v3/re/assets.brands/5955442a52e033394f67a9f3', 
      title: '1035 KTU', 
      subtitle: 'iHeartRadio' 
    }
  ];

  const internationalBroadcasters = [
    { 
      id: 1, 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIO7RzeLDl_bd9LCdoFkMwduMRfXwRP75LnA&s', 
      title: 'BBC Radio 1', 
      subtitle: 'TuneIn', 
      logoClass: 'logo-black' 
    },
    { 
      id: 2, 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnG4IEGw1RYhpdEuxeqEo_CYDsWw6pObaoVw&s', 
      title: 'ONE FM 91.3', 
      subtitle: 'TuneIn', 
      logoClass: 'logo-white' 
    },
    { 
      id: 3, 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZyoLp2IuJ2g47K0Spgm81gCL8eaW9PcK6EA&s', 
      title: 'Radio Capital', 
      subtitle: 'TuneIn', 
      logoClass: 'logo-white' 
    },
    { 
      id: 4, 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlRdO6fPq8bfLGhiRBz_upGYuXo2DSZQN9Q&s', 
      title: 'Smooth FM 95.3', 
      subtitle: 'TuneIn', 
      logoClass: 'logo-white' 
    },
    { 
      id: 5, 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0RV2mW978uImbhrGRy9VHGJRP--hslpO3JA&s', 
      title: 'BBC Radio 2', 
      subtitle: 'TuneIn', 
      logoClass: 'logo-black' 
    },
    { 
      id: 6, 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6CaTJL4d5Qv9GnnvqpcSk2E33drp3950LMw&s', 
      title: 'Radio Comercial', 
      subtitle: 'TuneIn', 
      logoClass: 'logo-white' 
    }
  ];

  return (
    <div className="space-y-8 pb-8">
      <h1 className="text-3xl font-bold">Radio</h1>
      <h2 className="text-xl font-semibold text-gray-400">On Air Now</h2>

      {/* Station Grid - FIXED: Now showing actual station cards instead of numbers */}
      <div className="station-grid">
        {stations.map(station => (
          <a href="#" key={station.id} className="station-card">
            <img src={station.image} alt={station.name} className="w-full object-contain" />
            <div className="station-label">
              <span className="apple-logo"></span>Music <span style={{ color: station.color }}>Radio</span>
            </div>
          </a>
        ))}
      </div>

      {/* Subscribe to Play Episodes */}
      <div className="episodes-section">
        <a href="#" className="section-title">Subscribe to Play Episodes ›</a>
        
        <div className="broadcasters-grid">
          {episodes.map(episode => (
            <div key={episode.id} className="station-item">
              <img src={episode.logo} alt={episode.title} className="station-logo" />
              <div className="station-details">
                <h3 className="station-title">{episode.title}</h3>
                <p className="station-subtitle">{episode.subtitle}</p>
              </div>
              <div className="station-more">…</div>
            </div>
          ))}
        </div>
      </div>

      {/* Watch Interviews */}
      <div className="interviews-section">
        <a href="#" className="section-title">Watch Interviews for Free ›</a>
        <div className="interviews-row">
          {interviews.map(interview => (
            <div key={interview.id} className="interview-card">
              <img src={interview.image} alt={interview.title} className="card-thumbnail" />
              <h3 className="interview-card-title">{interview.title}</h3>
              <p className="interview-card-duration">{interview.duration}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Local Broadcasters */}
      <div className="broadcasters-section">
        <a href="#" className="section-title">Local Broadcasters ›</a>
        <div className="broadcasters-grid">
          {localBroadcasters.map(broadcaster => (
            <div key={broadcaster.id} className="station-item">
              <img 
                src={broadcaster.logo} 
                alt={broadcaster.title} 
                className={`station-logo ${broadcaster.logoClass || ''}`} 
              />
              <div className="station-details">
                <h3 className="station-title">{broadcaster.title}</h3>
                <p className="station-subtitle">{broadcaster.subtitle}</p>
              </div>
              <div className="station-more">…</div>
            </div>
          ))}
        </div>
      </div>

      {/* International Broadcasters */}
      <div className="broadcasters-section">
        <a href="#" className="section-title">International Broadcasters ›</a>
        <div className="broadcasters-grid">
          {internationalBroadcasters.map(broadcaster => (
            <div key={broadcaster.id} className="station-item">
              <img 
                src={broadcaster.logo} 
                alt={broadcaster.title} 
                className={`station-logo ${broadcaster.logoClass || ''}`} 
              />
              <div className="station-details">
                <h3 className="station-title">{broadcaster.title}</h3>
                <p className="station-subtitle">{broadcaster.subtitle}</p>
              </div>
              <div className="station-more">…</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RadioPage;