import React from 'react'
import {Navigate} from 'react-router-dom'
import {jwtDecode} from 'jwt-decode'
import api from "../api/api";
import { useState,useEffect } from 'react'
import Loading from "../Components/Loading"


function ProtectedRoute({children}) {
    const [isAuthorized,setIsAuthorized] = useState(null);

    useEffect(
        () => {
            auth().catch(
                () => setIsAuthorized(false)
            )
        }, [])
    
    const refreshToken = async () => {
        const refreshToken = localStorage.getItem("refresh")

        try{
            const res = await api.post("/api/token/refresh/", {
                refresh: refreshToken
            });

            if(res.status === 200){
                localStorage.setItem('token', res.data.access)
                setIsAuthorized(true)
            }
            else{
                setIsAuthorized(false)
            }
        }
        catch(error){
            console.log(error)
        }
    }

    const auth = async () => {
        const token = localStorage.getItem('token')
        if (!token) {
            setIsAuthorized(false)
            return
        }

        const decoded = jwtDecode(token)
        const tokenExpiration = decoded.tokenExpiration
        const now = Date.now() / 100

        if (tokenExpiration < now){
            await refreshToken()

        }
        else{
            setIsAuthorized(true)
        }
    }

    if (isAuthorized === null){
        return <Loading/>
    }

    return isAuthorized ? children : <Navigate to='/login'/>
}

export default ProtectedRoute
