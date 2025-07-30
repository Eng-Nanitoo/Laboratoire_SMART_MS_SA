import LaboImage from '../../assets/LaboImage.jpg'
import './Login.css';
import { Link, Navigate,useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { useState } from 'react';
import Loading from '../../components/Loading';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    const [message,setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        console.log(username)
        console.log(password)

        try{
            const res = await api.post('/token/', {
                'username':username,
                'password':password})

            if (res.status === 200) {
                localStorage.setItem('token' , res.data.access)
                localStorage.setItem('refresh' , res.data.refresh)
                navigate('/dashbord')
            }else{
                setMessage('Invalid Credentials')            
            }
        }
        catch(error){
            alert(error)
        }
        finally{
            setLoading(false)
        }

    }
    if (loading) return <Loading/>
    if (message) return <div className='error-message'>{message}</div>;

    return (
        <div className='login-container grid grid-cols-2 max-md:block'>
            <form className="form-container">
                <div className="form-content">
                    <h2 className='text-center font-bold '>Smart Lab</h2>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" className='block w-full' onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" className='block w-full' onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <button className='block w-full' onClick={handleLogin}>Login</button>
                    </div>

                    <p className='text-center'>Don't have an account? <Link to='/register'>Register</Link></p>
                    <div className="social-media-links text-center">
                        <a href=""><i class='bx bxl-facebook-circle'></i></a>
                        <a href=""><i class='bx bxl-whatsapp' ></i></a>
                        <a href=""><i class='bx bxl-telegram' ></i></a>
                    </div>
                </div>
            </form>
            <div className="labo-image max-md:none">
                <img src={LaboImage} alt="" />
            </div>
            <div className="bottom-rectangle">_</div>
        </div>
    )
}

export default Login
