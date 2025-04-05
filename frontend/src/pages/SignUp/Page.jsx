import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BellRing, Contact2, ShieldCheck } from 'lucide-react'
import { SiGoogle } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

function App() {

	const [formValue, setFormValue] = useState({
		role: '',
		email: '',
		password: '',
		rememberMe: false,
	})

	const [errors, setErrors] = useState({
		roleError: '',
		emailError: '',
		passwordError: '',
	})

	console.log(errors)

	const isEmailValid = () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(formValue.email);
	}

	const isPasswordValid = () => {
		const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
		return passwordRegex.test(formValue.password);
	};	

	const handleError = () => {
		let newErrors = { roleError: '', emailError: '', passwordError: '' };
	
		if (formValue.role === '') {
			newErrors.roleError = "Role can't be empty";
		}
		if (formValue.email === '' || !isEmailValid()) {
			newErrors.emailError = 'Enter a Valid Email';
		}
		if (formValue.password === '' || !isPasswordValid()) {
			newErrors.passwordError = 'Enter a Valid Password';
		}
	
		setErrors(newErrors);
	}	

	const submitForm = () => {
		handleError();

		if (formValue.role && isEmailValid() && isPasswordValid()) {
			console.log("Form submitted:", formValue);
		} else {
			console.log("Form has errors:", errors);
		}
	}
	
	
	return (
	<>
		<div className='w-screen h-auto mt-12 rounded-sm border-grey-300 pt-4 bg-pink-50 flex items-center justify-center crimson'>
			<div className='w-[90%] h sm:max-w-[200px] md:max-w-[700px] h-auto bg-white rounded-2xl flex flex-row overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.1)]'>

				{/* Welcome section */}
				<div className='w-full bg-pink-200 p-10 hidden md:flex flex-col justify-between'>
					<div>
						<div className='text-2xl lg:text-3xl font-semibold text-pink-800 pb-4'>
							Welcome to Alertra
						</div>
						<div className='text-sm text-pink-800 font-semibold'>
							Your personal safety companion. Join our community of empowered women.
						</div>
					</div>
					<div className='text-pink-800 flex flex-col space-y-2.5 font-semibold'>
						<div className='flex flex-row items-center space-x-2'>
							<ShieldCheck className='w-4 h-4' />
							<div>Real-time Emergency Tracking</div>
						</div>
						<div className='flex flex-row items-center space-x-2'>
							<Contact2 className='w-4 h-4' />
							<div>Trusted Emergency Contacts</div>
						</div>
						<div className='flex flex-row items-center space-x-2'>
							<BellRing className='w-4 h-4' />
							<div>Instant SOS Alerts</div>
						</div>
					</div>
				</div>

				{/* Form Section */}
				<div className='w-full p-10 flex flex-col items-center justify-between space-y-6'>
					<div className='text-center'>
						<div className='text-xl lg:text-2xl font-semibold'>Sign in to your account</div>
						<div> 
							<span>Or </span><span className='text-pink-800 font-semibold'><Link>create a new accont</Link></span>
						</div>
					</div>

					<form className='w-full space-y-4'>
						<div>
							<div className='w-full flex flex-row items-center justify-between'>
								<div className='py-2'>Select Role</div>
								<>
								{
									errors.roleError &&
									<div className='text-red-600 text-xs'>{errors.roleError}</div>
								}
								</>
							</div>
							<div className='flex flex-row items-center justify-between space-x-4 text-center'

							>
								<div 
									className={`${formValue.role === 'user' ? 'border-pink-800' : ''} w-full pt-2 pb-3 border-[1px] rounded-xl border-[#ababab] hover:border-pink-800 cursor-pointer 
									transition-all duration-200 ease-in-out 
									hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] active:scale-95`}
									onClick={() => {
										setFormValue({...formValue, role: 'user'})
									}}	
								>
									<div className='font-semibold'>User</div>
									<div className='text-[#555555] text-sm'>For Women</div>
								</div>
								<div 
									className={`${formValue.role === 'security' ? 'border-pink-800' : ''} w-full pt-2 pb-3 border-[1px] rounded-xl border-[#ababab] hover:border-pink-800 cursor-pointer 
									transition-all duration-200 ease-in-out 
									hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] active:scale-95`}
									onClick={() => {
										setFormValue({...formValue, role: 'security'})
									}}
								>
									<div className='font-semibold'>Security</div>
									<div className='text-[#555555] text-sm'>Emergency Contact</div>
								</div>
							</div>
						</div>

						<div className=''>
							<div className='pb-1'>Email address</div>
							<input 
								type="text"
								value={formValue.email}
								onChange={(e) => {
									setFormValue({...formValue, email: e.target.value})
								}}
								className='w-full px-4 py-1.5 rounded-lg border-[1px] border-[#ababab] focus:outline-none focus:border-pink-800'
							/>
							<>
							{
								errors.emailError &&
								<div className='text-red-600 text-xs'>{errors.emailError}</div>
							}
							</>
						</div>

						<div className=''>
							<div className='pb-1'>Password</div>
							<input 
								type="text"
								value={formValue.password}
								onChange={(e) => {
									setFormValue({...formValue, password: e.target.value})
								}}
								className='w-full px-4 py-1.5 rounded-lg border-[1px] border-[#ababab] focus:outline-none focus:border-pink-800'
							/>
							<>
							{
								errors.passwordError &&
								<div className='text-red-600 text-xs'>{errors.passwordError}</div>
							}
							</>
						</div>

						<div className='flex flex-row items-center justify-between'>

							<div className='flex flex-row items-center space-x-1'>
								<input 
									type="checkbox" 
									value={formValue.rememberMe}
									onChange={(e) => {
										setFormValue({...formValue, rememberMe: e.target.checked})
									}}
									className='mt-[3px] cursor-pointer'/>
								<label htmlFor="checkbox">Remember me</label>
							</div>
							<Link className='text-pink-800 font-semibold'>Forgot Password</Link>

						</div>

						<div 
							onClick={submitForm}
							className='w-full pt-2.5 pb-3 bg-pink-800 text-white font-semibold text-center rounded-lg cursor-pointer hover:bg-pink-900'
						>
							Sign In
						</div>
					</form>

					<div className='w-full flex flex-row items-center justify-center space-x-1'>
						<div className='w-full h-[1px] bg-[#ababab]'/>
						<div className='flex-shrink-0 text-sm text-[#ababab]'>Or continue with</div>
						<div className='w-full h-[1px] bg-[#ababab]'/>
					</div>

					<div className='w-full flex flex-row space-x-4'>
						<div className='w-full border-[1px] border-[#ababab] rounded-lg p-2 flex flex-row items-center justify-center'>
							<SiGoogle className='w-4 h-4 cursor-pointer hover:text-pink-800' />
						</div>
						<div className='w-full border-[1px] border-[#ababab] rounded-lg p-2 flex flex-row items-center justify-center'>
							<FaFacebook className='w-4 h-4 cursor-pointer hover:text-pink-800' />
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
	)
}

export default App