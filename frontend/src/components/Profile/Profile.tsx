import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import { UserData } from "../../types/user.ts"
import styles from "./Profile.module.css"
import axios from "axios";



const Profile = () =>{
    const navigate = useNavigate()
    const [user, setUser] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(()=>{
        const fetchProfile = async ()=>{
            const token = localStorage.getItem("token");

            if(!token){
                setError("No token provided");
                setLoading(false);
                return;
            }

            try{
                const response = await axios.get("http://localhost:5000/api/user/profile",{
                    headers:{
                        Authorization: `Bearer ${token}`
                    },
                })
                console.log('User Data: ', response.data)
                setUser(response.data);
            }catch(err){
                setError("Failed to fetch user data");
            }finally{
                setLoading(false);
            }
        }
        fetchProfile();
    },[])

    if (loading) return <p>Загрузка...</p>
    if (error) return <p>{error}</p>
    if (!user) return <p>Пользователь не найден</p>

    const handleLogOut = () => {
        localStorage.removeItem("token");
        navigate('/');
    }
    return(
        <>
            <h1>Профиль {user.username}</h1>
            <p>Email: {user.email}</p>
            <p>Дата регистрации: {new Date(user.createdAt).toLocaleDateString()}</p>
            <button
            onClick={handleLogOut}
            type="button"
            className={`mainButton ${styles.logOutButton}`}>
                Выйти
            </button>
        </>
    )
}
export default Profile;