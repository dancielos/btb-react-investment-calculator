const ResultItem = function (props) {
	console.table(props.data);
	const items = Array.from(props.data).map((item) => {
		return (
			<tr key={item.year}>
				<td>{item.year}</td>
				<td>{item.savingsEndOfYear}</td>
				<td>{item.yearlyInterest}</td>
				<td>TOTAL INTEREST GAINED</td>
				<td>{item.yearlyContribution}</td>
			</tr>
		);
	});

	return items;
};

export default ResultItem;
