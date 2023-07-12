const express = require('express');
const app = express();

// Define your routes here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// Serve the React app
app.use(express.static('../client/build'));

// API route for fetching project data
app.get('/api/projects', (req, res) => {
  // Fetch project data from a database or another source
  const projects = [
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2' },
    { id: 3, name: 'Project 3' },
  ];

  res.json(projects);
});

// API route for handling tutorial requests
app.post('/api/tutorial', (req, res) => {
  // Handle tutorial requests
  // You can process the requests and return appropriate responses
  res.json({ message: 'Tutorial request received' });
});
