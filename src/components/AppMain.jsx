import { useState } from 'react'


export default function AppMain() {

    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false 
    })

    const api_url = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"

    
    return(
        <main className='container'>
            
        </main>
    )
}