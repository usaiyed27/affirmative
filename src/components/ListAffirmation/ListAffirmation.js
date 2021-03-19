import React from 'react';
import './ListAffirmation.css'

function ListAffirmation({listAffirm, onClickDelete}){
	const rows = listAffirm.map((row, index) => {
		return(
		 <tr key = {index}>
			<td id="text">{row}</td>
			<td>
				<button onClick = {() => onClickDelete(index)}>
				Delete
				</button>
			</td>
		</tr>
		)
	})

	return (
		<div className='container'>
			<table>
				<tbody>{rows}</tbody>
			</table>
		</div>
	)
}

export default ListAffirmation;