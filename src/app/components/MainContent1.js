import React from "react";

export class MainContent1 extends React.Component {

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
				<div className="jumbotron">
					<h1>Hey Wassssup !!!!</h1>
					<div className="panel">{this.state.clickCount}</div>
					<button className="btn btn-primary" onClick={this.onCounterClick.bind(this)}>Click me !!</button>
				</div>
			</div>
		);
	}
}