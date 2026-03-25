import { useState } from 'react'
import axios from 'axios';

export default function AppMain() {

    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false 
    })

    const api_url = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"

    function handleOnChange(e) {
        const { name, value, type, checked } = e.target;
        setFormData({...formData,[name]: type === "checkbox" ? checked : value});
    }

    function handleSubmit(e) {
    e.preventDefault(api_url, formData);
    axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
        .then(res => {console.log("post creato con successo",res.data)
    })
        .catch(err => {
            console.error("Errore 404 o altro:", err);
        });
    }
    return(
        <main className='container'>
            <div className="row mt-3">
                <div className="col-md-8">
                    <form onSubmit={handleSubmit}>
                        <div className="row g-3 row-cols-1">
                            <div className="col">
                                <label className="form-label">Autore</label>
                                <input 
                                    name="author" 
                                    className="form-control"
                                    type="text"
                                    value={formData.author}
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className="col">
                                <label className="form-label">Titolo</label>
                                <input 
                                    name="title"
                                    className="form-control"
                                    type="text"
                                    value={formData.title}
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className="col">
                                <label className="form-label">Contenuto</label>
                                <textarea 
                                    name="body"
                                    className="form-control"
                                    rows="4"
                                    value={formData.body}
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className="col">
                                <div className="form-check">
                                    <input 
                                        name="public"
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={formData.public}
                                        onChange={handleOnChange}
                                        id="flexCheckDefault"
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Rendi pubblico il post
                                    </label>
                                </div>
                            </div>
                            <div className="col">
                                <button type="submit" className="btn btn-primary w-100">Crea Post</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='col-md-4 mt-4'>
                    <div className='card h-100 border-primary'>
                        <div className='card-header bg-primary text-white'>
                            {formData.title || "Titolo del Post"}
                        </div>
                        <div className='card-body'>
                            <p className='text-muted'>Autore: {formData.author || "..."}</p>
                            <hr />
                            <p className='card-text small'>{formData.body || "Qui comparira il tuo testo"}</p>
                        </div>
                        <div className="card-footer">
                            Stato: <strong>{formData.public ? "Pubblico" : "Bozza"}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}