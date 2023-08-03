import { useEffect, useState } from 'react';

import './App.css';

import InputField from './components/InputField';
import InputFeedback from './components/FormFeedback';

function App() {

	const [formFields, setFormFields] = useState(
		{
			username: '',
			password: '',
			confirmPassword: ''
		}
	);

	const [passwordsMatch, setPasswordsMatch] = useState(-1);

	const handleFieldChange = (name, val) => {
		setFormFields(prevState => {
			return {
				...prevState,
				[name]: val
			}
		});
	};

	useEffect(() => {
		const { password, confirmPassword } = formFields;

		if (password.length > 0 || confirmPassword.length > 0) {
			setPasswordsMatch(password === confirmPassword);
		}
	}, [formFields]);

	return (

		<div className='tst-container'>

			<h1 className='text-center'>
				TST Signup Form
			</h1>

			<form className='tst-form'>

				<InputField
					changeHandler={(e) => handleFieldChange('username', e.target.value)}
					label='Username'
					name='username'
					value={formFields.username}
				/>

				<InputField
					changeHandler={(e) => handleFieldChange('password', e.target.value)}
					label='Password'
					name='password'
					type='password'
					value={formFields.password}
				/>

				{ typeof passwordsMatch === 'boolean' && (
					<InputFeedback
						msg={`Passwords ${passwordsMatch ? '' : 'don\'t '} match.`}
						theme={passwordsMatch ? 'success' : 'error'}
					/>
				)}

				<InputField
					changeHandler={(e) => handleFieldChange('confirmPassword', e.target.value)}
					label='Confirm Password'
					name='confirmPassword'
					type='password'
					value={formFields.confirmPassword}
				/>
				{ typeof passwordsMatch === 'boolean' && (
					<InputFeedback
						msg={`Passwords ${passwordsMatch ? '' : 'don\'t '} match.`}
						theme={passwordsMatch ? 'success' : 'error'}
					/>
				)}

				
				<input
					className={`tst-btn${formFields.username.length < 1 || (passwordsMatch === -1 || !passwordsMatch) ? ' disabled' : ''}`}
					type='submit'
					value='Sign Up'
				/>


				

			</form>

		</div>

	);

}

export default App;
