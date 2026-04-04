const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with cart, payment integration, and admin dashboard. Built with modern technologies for optimal performance.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "JWT"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com",
    featured: true,
    stats: {
      commits: 250,
      stars: 45,
      contributors: 3
    }
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app with drag-and-drop functionality, real-time updates, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w-600&q=80",
    technologies: ["React", "Firebase", "Material-UI", "Framer Motion", "Context API"],
    github: "https://github.com/yourusername/taskapp",
    demo: "https://taskapp-demo.com",
    featured: true,
    stats: {
      commits: 180,
      stars: 32,
      contributors: 2
    }
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather application with 7-day forecasts, location-based services, and interactive charts.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    technologies: ["JavaScript", "OpenWeather API", "CSS3", "Chart.js", "Geolocation API"],
    github: "https://github.com/yourusername/weather",
    demo: "https://weather-demo.com",
    featured: false,
    stats: {
      commits: 120,
      stars: 28,
      contributors: 1
    }
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media platforms with real-time data visualization and reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    technologies: ["React", "D3.js", "Express", "PostgreSQL", "Socket.io"],
    github: "https://github.com/yourusername/social-dashboard",
    demo: "https://social-dashboard-demo.com",
    featured: true,
    stats: {
      commits: 300,
      stars: 56,
      contributors: 4
    }
  },
  {
    id: 5,
    title: "Recipe Finder App",
    description: "Mobile-first recipe application with ingredient search, dietary filters, and meal planning features.",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    technologies: ["React Native", "Spoonacular API", "Redux Toolkit", "AsyncStorage"],
    github: "https://github.com/yourusername/recipe-app",
    demo: "https://recipeapp-demo.com",
    featured: false,
    stats: {
      commits: 150,
      stars: 24,
      contributors: 2
    }
  },
  {
    id: 6,
    title: "Portfolio Builder",
    description: "Drag-and-drop portfolio builder for developers to create and customize their portfolios easily.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    technologies: ["Next.js", "Tailwind CSS", "Drag & Drop API", "Firebase"],
    github: "https://github.com/yourusername/portfolio-builder",
    demo: "https://portfoliobuilder-demo.com",
    featured: true,
    stats: {
      commits: 220,
      stars: 38,
      contributors: 3
    }
  }
];

export default projects;