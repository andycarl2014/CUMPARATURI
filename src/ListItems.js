import React, { Component } from 'react';
import Item from './Item';
import { CONSTANTS } from './CONST';
export default class ListItems extends Component {
	render() {
		const props = this.props;
		const objToList = props?.objToList;
		return (
			<div
				className={
					this.props?.for === CONSTANTS.notBought
						? CONSTANTS.forNotBought
						: CONSTANTS.forBought
				}
			>
				<h1>
					{objToList.length}
					{props?.for === CONSTANTS.notBought
						? CONSTANTS.notBought
						: CONSTANTS.bought}
				</h1>
				{objToList.map((item) => {
					// Returns an Item for each uncompleted item in the array
					return (
						<Item
							key={item?.key}
							item={item}
							handleCheckboxCheck={props?.handleCheckboxCheck}
							handleClickPlus={props?.handleClickPlus}
							handleClickMinus={props?.handleClickMinus}
						/>
					);
				})}
			</div>
		);
	}
}
