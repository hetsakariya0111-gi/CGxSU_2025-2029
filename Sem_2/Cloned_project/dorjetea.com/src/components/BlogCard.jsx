const BlogCard = ({ image, title, date, author, description }) => {
  return (
    <div className="blog-card">
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-teal-light mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center text-xs text-gray-500 mb-3">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>Written by {author}</span>
        </div>
        <p className="blog-description">
          {description}
        </p>
        <a 
          href="#" 
          className="read-more"
        >
          CONTINUE READING →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;