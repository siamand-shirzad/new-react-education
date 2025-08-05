import "./GuestComponent.css"
const GuestComponent = () => {
    document.title = "GuestComponent"
    return (
        <div className="guest-container">
            <h1 className="guest-title">GuestComponent</h1>
            <p className="guest-message">please login to see your information</p>
        </div>
    );
};

export default GuestComponent;