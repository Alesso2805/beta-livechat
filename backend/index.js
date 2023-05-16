const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    // Ruta POST "/authenticate"
    const { username } = req.body; // Obtener el nombre de usuario del cuerpo de la solicitud

    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {
                username: username,
                secret: username,
                first_name: username
            },
            {
                headers: {
                    "private-key": "02f1b3ab-d796-45b5-b5a9-81328159cb68"
                }
            }
        ); // Realizar una solicitud PUT a la API ChatEngine para autenticar al usuario

        return res.status(r.status).json(r.data); // Devolver el código de estado y los datos de respuesta de la API ChatEngine
    } catch (e) {
        return res.status(e.response.status).json(e.response.data); // Devolver el código de estado y los datos de respuesta de error de la API ChatEngine
    }
});

app.listen(3001); // Iniciar el servidor en el puerto 3001
