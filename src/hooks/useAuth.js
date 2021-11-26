import { useContext } from "react"
import { authContext } from "../components/Context/AuthProvider";


const useAuth = () =>{
    return useContext(authContext)
}
export default useAuth;