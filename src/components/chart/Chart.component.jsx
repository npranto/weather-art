import React, {Component} from 'react';
import { 
	Sparklines, 
	SparklinesLine, 
	SparklinesSpots, 
	SparklinesReferenceLine, 
	SparklinesCurve 
} from 'react-sparklines';
import './Chart.component.css';

class Chart extends Component {
	constructor(props){
		super(props)

		this.renderAverageDetail = this.renderAverageDetail.bind(this);
	}

	renderAverageDetail(units) {
		console.log(units);
		switch(units){
			case 'temperature':
				return (
					<ul class="collection with-header">
				        <li class="collection-header"><h5> <sub style={{ fontWeight: 100}}>Avg.</sub> {_.round(_.mean(this.props.data))}<span>&#8457;</span> </h5></li>
					</ul>
				)
			case 'pressure':
				return (
					<ul class="collection with-header">
				        <li class="collection-header"><h5> <sub style={{ fontWeight: 100}}>Avg.</sub> {_.round(_.mean(this.props.data))} <span>hPa</span> </h5></li>
					</ul>
				)
			case 'humidity':
				return (
					<ul class="collection with-header">
				        <li class="collection-header"><h5> <sub style={{ fontWeight: 100}}>Avg.</sub> {_.round(_.mean(this.props.data))}<span>&#37;</span> </h5></li>
					</ul>
				)
		}
		return <span> - </span>
	}

	render() {
		return (
			<div className="chart">
				<Sparklines style={{ background: "white"}} data={this.props.data} limit={this.props.data.length} height={180} min={_.min(this.props.data)} max={_.max(this.props.data)}>
					<SparklinesLine style={{ strokeWidth: 3, stroke: this.props.stroke, fill: this.props.fill }} />
					<SparklinesSpots size={4} style={{ stroke: "#336aff", strokeWidth: 3, fill: "gray" }} />
					<SparklinesReferenceLine type="mean" />
					<SparklinesCurve />
				</Sparklines>
				{this.renderAverageDetail(this.props.units)}
			</div>
		)
	}
}

export default Chart;

