const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors'); 
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.post('/new-account', async (req, res) => {
  const { user, type, documentNum, password } = req.body;
  
  try {
    const response = await axios.post('http://localhost:8081/accounts', {
        userName: user,
        AccountType: type,
        documentNumber: documentNum,
        password: password 
    });
    res.json({ msg: 'Nueva cuenta creada con éxito' });
  } catch (error) {
    console.error('Error al crear la cuenta en el servicio del banco:', error);
    res.status(500).json({ error: 'Error al crear la cuenta en el servicio del banco' });
  }
});

app.post('/get-account', async (req, res) => {
  const { documentNum, password } = req.body;
  console.log(documentNum)
  try {
    const response = await axios.get('http://localhost:8081/accounts/' + documentNum);
    res.json({ msg: 'La cuenta existe' });
  } catch (error) {
    console.error('Error al encontrar la cuenta en el servicio del banco:', error);
    res.status(500).json({ error: 'Error al encontrar la cuenta en el servicio del banco' });
  }
});

app.listen(PORT, () => {
  console.log(`BFF on port ${PORT}`);
});
