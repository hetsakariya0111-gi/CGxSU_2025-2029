# 🌌 ParallelU - Your Academic Multiverse Simulator

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![MERN](https://img.shields.io/badge/Stack-MERN-green)
![Version](https://img.shields.io/badge/version-1.0.0-orange)

## 📝 **Problem Statement**
Every student wonders: "What if I had chosen a different subject?" "What if I had started preparing earlier?" ParallelU answers these questions by creating alternate reality versions of each student's academic journey.

## 🎯 **Core Concept**
ParallelU lets students create and explore alternate versions of their academic life based on different decisions they could have made. Completely unprecedented in the ed-tech space!

## 🔐 **Simple Authentication (NO JWT!)**
```javascript
// Using express-session + MongoDB store - Super easy!
npm install express-session connect-mongo

// Session setup (much simpler than JWT)
app.use(session({
  secret: 'parallelu-secret',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/parallelu' }),
  cookie: { maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

// Login is just setting session variables
app.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user && req.body.password === user.password) { // Simple comparison
    req.session.userId = user._id;
    req.session.username = user.name;
    res.json({ success: true });
  }
});

// Check auth anywhere
const requireAuth = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.redirect('/login');
  }
};
aa project banavva mate kai kai dependency install karvi padse and hu su su banavi sakis
