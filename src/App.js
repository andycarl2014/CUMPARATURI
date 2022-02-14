import Footer from './Components-new/Footer';
import Header from './Components-new/Header';
import MainInput from './Components-new/MainInput';
import { DivPage } from './Components-new/styles';
// Library imports
import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

//Custom imports
import { CONSTANTS } from './CONST';
import {
  CustomApp,
  CustomTable,
  CustomTh,
  CustomTr,
  CustomTrGif,
  CustomTd,
} from './Components/styles';

function App() {
  const [objects, setObjects] = useState({});
  const [currentName, setCurrentName] = useState('');
  const [currentQuantity, setCurrentQuantity] = useState('');
  const [nameError, setNameError] = useState('');
  const [quantityError, setQuantityError] = useState('');

  const reorder = (dragResult, list, startIndex, endIndex) => {
    // Reorders the items in the state objects array in the following order: toBuy objects first, and alreadyBought objects last
    const { destination, source } = dragResult; // dragResult destructuring
    const result = Array.from(list); // Saves the list into result, which is going to be modified further
    const uncompletedObj = result.filter((item) => item.completed === false); // Filters the uncompleted objects
    let removed;
    if (destination.droppableId !== source.droppableId) {
      // If the source and the destination are not the same it means that the item was moved from one list to another
      if (destination.droppableId === CONSTANTS.forBought) {
        // The destination's droppableId is the second list
        [removed] = result.splice(startIndex, 1); // Saves the current item as removed
        result.splice(endIndex + uncompletedObj.length - 1, 0, removed);
        // Inserts the removed item at the current endIndex after all the uncompleted items
      } else {
        // The destination's droppableId is the first list
        [removed] = result.splice(startIndex + uncompletedObj.length, 1);
        // Saves the current item as removed
        result.splice(endIndex, 0, removed);
        // Inserts the removed item at the current endIndex
      }
    } else {
      // If the source and the destination are the same it means that the item is being reordered in the same list
      if (destination.droppableId === CONSTANTS.forBought) {
        // The destination's droppableId is the second list
        [removed] = result.splice(startIndex + uncompletedObj.length, 1);
        // Saves the current item startIndex after the 1st list's elements as removed
        result.splice(endIndex + uncompletedObj.length, 0, removed);
        // Inserts the removed item at the current endIndex after the 1st list's elements
      } else {
        [removed] = result.splice(startIndex, 1);
        // Saves the current item as removed
        result.splice(endIndex, 0, removed);
        // Inserts the removed item at the current endIndex
      }
    }
    return result; // Returns the current modified array
  };
  const afterDrag = (dragResult) => {
    const oldObj = this.state.objects; // Saves the current state
    if (!dragResult.destination) return; // If the destination doesn't exist, does nothing
    const { source, destination } = dragResult; //
    let currentItem;

    const items = this.reorder(
      dragResult,
      oldObj,
      source.index,
      destination.index,
    ); // Saves the reordered oldObj into another array
    let newObj;
    [currentItem] = items.filter((item) => item.key === dragResult.draggableId);

    if (source.droppableId !== destination.droppableId) {
      // If the item was moved, changes that item's completed prop
      const updatedObjects = items.map((item) => {
        if (item.key === dragResult.draggableId) {
          item.completed = !item.completed;
          currentItem = item;
          this.props.snackbarShowMessage(
            `Ati modificat starea elementului cu numele: ${currentItem.name} 
            Elementul este acum:${
              currentItem.completed ? 'completat' : 'necompletat'
            }`,
            'info',
            5000,
          );
        }
        return item;
      });

      newObj = updatedObjects; // Returns the updated objects after change
    } else {
      newObj = items;
      this.props.snackbarShowMessage(
        `Ati modificat ordinea elementului cu numele: ${currentItem.name} 
        `,
        'info',
        5000,
      );
    } // The item was not moved from one list to the other so the completed prop is not changed

    //this.setState({ objects: newObj });
    setObjects(newObj);
  };
  return (
    <DivPage>
      <Header />
      <MainInput />
      <Footer />
    </DivPage>
  );
}

export default App;
