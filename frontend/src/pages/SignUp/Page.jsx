import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BellRing, Contact2, ShieldCheck } from 'lucide-react';
import { SiGoogle } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function SignUp() {
	const navigate = useNavigate();

	const [formValue, setFormValue] = useState({
		name: '',
		phoneNumber: '',
		
		role: 'user', // retained for backend use
	});

	const [errors, setErrors] = useState({
		nameError: '',
		phoneError: '',
	});

	const isPhoneValid = () => /^[6-9]\d{9}$/.test(formValue.phoneNumber);
	
	const handleError = () => {
		const newErrors = {
			nameError: formValue.name ? '' : 'Name cannot be empty',
			phoneError: isPhoneValid() ? '' : 'Enter a valid phone number',
		};

		setErrors(newErrors);
		return Object.values(newErrors).every(err => err === '');
	};

	const submitForm = async () => {
		if (!handleError()) return;

		try {
			const res = await fetch(`${BASE_URL}/api/v1/auth/register`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formValue),
			});

			if (res.status === 201) {
				toast.success('User registered successfully!');
				navigate('/login');
			} else {
				const err = await res.json();
				toast.error(err.message || 'Something went wrong');
			}
		} catch {
			toast.error('Server error. Please try again later.');
		}
	};

	return (
		<div className='w-full min-h-screen flex items-center justify-center bg-pink-50 p-4'>
			<div className='w-full max-w-5xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden'>
				
				{/* Welcome Section */}
				<div className='hidden md:flex flex-col justify-between bg-pink-200 p-8 md:w-1/2'>
					<div>
						<h2 className='text-3xl font-bold text-pink-800 mb-4'>Welcome to Alertra</h2>
						<p className='text-sm text-pink-800 font-medium'>
							Your personal safety companion. Join our community of empowered women.
						</p>
					</div>
					<div className='mt-6 text-pink-800 font-semibold space-y-2'>
						<p className='flex items-center gap-2'><ShieldCheck size={16} /> Real-time Emergency Tracking</p>
						<p className='flex items-center gap-2'><Contact2 size={16} /> Trusted Emergency Contacts</p>
						<p className='flex items-center gap-2'><BellRing size={16} /> Instant SOS Alerts</p>
					</div>
				</div>

				{/* Form Section */}
				<div className='w-full md:w-1/2 p-6 sm:p-8 space-y-6'>
					<div className='text-center'>
						<h3 className='text-2xl sm:text-3xl font-semibold'>Create a new account</h3>
						<p className='text-sm mt-1'>
							Already registered? <a className='text-pink-800 font-semibold' href='/login'>Login</a>
						</p>
					</div>

					<form className='space-y-4' onSubmit={(e) => e.preventDefault()}>
						
						{/* Name */}
						<div>
							<label className='block mb-1 font-medium'>Name</label>
							<input
								type='text'
								value={formValue.name}
								onChange={(e) => setFormValue({ ...formValue, name: e.target.value })}
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-800'
							/>
							{errors.nameError && <p className='text-red-600 text-xs'>{errors.nameError}</p>}
						</div>

						{/* Phone Number */}
						<div>
							<label className='block mb-1 font-medium'>Phone Number</label>
							<input
								type='text'
								value={formValue.phoneNumber}
								onChange={(e) => setFormValue({ ...formValue, phoneNumber: e.target.value })}
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-800'
							/>
							{errors.phoneError && <p className='text-red-600 text-xs'>{errors.phoneError}</p>}
						</div>

						{/* Password */}
						

						<button
							type='submit'
							onClick={submitForm}
							className='w-full bg-pink-800 text-white py-3 rounded-lg font-semibold hover:bg-pink-900 transition'
						>
							Register
						</button>
					</form>

					
				</div>
			</div>
		</div>
	);
}

export default SignUp;
