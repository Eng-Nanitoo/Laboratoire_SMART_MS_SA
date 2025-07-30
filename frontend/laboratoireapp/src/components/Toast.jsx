import { useEffect,useState } from "react"
import './Toast.css';
import closeIcon from '../assets/closeIcon.png';


function Toast({content}) {
    const [isShowed,setIsShowed] = useState(true);

    useEffect(
        () => {
            setTimeout(() => {
                setIsShowed(false)
            }, 3000)
        }
        ,[]
    )
    if(!isShowed) return;
    return (
        <div className="toast-container w-fit h-15 text-center text-sm text-white fixed bottom-3.5 right-3.5">
            <div className="toast-content">
                {content}
            </div>
            <button onClick={() => setIsShowed(false)}><img src={closeIcon} alt="" /></button>
        </div>
    )
}

export default Toast
