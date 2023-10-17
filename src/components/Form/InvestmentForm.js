import React, { useState } from 'react';
import Button from '../UI/Button/Button';

const initialInput = {
	currentSavings: '',
	yearlyContribution: '',
	expectedReturn: '',
	duration: '',
};

const InvestmentForm = function (props) {
	const [userInput, setUserInput] = useState(initialInput);

	const submitHandler = (event, userInput) => {
		event.preventDefault();
		props.onCalculate(userInput);
	};

	const clearInputs = function () {
		setUserInput(initialInput);
	};

	const resetInputsHandler = function (event) {
		event.preventDefault();
		console.log('reset inputs');
		clearInputs();
	};

	const changeInputHandler = function (key, value) {
		// console.log(key, value);
		// console.log(userInput);
		setUserInput((prevState) => {
			return {
				...prevState,
				[key]: +value,
			};
		});
	};

	// const currentSavingsHandler = function (event) {
	// 	setUserInput((prevState) => {
	// 		return {
	// 			...prevState,
	// 			currentSavings: event.target.value,
	// 		};
	// 	});
	// };

	// const yearlyContributionHandler = function (event) {
	// 	setYearlySavings(event.target.value);
	// };

	// const expectedHandler = function (event) {
	// 	setExpectedInterest(event.target.value);
	// };

	// const durationHandler = function (event) {
	// 	setInvestmentDuration(event.target.value);
	// };

	return (
		<form
			className='form'
			onSubmit={(event) => submitHandler(event, userInput)}
		>
			<div className='input-group'>
				<p>
					<label htmlFor='current-savings'>Current Savings ($)</label>
					<input
						type='number'
						id='current-savings'
						value={userInput.currentSavings}
						onChange={(e) =>
							changeInputHandler('currentSavings', e.target.value)
						}
					/>
				</p>
				<p>
					<label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
					<input
						type='number'
						id='yearly-contribution'
						value={userInput.yearlyContribution}
						onChange={(e) =>
							changeInputHandler('yearlyContribution', e.target.value)
						}
					/>
				</p>
			</div>
			<div className='input-group'>
				<p>
					<label htmlFor='expected-return'>
						Expected Interest (%, per year)
					</label>
					<input
						type='number'
						id='expected-return'
						value={userInput.expectedReturn}
						onChange={(e) =>
							changeInputHandler('expectedReturn', e.target.value)
						}
					/>
				</p>
				<p>
					<label htmlFor='duration'>Investment Duration (years)</label>
					<input
						type='number'
						id='duration'
						value={userInput.duration}
						onChange={(e) => changeInputHandler('duration', e.target.value)}
					/>
				</p>
			</div>
			<p className='actions'>
				<Button type='reset' className='buttonAlt' onClick={resetInputsHandler}>
					Reset
				</Button>
				<Button type='submit' className='button'>
					Calculate
				</Button>
			</p>
		</form>
	);
};

export default InvestmentForm;
