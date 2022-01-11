import React, { Component } from 'react';
import Item from './Item';
import './style.css';
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			obiecte: [], // Array with all the objects , bought and not bought
			currentItem: {
				// Current item to be added in the array
				name: '',
				quantity: '',
			},
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick2 = this.handleClick2.bind(this);
		this.handleClickPlus = this.handleClickPlus.bind(this);
		this.handleClickMinus = this.handleClickMinus.bind(this);
	}

	handleChange(key) {
		// Sets the state to completed or not completed based on the last state
		this.setState((prevState) => {
			const updatedObjects = prevState.obiecte.map((item) => {
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
		// Modifies the quantity of the item
		this.setState((prevState) => {
			const updatedObjects = prevState.obiecte.map((item) => {
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
		// Modifies the quantity of the item
		this.setState((prevState) => {
			const updatedObjects = prevState.obiecte.map((item) => {
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
	ClearFields() {
		this.setState((prevState) => {
			// Resets the state of currentItem to clear input fields
			let currentItem = { ...prevState.currentItem };
			currentItem.name = '';
			currentItem.quantity = '';
			return { currentItem };
		});
	}
	handleClick2() {
		const itemToAdd = {
			// Current item from the input fields
			key: this.state.obiecte.length,
			name: this.state.currentItem.name,
			quantity: parseInt(this.state.currentItem.quantity) || 0,
			completed: false,
		};
		if (
			this.state.obiecte.filter((item) => item.name === itemToAdd.name)
				.length === 0 // If the item has not been already added to the array checks the inputs
		) {
			if (itemToAdd.name !== '' && itemToAdd.quantity > 0) {
				// If the inputs are completed it adds the item using setState
				this.setState((prevState) => ({
					obiecte: [...prevState.obiecte, itemToAdd],
				}));
				this.ClearFields();
			} else alert('Nu ati completat campurile');
		} else alert('Deja ati adaugat un element cu acest nume');
	}
	render() {
		return (
			<div className='App'>
				<div className='deCumparat'>
					<h1>
						{
							this.state.obiecte.filter((item) => item.completed === false)
								.length // Number of the items not bought
						}{' '}
						de cumparat
					</h1>
					{this.state.obiecte
						.filter((item) => item.completed === false)
						.map((item, index) => {
							// Returns an Item for each uncompleted item in the array
							return (
								<Item
									key={index}
									item={item}
									handleChange={this.handleChange}
									handleClickPlus={this.handleClickPlus}
									handleClickMinus={this.handleClickMinus}
								/>
							);
						})}
				</div>
				<div className='mijloc'>
					<input
						id='nume'
						type='text'
						value={this.state.currentItem.name}
						onChange={(e) =>
							this.setState((prevState) => {
								//Sets the state of the current item every time the input changes
								let currentItem = { ...prevState.currentItem };
								currentItem.name = e.target.value; // Sets the name of the current item
								return { currentItem };
							})
						}
					/>
					<input
						id='quantity'
						type='number'
						min={1}
						value={this.state.currentItem.quantity}
						onChange={(e) =>
							this.setState((prevState) => {
								// Sets the state of the current item every time the input changes
								let currentItem = { ...prevState.currentItem };
								currentItem.quantity = e.target.value; // Sets the quantity of the current item
								return { currentItem };
							})
						}
					/>
					<button className='buton' onClick={this.handleClick2}>
						Adauga
					</button>
				</div>
				<div className='cumparate'>
					<h1>
						{
							this.state.obiecte.filter((item) => item.completed === true)
								.length // Number of the items bought
						}{' '}
						cumparate
					</h1>
					{this.state.obiecte
						.filter((item) => item.completed === true)
						.map((item) => {
							// Returns an Item for each completed item in the array
							return (
								<Item
									key={item.key}
									item={item}
									handleChange={this.handleChange}
								/>
							);
						})}
				</div>
			</div>
		);
	}
}
