import LaboImage from '../../assets/LaboImage.jpg'
import './Login.css';
import { Link , useNavigate} from 'react-router-dom';
import api from '../../api/api';
import { useState } from 'react';
import Loading from '../../components/Loading';


function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    const [message,setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true)

        try{
            const res = await api.post('/register/', {
                'username': username,
                'password': password
            });
            if (res.status === 201) {

                navigate('/login');
            } else {
                setMessage('Registration failed. Please try again.');
            }
        }
        catch(error){
            setMessage('Registration failed. Please try again.')
            console.error('Registration error:', error);
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
                        <input type="text"  className='block w-full' onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="username">Password:</label>
                        <input type="password"  className='block w-full' onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <button className='block w-full' onClick={handleRegister}>Register</button>
                    </div>

                    <p className='text-center'>You already have an account? <Link to='/login'>Login</Link></p>
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

export default Register
