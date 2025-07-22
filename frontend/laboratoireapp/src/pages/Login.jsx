import LaboImage from '../assets/LaboImage.jpg'
import './Login.css';

function Login() {
    return (
        <div className='login-container grid grid-cols-2 max-md:block'>
            <form className="form-container">
                <div className="form-content">
                    <h2 className='text-center font-bold '>Smart Lab</h2>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text"  className='block w-full'/>
                    </div>
                    <div>
                        <label htmlFor="username">Password:</label>
                        <input type="text"  className='block w-full'/>
                    </div>
                    <div>
                        <button className='block w-full'>Login</button>
                    </div>

                    <p className='text-center'>Don't have an account? <a href='#'>Register</a></p>
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
