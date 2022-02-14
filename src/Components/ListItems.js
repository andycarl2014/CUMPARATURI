// Library imports
import React, { Component } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

//Custom imports
import { CONSTANTS } from '../CONST';
import BasicCard from './BasicCard';
import { ListItem, H1Custom, ListItemBox, CardDiv, CustomUl } from './styles';

export default class ListItems extends Component {
  render() {
    const { listName, objToList, HANDLERS } = this.props; // Props destructuring
    const classH1 =
      listName === CONSTANTS.forBought ? CONSTANTS.bought : CONSTANTS.notBought;

    return (
      <ListItem>
        <H1Custom>
          {objToList.length}
          {classH1}
        </H1Custom>
        <ListItemBox>
          <CardDiv>
            <Droppable droppableId={listName}>
              {(provided) => (
                <CustomUl {...provided.droppableProps} ref={provided.innerRef}>
                  {objToList.map((item, index) => {
                    // Returns an Item for each object in the array
                    return (
                      <Draggable // Creates a Draggable object with current props
                        key={item.key}
                        draggableId={item.key}
                        index={index}>
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}>
                            <BasicCard // Creates a BasicCard with current props
                              item={item}
                              HANDLERS={HANDLERS}
                            />
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </CustomUl>
              )}
            </Droppable>
          </CardDiv>
        </ListItemBox>
      </ListItem>
    );
  }
}
