import React from 'react';

function ListAffirmation({listAffirm, onClickDelete}){
	const rows = listAffirm.map((row, index) => {
		return(
		 <tr key = {index}>
			<td>{row}</td>
			<td>
				<button onClick = {() => onClickDelete(index)}>
				Delete
				</button>
			</td>
		</tr>
		)
	})

	return (
		<table style = {{'display':'flex', 'justifyContent':'center'}}>
			<tbody>{rows}</tbody>
		</table>
	)
}

export default ListAffirmation;