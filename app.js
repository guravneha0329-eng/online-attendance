echo "const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Online Attendance Backend Running 🚀');
});

const PORT = 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
" > app.js
