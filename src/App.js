import React, { Component } from 'react';
import ListItems from './ListItems';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import MainInput from './MainInput';
import { CONSTANTS } from './CONST';
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			obiecte: [], // Array with all the objects , bought and not bought
			currentItem: {
				// Current item to be added in the array
				name: CONSTANTS.empty,
				quantity: CONSTANTS.empty,
			},
		};
		this.handleCheckboxCheck = this.handleCheckboxCheck.bind(this);
		this.handleClickAddButton = this.handleClickAddButton.bind(this);
		this.handleClickPlus = this.handleClickPlus.bind(this);
		this.handleClickMinus = this.handleClickMinus.bind(this);
		this.changeState = this.changeState.bind(this);
	}
	handleCheckboxCheck(key) {
		const oldObj = this.state.obiecte;
		// Sets the state to completed or not completed based on the last state
		this.setState(() => {
			const updatedObjects = oldObj.map((item) => {
				if (item.key === key) {
					// If key of the item in the array is === to the key of the Item to be modified, the completed property is changed
					item.completed = !item.completed;
				}
				return item; // Returns the modified item
			});
			return { obiecte: updatedObjects }; // Returns the modified state with the modified item
		});
	}
	handleClickPlus(key) {
		const oldObj = this.state.obiecte;
		// Modifies the quantity of the item
		this.setState(() => {
			const updatedObjects = oldObj.map((item) => {
				if (item.key === key) {
					// If key of the item in the array is === to the key of the Item to be modified
					item.quantity = item.quantity + 1; // Increases quantity by 1
				}
				return item; // Returns the modified item
			});
			return { obiecte: updatedObjects }; // Returns the modified state with the modified item
		});
	}
	handleClickMinus(key) {
		const oldObj = this.state.obiecte;
		// Modifies the quantity of the item
		this.setState(() => {
			const updatedObjects = oldObj.map((item) => {
				if (item.key === key) {
					// If key of the item in the array is === to the key of the Item to be modified
					item.quantity = item.quantity - 1; // Decreases quantity by 1
				}

				return item; // Returns the modified item
			});
			const updatedObjects2 = updatedObjects.filter(
				// If the quantity of the item is less than 0 it is deleted from the array
				(item) => item.quantity > 0
			);
			return { obiecte: updatedObjects2 }; // Returns the modified state with the modified item
		});
	}
	clearFields() {
		this.setState(() => {
			// Resets the state of currentItem to clear input fields
			let currentItem = this.state?.currentItem;
			currentItem.name = CONSTANTS.empty;
			currentItem.quantity = CONSTANTS.empty;
			return { currentItem };
		});
	}
	handleClickAddButton() {
		const itemToAdd = {
			// Current item from the input fields
			key: uuidv4(),
			name: this.state.currentItem?.name,
			quantity: parseInt(this.state.currentItem?.quantity) || 0,
			completed: false,
		};
		if (
			this.state.obiecte.filter((item) => item.name === itemToAdd.name)
				.length === 0 // If the item has not been already added to the array checks the inputs
		) {
			if (itemToAdd.name !== CONSTANTS.empty && itemToAdd.quantity > 0) {
				let oldObj = this.state.obiecte;
				// If the inputs are completed it adds the item using setState
				this.setState(() => ({
					obiecte: [...oldObj, itemToAdd],
				}));
				this.clearFields();
			} else alert(CONSTANTS.alerta1);
		} else alert(CONSTANTS.alerta2);
	}
	changeState(e) {
		this.setState(() => {
			let currentItem = this.state.currentItem;
			currentItem[e.target.id] = e.target.value;
			return { currentItem };
		});
	}
	render() {
		const { obiecte, currentItem } = this.state;
		const objBought = obiecte.filter((item) => item.completed === true);
		const objNotBought = obiecte.filter((item) => item.completed === false);
		return (
			<div className='App'>
				<ListItems
					for={CONSTANTS.bought}
					objToList={objNotBought}
					handleCheckboxCheck={this.handleCheckboxCheck}
					handleClickPlus={this.handleClickPlus}
					handleClickMinus={this.handleClickMinus}
				/>
				<MainInput
					currentItem={currentItem}
					changeState={this.changeState}
					handleClickAddButton={this.handleClickAddButton}
				/>
				<ListItems
					for={CONSTANTS.notBought}
					objToList={objBought}
					handleCheckboxCheck={this.handleCheckboxCheck}
					handleClickPlus={this.handleClickPlus}
					handleClickMinus={this.handleClickMinus}
				/>
			</div>
		);
	}
}
