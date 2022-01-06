import React, { Component } from 'react';
import Item from './Item';
import './style.css';
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			obiecte: [],
			currentItem: {
				name: '',
				quantity: null,
			},
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick2 = this.handleClick2.bind(this);
		this.handleClickPlus = this.handleClickPlus.bind(this);
		this.handleClickMinus = this.handleClickMinus.bind(this);
	}

	handleChange(key) {
		this.setState((prevState) => {
			const updatedObjects = prevState.obiecte.map((item) => {
				if (item.key === key) {
					item.completed = !item.completed;
				}
				return item;
			});
			return { obiecte: updatedObjects };
		});
	}
	handleClickPlus(key) {
		this.setState((prevState) => {
			const updatedObjects = prevState.obiecte.map((item) => {
				if (item.key === key) {
					item.quantity = item.quantity + 1;
				}
				return item;
			});
			return { obiecte: updatedObjects };
		});
	}
	handleClickMinus(key) {
		this.setState((prevState) => {
			const updatedObjects = prevState.obiecte.map((item) => {
				if (item.key === key) {
					item.quantity = item.quantity - 1;
				}

				return item;
			});
			const updatedObjects2 = updatedObjects.filter(
				(item) => item.quantity > 0
			);
			return { obiecte: updatedObjects2 };
		});
	}
	handleClick2() {
		const itemToAdd = {
			key: this.state.obiecte.length,
			name: this.state.currentItem.name,
			quantity: parseInt(this.state.currentItem.quantity) || 0,
			completed: false,
		};
		console.log(itemToAdd.name);
		console.log();
		if (itemToAdd.name !== '' && itemToAdd.quantity > 0)
			this.setState((prevState) => ({
				obiecte: [...prevState.obiecte, itemToAdd],
			}));
		else alert('Nu ati completat campurile');
	}
	render() {
		return (
			<div className='App'>
				<div className='deCumparat'>
					<h1>
						{
							this.state.obiecte
								.filter((item) => item.completed === false)
								.filter((item) => item.quantity > 0).length
						}{' '}
						de cumparat
					</h1>
					{this.state.obiecte
						.filter((item) => item.completed === false)
						.map((item, index) => {
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
						type='text'
						value={this.state.currentItem.name}
						onChange={(e) =>
							this.setState((prevState) => {
								let currentItem = { ...prevState.currentItem };
								currentItem.name = e.target.value;
								return { currentItem };
							})
						}
					/>
					<input
						type='number'
						min={1}
						value={this.state.currentItem.quantity}
						onChange={(e) =>
							this.setState((prevState) => {
								let currentItem = { ...prevState.currentItem };
								currentItem.quantity = e.target.value;
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
								.length
						}{' '}
						Cumparate
					</h1>
					{this.state.obiecte
						.filter((item) => item.completed === true)
						.map((item) => {
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
