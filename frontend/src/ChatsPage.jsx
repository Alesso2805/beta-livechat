import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';
import React from 'react';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '73176730-150f-4b3f-8d9d-7dddeff8ca7a', // ID del proyecto Chat Engine
        props.user.username, // Nombre de usuario
        props.user.secret // Clave secreta (username)
    );

    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} /> {/* Renderizar el componente MultiChatSocket y pasar las propiedades chatProps */}
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} /> {/* Renderizar el componente MultiChatWindow y pasar las propiedades chatProps */}
        </div>
    );
};

export default ChatsPage;
