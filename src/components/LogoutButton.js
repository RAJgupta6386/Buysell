import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken'); // Clear token
        navigate('/login'); // Redirect to login
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
