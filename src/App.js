import React, { useState } from 'react';
import Header from './components/UI/Header';
import InvestmentForm from './components/Form/InvestmentForm';
import ResultTable from './components/Table/ResultTable';

function App() {
	const [result, setResult] = useState([]);

	const calculatedHandler = function (result) {
		setResult(result);
	};

	return (
		<div>
			<Header />
			<InvestmentForm onSubmit={calculatedHandler} />

			<ResultTable data={result} />
		</div>
	);
}

export default App;
