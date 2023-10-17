const ResultItem = function (props) {
	// console.table(props.data);
	return Array.from(props.data).map((item) => {
		// console.log(item.savingsEndOfYear);
		const totalInterest =
			+item.savingsEndOfYear -
			+props.initialInvestment -
			+item.yearlyContribution * +item.year;
		return (
			<tr key={item.year}>
				<td>{item.year}</td>
				<td>
					{new Intl.NumberFormat('en-ca', {
						style: 'currency',
						currency: 'CAD',
					}).format(item.savingsEndOfYear)}
				</td>
				<td>
					{new Intl.NumberFormat('en-ca', {
						style: 'currency',
						currency: 'CAD',
					}).format(item.yearlyInterest)}
				</td>
				<td>
					{new Intl.NumberFormat('en-ca', {
						style: 'currency',
						currency: 'CAD',
					}).format(totalInterest)}
				</td>
				<td>
					{new Intl.NumberFormat('en-ca', {
						style: 'currency',
						currency: 'CAD',
					}).format(item.yearlyContribution)}
				</td>
			</tr>
		);
	});
};

export default ResultItem;
