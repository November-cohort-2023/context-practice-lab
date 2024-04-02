import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext()


function UserProviderWrapper(props){
    const [user,setUser] = useState("Nadine")

    function toggleUser(user){
        if(user === ""){
            setUser("Nadine")
        }
        else{
            setUser("")
        }
    }
  

    return <UserContext.Provider value={{user,toggleUser}}>
    {props.children}
    </UserContext.Provider>

}

export {UserContext, UserProviderWrapper}