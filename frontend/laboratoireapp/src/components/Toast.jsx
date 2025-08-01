import { useEffect, useState } from "react"
import './Toast.css';
import closeIcon from '../assets/closeIcon.png';

function Toast({ content }) {
    const [isShowed, setIsShowed] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShowed(false)
        }, 3000)
        return () => clearTimeout(timer);
    }, [])

    if (!isShowed) return null;

    return (
        <div className="toast-container animate-toast">
            <div className="toast-content">
                {content}
                <div className="toast-progress" />
            </div>
            <button className="toast-close" onClick={() => setIsShowed(false)}>
                <img src={closeIcon} alt="close" />
            </button>
        </div>
    )
}

export default Toast