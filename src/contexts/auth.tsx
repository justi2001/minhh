"use client"
import { useRouter } from "next/navigation";

import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContext{
    auth:boolean
    setAuth:(auth:boolean)=>void
}

const AuthContext = createContext<AuthContext>({
    auth: false,
    setAuth:()=>{}
})

export const AuthProvider = ({children}:{children:React.ReactNode})=>{
    const [auth,setAuth]= useState(()=>{
        const authLocal = JSON.parse(localStorage.getItem('auth') || 'false') as boolean
        return authLocal
    })

const router = useRouter()
 useEffect(() => {
    if (!auth) {
      router.replace("/login"); // chưa login thì quay về
      return
    }
  }, [auth]);

    useEffect(()=>{
        localStorage.setItem('auth', JSON.stringify(auth))
    },[auth])


  
    return <AuthContext.Provider value={{auth,setAuth}}>
{children}
    </AuthContext.Provider>
}

export const useAuthContext = ()=> useContext(AuthContext)