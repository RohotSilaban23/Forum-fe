import { createContext, useReducer } from "react";

export const UserContext = createContext()

const initialState = {
    isLogin: false,
    isSuperAdmin: false,
    user: {},
    userId: {},
    data: 0,
    ForumUser:{}
}

const reducer = (state, action) => {
    const {type, payload } = action;
    switch (type) {
        case "USER_SUCCESS":
        case "LOGIN_SUCCESS":
            localStorage.setItem("token", payload.token)
            localStorage.setItem("username", payload.usernme)
            localStorage.setItem("role", payload.role)
            localStorage.setItem("userId", payload.id)
            return {
                isLogin : true,
                user: payload,
            };

        case "AUTH_ERROR":
        case "LOGOUT":
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            localStorage.removeItem("role");
            localStorage.removeItem("userId");
            return {
                isLogin: false,
                user: {},
                data: [],
            }
        default:
            throw new Error();
    }
};

export const UserContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UserContext.Provider value={[state, dispatch]} >
           {children}
        </UserContext.Provider>
    )
}