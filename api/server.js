import { app } from './setup.js';
import { PORT } from './setup.js';


app.listen(PORT, () => console.log(`Servidor funcionando na porta ${PORT}`));