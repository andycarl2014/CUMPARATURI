import React, { Component } from 'react';
import { CONSTANTS } from '../CONST';
import BasicCard from './BasicCard';
import { Droppable, Draggable } from 'react-beautiful-dnd';
export default class ListItems extends Component {
	render() {
		//const {for , objToList, handleCheckboxCheck, handleClickMinus, handleClickPlus}= this.props;
		const {
			className,
			objToList,
			HANDLERS: { handleCheckboxCheck, handleClickPlus, handleClickMinus },
		} = this.props;
		const classH1 =
			className === CONSTANTS.forBought
				? CONSTANTS.bought
				: CONSTANTS.notBought;

		return (
			<div className='ListItem'>
				<h1>
					{objToList.length}
					{classH1}
				</h1>
				<div className='box'>
					<div className={className}>
						<Droppable droppableId={className}>
							{(provided) => (
								<ul {...provided.droppableProps} ref={provided.innerRef}>
									{objToList.map((item, index) => {
										// Returns an Item for each uncompleted item in the array

										return (
											<Draggable
												key={item.key}
												draggableId={item.key}
												index={index}
											>
												{(provided) => (
													<li
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
													>
														<BasicCard
															item={item}
															handleCheckboxCheck={handleCheckboxCheck}
															handleClickPlus={handleClickPlus}
															handleClickMinus={handleClickMinus}
														/>
													</li>
												)}
											</Draggable>
										);
									})}
								</ul>
							)}
						</Droppable>
					</div>
				</div>
			</div>
		);
	}
}
