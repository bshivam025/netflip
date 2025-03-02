import React from 'react'
import { useNavigate , useLocation } from 'react-router-dom';
const useRouting = () => {
    let navigate = useNavigate();
    let currentLocation = useLocation();
    return {
        openProfile : () => navigate("/profile"),
        goToHome: () => navigate("/"),
        goToBrowse: () => navigate("/browse"),
        goToGpt: () => navigate("/gptMovies"),
        currentLocation: currentLocation.pathname,
    }
}

export default useRouting