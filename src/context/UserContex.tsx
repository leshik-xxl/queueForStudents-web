import React, {useState} from "react";
import Api from "../api";

export interface UserContextInterface {
    username: string;
    onLogin: (username: string) => void;
    onLogout: () => void;
}

export const UserContext = React.createContext<UserContextInterface>({} as UserContextInterface);

export function UserContextProvider(props: any) {

    const [username, setUsername] = useState<string>('');
    const {children} = props;

    const login = async (username: string) => {
        const response = await Api.post<string, string>("/login", username);
        console.log(response);
        setUsername(response.data);
    }

    const logout = async () => {
        await Api.post<string, string>("/logout", username);
        setUsername('');
    }

    const state: UserContextInterface = {
        username,
        onLogin: login,
        onLogout: logout
    }

    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    );
}