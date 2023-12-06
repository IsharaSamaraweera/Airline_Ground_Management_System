const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let users = [
  { id: 1, username: 'admin', password: 'admin@123', name: 'Admin User', role: 'Admin' },
  { id: 2, username: 'agent', password: 'agent@123', name: 'Agent User', role: 'Terminal User/Agent' },
  { id: 3, username: 'passenger', password: 'passenger@123', name: 'Passenger User', role: 'Passenger' },
];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  users = users.map(user => (user.id === +id ? updatedUser : user));
  res.json(updatedUser);
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id !== +id);
  res.json({ message: 'User deleted successfully' });
}); 

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
