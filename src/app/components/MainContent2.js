import React from "react";

export class MainContent2 extends React.Component {

	constructor(props) {
		super();
		this.state = {
			clickCount: 0
		}
	}

	onCounterClick() {

		this.setState({
			clickCount: this.state.clickCount + 1
		});
	}

	render() {
		console.log(this.props.users);
		return (
			<div className="container">
				<h2>{this.props.tableTitle}</h2>
				<table className="table">
					<thead>
						<tr>
							<th>Firstname</th>
							<th>Lastname</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						{this.props.users.map((user, i) =>
							<tr key={i}>
								<td>{user.firstName}</td>
								<td>{user.lastName}</td>
								<td>{user.email}</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		);
	}
}