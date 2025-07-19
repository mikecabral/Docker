```javascript
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/configs', (req, res) => {
    res.status(200).send({
        'configs': '📝',
        'types': ['normal', 'integer'],
        'configs_normal': '🎮', // Example configuration for normal type
        'configs_integer': '🕹️', // Example configuration for integer type
    });
});

app.post('/configs/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'A logo is required!' }); // Changed status code to 418
        return; // Added return statement to prevent further execution
    }

    res.send({
        configs: `🎮 with your ${logo} and ID of ${id}`, // Changed to use backticks for string interpolation
    });
});

app.listen(
    PORT,
    () => console.log('it\'s alive on http://192.168.50.57:' + PORT)
);
```
