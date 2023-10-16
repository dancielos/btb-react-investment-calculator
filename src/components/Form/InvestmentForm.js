import React, { useState } from 'react';
import Button from '../UI/Button/Button';

const InvestmentForm = function (props) {
	const [userInput, setUserInput] = useState({
		currentSavings: '',
		yearlyContribution: '',
		expectedReturn: '',
		duration: '',
	});
	// const [currentSavings, setCurrentSavings] = useState('');
	// const [expectedInterest, setExpectedInterest] = useState('');
	// const [yearlySavings, setYearlySavings] = useState('');
	// const [investmentDuration, setInvestmentDuration] = useState('');

	const calculateHandler = (event, userInput) => {
		event.preventDefault();
		console.log('calculate button clicked');
		// Should be triggered when form is submitted
		// You might not directly want to bind it to the submit event on the form though...

		const yearlyData = []; // per-year results

		let currentSavings = +userInput.currentSavings;
		const yearlyContribution = +userInput.yearlyContribution;
		const expectedReturn = +userInput.expectedReturn / 100;
		const duration = +userInput.duration;

		// let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
		// const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
		// const expectedReturn = +userInput['expected-return'] / 100;
		// const duration = +userInput['duration'];

		// The below code calculates yearly results (total savings, interest etc)
		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn;
			currentSavings += yearlyInterest + yearlyContribution;
			yearlyData.push({
				// feel free to change the shape of the data pushed to the array!
				year: i + 1,
				yearlyInterest: new Intl.NumberFormat('en-CA', {
					style: 'currency',
					currency: 'CAD',
				}).format(yearlyInterest),
				savingsEndOfYear: new Intl.NumberFormat('en-CA', {
					style: 'currency',
					currency: 'CAD',
				}).format(currentSavings),
				yearlyContribution: yearlyContribution,
			});
		}

		// do something with yearlyData ...
		//pass the yearlyData to App.js
		props.onSubmit(yearlyData);
		// console.table(yearlyData);
	};

	const clearInputs = function () {
		setUserInput({
			currentSavings: '',
			yearlyContribution: '',
			expectedReturn: '',
			duration: '',
		});
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
		<form className='form'>
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
				<Button
					type='submit'
					className='button'
					onClick={(event) => calculateHandler(event, userInput)}
				>
					Calculate
				</Button>
			</p>
		</form>
	);
};

export default InvestmentForm;
