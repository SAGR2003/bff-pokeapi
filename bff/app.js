const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const PORT = 3001;

app.use(express.json());
app.use(cors());
app.post('/get-pokemon', async (req, res) => {
  const { pokemonName } = req.body;

  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemonData = response.data;

    res.json(pokemonData);
  } catch (error) {
    console.error('Error fetching Pokemon data from PokeAPI:', error);

    if (error.response && error.response.status) {
      res.status(error.response.status).json({ error: `Error from PokeAPI: ${error.response.statusText}` });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
