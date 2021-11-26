import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";

const useHistoryst = () =>{
   const [historyState,setHistoryState] = useState({})
   const location = useLocation();
   const history = useHistory();
    
    const url = location.state?.from || '/home';
    
    

    // useEffect(()=>{
    //     setHistoryState(url)
    //     // console.log(historyState)

    // },[])


    return {
        location,
        history,
        setHistoryState,
        url,
        historyState,
    }



}
export default useHistoryst;