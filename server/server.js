const express = require('express');
const app = express();
const recipeRoutes = require('./routes/recipeRoutes');
const PORT = 3000;

app.use(express.json());
app.use('/api', recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
