import { createContext, useState } from 'react'

const userContext = createContext({ user: '', setUser: () => { } });
export { userContext };

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState('');
    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
}
