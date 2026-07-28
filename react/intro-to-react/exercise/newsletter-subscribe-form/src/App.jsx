import { useState } from "react";

function App() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return !submitted ? (
        <div className="border container my-3">
            <h1 className="my-2">Newsletter Subscription</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="name" className="form-control my-2" placeholder="Name" />
                    <input type="email" name="email" className="form-control my-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <button className="btn btn-primary my-2">Subscribe</button>
                </div>
            </form>
        </div>
    ) : (
        <div className="bg-success border border-success m-3">
            <h3 className="text-white m-3">Please check your email ({email}) for confirmation</h3>
        </div>
    );
}

export default App;
