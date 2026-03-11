import BlogCard from '../components/BlogCard';

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      image: 'https://dorjeteas.com/cdn/shop/articles/And_when_thou_art_weary_I_ll_find_thee_a_bed_Of_mosses_and_flowers_to_pillow_thy_head_John_Keats.jpg?v=1757818523&width=767',
      title: 'Careful and Precious Whispers',
      date: 'SEPTEMBER 14, 2025',
      author: 'Roma Agarwal',
      description: '"Slimy? Oh, you poor blind souls," she laughed softly. "This is no ordinary patch. This is the Persian rug of the earth, woven without loom, softer than velvet steeped in dreams. Try it."'
    },
    {
      id: 2,
      image: 'https://dorjeteas.com/cdn/shop/articles/trees_remember_clouds_listen_and_the_earth_holds_stories_longer_than_men._What_we_do_with_our_intent_is_what_becomes_the_next_katha..jpg?v=1757215067&width=767',
      title: 'Karma and Katha',
      date: 'SEPTEMBER 7, 2025',
      author: 'Roma Agarwal',
      description: 'But the man scoffed. With a puff from his pipe and the stroke of a saw, the sacred tree came crashing down. A foreboding silence followed...'
    },
    {
      id: 3,
      image: 'https://dorjeteas.com/cdn/shop/articles/The_shelves_had_layers_books_behind_books_books_under_books_books_above_books_books_beside_books..jpg?v=1756609476&width=767',
      title: 'TIME at Blossoms',
      date: 'AUGUST 31, 2025',
      author: 'Roma Agarwal',
      description: 'The shelves had layers — books behind books, books under books, books above books. It was like pulling out a brick in the wall, only to uncover a hidden vault of your subconscious.'
    },
    {
      id: 4,
      image: 'https://dorjeteas.com/cdn/shop/articles/Untitled_design.jpg?v=1756016988&width=767',
      title: 'The Art of Conversation',
      date: 'SEPTEMBER 14, 2025',
      author: 'Roma Agarwal',
      description: '"Slimy? Oh, you poor blind souls," she laughed softly. "This is no ordinary patch. This is the Persian rug of the earth, woven without loom, softer than velvet steeped in dreams. Try it."'
    },
    {
      id: 5,
      image: 'https://dorjeteas.com/cdn/shop/articles/Trust_in_dreams_for_in_them_is_hidden_the_gate_to_eternity.jpg?v=1755408193&width=767',
      title: 'The Logic of the Illogical',
      date: 'SEPTEMBER 7, 2025',
      author: 'Roma Agarwal',
      description: 'But the man scoffed. With a puff from his pipe and the stroke of a saw, the sacred tree came crashing down. A foreboding silence followed...'
    },
    {
      id: 6,
      image: 'https://dorjeteas.com/cdn/shop/articles/The_waves_of_the_mountains_at_Selim_Hill_Tea_Estate_52.jpg?v=1712458892&width=767',
      title: '𝐖𝐡𝐞𝐧 𝐋𝐢𝐠𝐡𝐭𝐧𝐢𝐧𝐠 𝐒𝐭𝐫𝐢𝐤𝐞𝐬',
      date: 'AUGUST 31, 2025',
      author: 'Roma Agarwal',
      description: 'The shelves had layers — books behind books, books under books, books above books. It was like pulling out a brick in the wall, only to uncover a hidden vault of your subconscious.'
    },
    {
      id: 7,
      image: 'https://dorjeteas.com/cdn/shop/articles/The_waves_of_the_mountains_at_Selim_Hill_Tea_Estate_51.jpg?v=1712221852&width=767',
      title: 'Ask Kishore',
      date: 'AUGUST 24, 2025',
      author: 'Roma Agarwal',
      description: 'One of my fondest childhood memories is falling asleep to the gentle hum of conversation. No, no……'
    },
    {
      id: 8,
      image: 'https://dorjeteas.com/cdn/shop/articles/The_waves_of_the_mountains_at_Selim_Hill_Tea_Estate_23.png?v=1711249777&width=767',
      title: 'A Forest Fire',
      date: 'AUGUST 17, 2025',
      author: 'Roma Agarwal',
      description: 'What is a pond without water? A journey without a destination? Summer without mangoes? A funera...'
    },
    {
      id: 9,
      image: 'https://dorjeteas.com/cdn/shop/articles/The_waves_of_the_mountains_at_Selim_Hill_Tea_Estate_22.png?v=1710233944&width=767',
      title: 'Not Guilty',
      date: 'APRIL 7, 2024',
      author: 'Dorje Editor',
      description: 'Mrs. Chaitea Sarkaar: (Chuckles) Well, it seems lightning\'s got quite the reputation around here. But you trees? You\'ve all got your own unique way of handling it...'
    },
    {
      id: 10,
      image: 'https://dorjeteas.com/cdn/shop/articles/New-Zealand-Huntaway-900x500_png.webp?v=1709433626&width=767',
      title: 'Careful and Precious Whispers',
      date: 'SEPTEMBER 14, 2025',
      author: 'Roma Agarwal',
      description: '"Slimy? Oh, you poor blind souls," she laughed softly. "This is no ordinary patch. This is the Persian rug of the earth, woven without loom, softer than velvet steeped in dreams. Try it."'
    },
    {
      id: 11,
      image: 'https://dorjeteas.com/cdn/shop/articles/The_waves_of_the_mountains_at_Selim_Hill_Tea_Estate_20.png?v=1708503800&width=767',
      title: 'Karma and Katha',
      date: 'SEPTEMBER 7, 2025',
      author: 'Roma Agarwal',
      description: 'But the man scoffed. With a puff from his pipe and the stroke of a saw, the sacred tree came crashing down. A foreboding silence followed...'
    },
    {
      id: 12,
      image: 'https://dorjeteas.com/cdn/shop/articles/The_waves_of_the_mountains_at_Selim_Hill_Tea_Estate_21.png?v=1708943314&width=767',
      title: 'TIME at Blossoms',
      date: 'AUGUST 31, 2025',
      author: 'Roma Agarwal',
      description: 'The shelves had layers — books behind books, books under books, books above books. It was like pulling out a brick in the wall, only to uncover a hidden vault of your subconscious.'
    },
    {
      id: 13,
      image: 'https://dorjeteas.com/cdn/shop/articles/The_waves_of_the_mountains_at_Selim_Hill_Tea_Estate_17.png?v=1707619572&width=767',
      title: 'The Art of Conversation',
      date: 'AUGUST 24, 2025',
      author: 'Roma Agarwal',
      description: 'One of my fondest childhood memories is falling asleep to the gentle hum of conversation. No, no……'
    },
    {
      id: 14,
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1000&q=60',
      title: 'The Logic of the Illogical',
      date: 'AUGUST 17, 2025',
      author: 'Roma Agarwal',
      description: 'What is a pond without water? A journey without a destination? Summer without mangoes? A funera...'
    },
    {
      id: 15,
      image: 'https://dorjeteas.com/cdn/shop/articles/The_waves_of_the_mountains_at_Selim_Hill_Tea_Estate_16.png?v=1707112721&width=767',
      title: 'When Lightning Strikes',
      date: 'APRIL 7, 2024',
      author: 'Dorje Editor',
      description: 'Mrs. Chaitea Sarkaar: (Chuckles) Well, it seems lightning\'s got quite the reputation around here. But you trees? You\'ve all got your own unique way of handling it...'
    },
    {
      id: 16,
      image: 'https://dorjeteas.com/cdn/shop/articles/The_waves_of_the_mountains_at_Selim_Hill_Tea_Estate_15.png?v=1706442113&width=767',
      title: 'Infinite Lives',
      date: 'FEBRUARY 11, 2024',
      author: 'Dorje Editor',
      description: 'The warm interior clashed delightfully with the chilly air outside, causing the windows to fog up. And what did I do with those foggy windows?...'
    },
    {
      id: 17,
      image: 'https://dorjeteas.com/cdn/shop/articles/The_waves_of_the_mountains_at_Selim_Hill_Tea_Estate_12.png?v=1705327112&width=767',
      title: 'Storm in a Tea Cup',
      date: 'FEBRUARY 5, 2024',
      author: 'Dorje Editor',
      description: 'Mrs Chaitea Sarkaar, with her sharp instincts, took charge of the crime scene. The tempest in a teapot had taken on a darker meaning — a clue that something sinister had occurred.'
    },
    {
      id: 18,
      image: 'https://dorjeteas.com/cdn/shop/articles/The_waves_of_the_mountains_at_Selim_Hill_Tea_Estate_13.png?v=1705836787&width=767',
      title: 'House on Fire',
      date: 'JANUARY 21, 2024',
      author: 'Dorje Editor',
      description: 'The new year began very interestingly. Going through many layers of warmth and discovery, we found courage hidden beneath ashes of routine.'
    }
  ];

  return (
    <div className="bg-cream min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-teal-light text-xl font-semibold tracking-wider mb-3">OUR BLOG</h2>
        <h1 className="text-center text-teal-light text-4xl md:text-5xl font-bold mb-6">Dorje Mail</h1>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-sm leading-relaxed px-4">
          Treat this as a Dispatch from Darjeeling. Here you will find tales about your teas,
          fables about the tea estate, legends about its birds, trees, and animals, and stories
          about the people who work so hard to prepare it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;