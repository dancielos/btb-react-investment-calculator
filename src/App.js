import React, { useState } from 'react';
import Header from './components/UI/Header';
import InvestmentForm from './components/Form/InvestmentForm';
import ResultTable from './components/Table/ResultTable';

function App() {
	const [result, setResult] = useState([]);
	const [initialInvestment, setInitialInvestment] = useState(0);

	const calculateHandler = (userInput) => {
		const yearlyData = []; // per-year results

		let currentSavings = +userInput.currentSavings;
		setInitialInvestment(currentSavings);

		const yearlyContribution = +userInput.yearlyContribution;
		const expectedReturn = +userInput.expectedReturn / 100;
		const duration = +userInput.duration;

		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn;
			currentSavings += yearlyInterest + yearlyContribution;
			yearlyData.push({
				year: i + 1,
				yearlyInterest: yearlyInterest,
				// new Intl.NumberFormat('en-CA', {
				// 	style: 'currency',
				// 	currency: 'CAD',
				// }).format(yearlyInterest),
				savingsEndOfYear: currentSavings,
				// new Intl.NumberFormat('en-CA', {
				// 	style: 'currency',
				// 	currency: 'CAD',
				// }).format(currentSavings),
				yearlyContribution: yearlyContribution,
			});
		}

		setResult(yearlyData);
	};

	return (
		<div>
			<Header />
			<InvestmentForm onCalculate={calculateHandler} />

			<ResultTable data={result} initialInvestment={initialInvestment} />
		</div>
	);
}

export default App;
