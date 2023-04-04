"use client"
import { FormEvent, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Spinner from "../Spinner";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    
    const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({firstName, lastName, email, phoneNumber, message})
    })
    
    res.status && setLoading(false)
    return res.status === 200 ? (setFirstName(""), setLastName(""), setEmail(""), setPhoneNumber(""), setMessage(""), toast.success("Dostali sme Váš email. Čoskoro Vám odpovieme.")) : toast.error("Nastala sa chyba počas posielaní emailu.")
  };

  return (
    <>
        <form onSubmit={sendEmail} className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2 flex flex-col">
                    <label htmlFor="firstName" className="text-lg md:text-2xl">
                        Meno <span className="font-thin text-gray-400">*</span>
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="bg-gray-200 rounded-md md:text-xl font-light focus:outline-none p-2 focus:bg-gray-300 duration-500 hover:bg-gray-300"
                        placeholder="John"
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col">
                    <label htmlFor="lastName" className="text-lg md:text-2xl">
                        Priezvisko <span className="font-thin text-gray-400">*</span>
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="bg-gray-200 rounded-md md:text-xl font-light focus:outline-none p-2 focus:bg-gray-300 duration-500 hover:bg-gray-300"
                        placeholder="Doe"
                        required
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2 flex flex-col">
                    <label htmlFor="email" className="text-lg md:text-2xl">
                        Email <span className="font-thin text-gray-400">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-200 rounded-md md:text-xl font-light focus:outline-none p-2 focus:bg-gray-300 duration-500 hover:bg-gray-300"
                        placeholder="johndoe@gmail.com"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col">
                    <label htmlFor="phoneNumber" className="text-lg md:text-2xl">
                        Tel. číslo
                    </label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        className="bg-gray-200 rounded-md md:text-xl font-light focus:outline-none p-2 focus:bg-gray-300 duration-500 hover:bg-gray-300"
                        placeholder="+421987654321"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <label htmlFor="message" className="text-lg md:text-2xl">
                Správa <span className="font-thin text-gray-400">*</span>
                </label>
                <textarea
                name="message"
                id="message"
                cols={30}
                rows={8}
                placeholder="Vaša správa alebo otázka sem."
                className="bg-gray-200 rounded-md md:text-xl font-light focus:outline-none p-2 focus:bg-gray-300 duration-500 hover:bg-gray-300"
                required
                onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </div>
            <button type="submit" className="btn-primary w-max px-10" disabled={loading}>
                {loading ? <Spinner/> : "Poslať"}
            </button>
        </form>
        <Toaster toastOptions={{duration: 5000}}/>
    </>
  );
};
export default ContactForm;
