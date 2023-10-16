import ResultItem from './ResultItem';

const ResultTable = function (props) {
	{
		/* TODO: Show below table conditionally (only once result data is available) */
	}
	{
		/* Show fallback text if no data is available */
	}
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
				<ResultItem />
			</tbody>
		</table>
	);
};

export default ResultTable;
