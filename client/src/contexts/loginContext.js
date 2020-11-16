import React, { useState } from 'react';
export const LoginContext = React.createContext();

export default function LoginContextProvider(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <LoginContext.Provider value={
            {
                isAuthenticated,
                setIsAuthenticated
            }
        }>
            {props.children}
        </LoginContext.Provider>
    )
}
