// Example usage in any component
import Toast from './components/Toast';
import { useState } from 'react';

function MyComponent() {
    const [showToast, setShowToast] = useState(false);

    return (
        <div>
            <button onClick={() => setShowToast(true)}>Show Toast</button>
            
            {showToast && (
                <Toast
                    content="Operation completed successfully!"
                    type="success"
                    duration={5000}
                    position="top-right"
                    onClose={() => setShowToast(false)}
                />
            )}
        </div>
    );
}

export default MyComponent;