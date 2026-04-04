import SongItem from '../components/SongItem';
import AlbumItem from '../components/AlbumItem';
import PlaylistItem from '../components/PlaylistItem';
import ArtistItem from '../components/ArtistItem';

const NewPage = () => {
  // Sample data arrays
  const latestSongs = [
    { id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHVNBr2EYY8o_rrNqgHFsnXgLzrtR0voozg&s', title: 'My Old Ways', artist: 'Tame Impala', explicit: true },
    { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8XaUTie-7kIHehgT4Xk13UCwCid3rrAlwA&s', title: 'Back Cooking', artist: 'Gucci Mane, OJ da Juiceman', explicit: true },
    { id: 3, image: 'https://hips.hearstapps.com/hmg-prod/images/el-press-photo-credit-caylee-robillard-jpg-68f16ab7731bd.jpg?crop=1.00xw:0.668xh;0,0.127xh&resize=640:*', title: 'Choosin\' Texas', artist: 'Ella Langley', explicit: false },
    { id: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaeSYZhattLv0XeJX4v6qcLLwhMpHtiZtK8w&s', title: 'Delulu', artist: 'Muni Long', explicit: false },
    { id: 5, image: 'https://i.scdn.co/image/ab67616d0000b273789ca9e5059aa52e3559a122', title: 'Cherry', artist: 'King Princess', explicit: true },
    { id: 6, image: 'https://i.scdn.co/image/ab67616d0000b27342449dc8d72faa3e65b147d0', title: 'jackie chan', artist: 'WHATMORE', explicit: false }
  ];

  const newReleases = [
    { id: 1, image: '/src/assets/deadbeat.jpg', title: 'Deadbeat', artist: 'Tame Impala', explicit: true },
    { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZYUH9vuhmfw8JUWEJm_YJh9c1jcVBFSQ28g&s', title: 'From The Pyre', artist: 'The Last Dinner Party', explicit: false },
    { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSGMuviMtbwdub2mBGo2cqqGdIEpJWWpjbw&s', title: 'Episodes', artist: 'Gucci Mane', explicit: true },
    { id: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIqk5pCj0DUKiS9d6-NI6BOi-qo6F6FYCFEA&s', title: 'Smoochies', artist: 'Ashnikko', explicit: true },
    { id: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_7qRnsKPSqfJqLg_-97p1O2CkcTN8mnHaw&s', title: 'One Night Only', artist: 'Gunna', explicit: false }
  ];

  const updatedPlaylists = [
    { id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-OPG9Bso73bmFSLbpLUxzJ-fOa-pGMYBaWw&s', title: 'New Music Daily', source: 'Apple Music' },
    { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwM5HaoQ0bOMF4IVsbal4bPWI6AczGE1VSDQ&s', title: 'Viral Syncs', source: 'Apple Music' },
    { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRZFjEEEWUeexBI1GbqL5q6JPCtj2lHROmOA&s', title: 'A-List Pop', source: 'Apple Music Pop' },
    { id: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzFd9-gaglM7JysAhMvh5PWraIKZyhdVy1zQ&s', title: 'As Heard at the Movies', source: 'Apple Music Film, TV & Stage' },
    { id: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvyEJ2wrcGqi8FZ978atSknBdtHrIHhgDQQ&s', title: 'Alpha', source: 'Apple Music' }
  ];

  const artists = [
    { id: 1, bgColor: 'bg-brown', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdZRIYGtPrrHPdupia4QlQapXYrGOX1cdkg&s', title: 'Track by Track: TWICE on TEN: The Story Goes On', source: 'Apple Music K-Pop' },
    { id: 2, bgColor: 'bg-blue', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBvlJ5hu47SrcnRT0fYW9KwAKL3IwXPsnkwQ&s', title: 'Track by Track: aespa on Rich Man - The 6th Mini Album', source: 'Apple Music K-Pop' },
    { id: 3, bgColor: 'bg-tan theme-light', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXbTqnkOByCcdVUIifOxm3HRhjv2-9Y_p41w&s', title: 'Track by Track: Natalia Lafourcade on Cancionera', source: 'Apple Music Latin' },
    { id: 4, bgColor: 'bg-indigo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgBL-9uTAbcLliGpf3KxTIvvoPKoTT2_4lGw&s', title: 'Track by Track: Stray Kids on KARMA', source: 'Apple Music K-Pop' },
    { id: 5, bgColor: 'bg-orange theme-light', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOCnHuyHXIYLZ-UMRamf_C_s_c6gSSIYWZQ&s', title: 'Track by Track: Kapo on POR SI ALGUIEN NOS ESCUCHA', source: 'Apple Music Latino' }
  ];

  const trendingSongs = [
    { id: 101, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB65hK6jk57JNOVUXa4nDpWQNYva2rrJyQdg&s', title: 'Untitled (How Does It Feel)', artist: 'D\'Angelo', explicit: false },
    { id: 102, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxxYKuOKatUXuRIBJOeKUU0FVcs3qaJ8HNUA&s', title: 'Maui Wowie', artist: 'Kid Cudi', explicit: true },
    { id: 103, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt4RIHYF7OaY4-dJ_WHvEkcUwRVLDwDvy4GQ&s', title: 'Actually Romantic', artist: 'Taylor Swift', explicit: true },
    { id: 104, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5uLaoSEhBxu4gDE2I2kxHj-agbO4W_7vokA&s', title: 'Folded', artist: 'Kehlani', explicit: false },
    { id: 105, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzgso-zho4CVbuc-ovQN9jMFwqvU1SG6Fp0A&s', title: 'When Did You Get Hot?', artist: 'Sabrina Carpenter', explicit: false },
    { id: 106, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO2HfyH4eIkiJUyXp02-iP4pMj2lkfg1JWIg&s', title: 'TIT FOR TAT', artist: 'Tate McRae', explicit: true }
  ];

  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">New</h1>
      </div>

      {/* Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-[#2a2a2a] rounded-xl overflow-hidden">
          <div className="p-5">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">UPDATED PLAYLIST</h4>
            <h2 className="text-2xl font-bold text-white mt-1">New Music Daily</h2>
            <h3 className="text-xl text-gray-400 font-medium mb-4">Apple Music</h3>
          </div>
          <div className="relative aspect-[4/3]">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-OPG9Bso73bmFSLbpLUxzJ-fOa-pGMYBaWw&s" 
              alt="New Music Daily Playlist" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
              <p className="text-white text-sm">
                Kevin Parker is back into "My Old Ways" on Tame Impala's latest.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#2a2a2a] rounded-xl overflow-hidden">
          <div className="p-5">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">NEW ALBUM</h4>
            <h2 className="text-2xl font-bold text-white mt-1">Deadbeat</h2>
            <h3 className="text-xl text-gray-400 font-medium mb-4">Tame Impala</h3>
          </div>
          <div className="relative aspect-[4/3]">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZYUH9vuhmfw8JUWEJm_YJh9c1jcVBFSQ28g&s" 
              alt="Deadbeat Album" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
              <p className="text-white text-sm">
                The Aussie psych auteur completes his journey from lock to rave.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Songs */}
      <div>
        <div className="flex items-center mb-5">
          <h2 className="text-2xl md:text-3xl font-semibold cursor-pointer hover:underline">Latest Songs</h2>
          <span className="text-4xl font-light text-gray-500 ml-2">›</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestSongs.map(song => (
            <SongItem key={song.id} {...song} />
          ))}
        </div>
      </div>

      {/* New Releases */}
      <div>
        <div className="flex items-center mb-5">
          <h2 className="text-2xl md:text-3xl font-semibold cursor-pointer hover:underline">New Releases</h2>
          <span className="text-4xl font-light text-gray-500 ml-2">›</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {newReleases.map(album => (
            <AlbumItem key={album.id} {...album} />
          ))}
        </div>
      </div>

      {/* Updated Playlists */}
      <div>
        <div className="flex items-center mb-5">
          <h2 className="text-2xl md:text-3xl font-semibold cursor-pointer hover:underline">Updated Playlists</h2>
          <span className="text-4xl font-light text-gray-500 ml-2">›</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {updatedPlaylists.map(playlist => (
            <PlaylistItem key={playlist.id} {...playlist} />
          ))}
        </div>
      </div>

      {/* Artists Section */}
      <div>
        <div className="flex items-center mb-5">
          <h2 className="text-2xl md:text-3xl font-semibold cursor-pointer hover:underline">Artists in Their Own Words</h2>
          <span className="text-4xl font-light text-gray-500 ml-2">›</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {artists.map(artist => (
            <ArtistItem key={artist.id} {...artist} />
          ))}
        </div>
      </div>

      {/* Trending Songs */}
      <div>
        <div className="flex items-center mb-5">
          <h2 className="text-2xl md:text-3xl font-semibold cursor-pointer hover:underline">Trending Songs</h2>
          <span className="text-4xl font-light text-gray-500 ml-2">›</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingSongs.map(song => (
            <SongItem key={song.id} {...song} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewPage;