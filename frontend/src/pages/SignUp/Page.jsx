
import { registerUser } from '../../services/authService.js'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({ name: "", phoneNumber: "", role: "" });
    const navigate = useNavigate();


    const handleRegister = async (e) => {
        e.preventDefault();
        try {
          await registerUser(formData);
          navigate('/login')
        } catch (error) {
          console.error("Error registering:", error.response.data);
        }
      };

  return (
    <div className="min-h-screen flex items-center justify-center">
    <form className=" p-6 shadow-lg rounded-lg" onSubmit={handleRegister}>
      <h2 className="text-2xl font-bold">Register</h2>
      <input
        type="text"
        placeholder="Name"
        className="border p-2 w-full mt-2"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="border p-2 w-full mt-2"
        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
      />
      <select
        className="border p-2 w-full mt-2 text-black"
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
      >
        <option value="" disabled selected>Select a role</option>
        <option value="user">User</option>
        <option value="security">Security</option>
      </select>
      <button className="bg-blue-500 text-white p-2 mt-4 w-full">Register</button>
      <a href="/login">
        <p className="text-sm mt-2 cursor-pointer text-blue-600">
          Already have an account? Login
        </p>
      </a>
    </form>
  </div>
  
  )
}

export default SignUp
