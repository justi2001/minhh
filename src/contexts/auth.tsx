"use client"

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
    const [auth,setAuth]= useState(false)

    // Lấy giá trị từ localStorage chỉ khi client mount
    useEffect(() => {
        const authLocal = JSON.parse(window.localStorage.getItem('auth') || 'false') as boolean
        setAuth(authLocal)
    }, [])

    useEffect(()=>{
        window.localStorage.setItem('auth', JSON.stringify(auth))
    },[auth])


  
    return <AuthContext.Provider value={{auth,setAuth}}>
{children}
    </AuthContext.Provider>
}

export const useAuthContext = ()=> useContext(AuthContext)