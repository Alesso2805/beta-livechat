import { useState } from "react";
import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
    const [user, setUser] = useState(undefined); // Definir el estado "user" usando useState, inicializado como undefined

    if (!user) {
        // Si no hay usuario autenticado
        return <AuthPage onAuth={(user) => setUser(user)} />; // Renderizar el componente AuthPage y pasar la función "onAuth" para actualizar el estado del usuario
    } else {
        // Si hay usuario autenticado
        return <ChatsPage user={user} />; // Renderizar el componente ChatsPage y pasar el objeto "user" como una propiedad
    }
}

export default App;
