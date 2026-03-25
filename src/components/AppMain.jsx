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
            
        </main>
    )
}