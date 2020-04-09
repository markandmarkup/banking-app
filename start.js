const app = require('./index');
const PORT = 5050;

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});