import ResultItem from './ResultItem';

const ResultTable = function (props) {
	if (props.data?.length === 0)
		return <p className='center'>No data available.</p>;

	return (
		<table className='result'>
			<thead>
				<tr>
					<th>Year</th>
					<th>Total Savings</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				<ResultItem
					data={props.data}
					initialInvestment={props.initialInvestment}
				/>
			</tbody>
		</table>
	);
};

export default ResultTable;
