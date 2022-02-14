// Library imports
import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
//Custom imports
import { CONSTANTS } from './CONST';
import {
  Header,
  Footer,
  ListItems,
  MainInput,
  validateName,
  validateQuantity,
} from './Components/exports';
import { DivPage, Main } from './Components/styles';
import { SnackbarProvider } from 'material-ui-snackbar-provider';

export default function App() {
  const [objects, setObjects] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    name: CONSTANTS.empty,
    quantity: CONSTANTS.empty,
  });
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
    const oldObj = objects; // Saves the current state
    if (!dragResult.destination) return; // If the destination doesn't exist, does nothing
    const { source, destination } = dragResult; //
    const items = reorder(dragResult, oldObj, source.index, destination.index); // Saves the reordered oldObj into another array
    let newObj;

    if (source.droppableId !== destination.droppableId) {
      // If the item was moved, changes that item's completed prop
      const updatedObjects = items.map((item) => {
        if (item.key === dragResult.draggableId) {
          item.completed = !item.completed;
          //     this.props.snackbarShowMessage(
          //       `Ati modificat starea elementului cu numele: ${currentItem.name}
          //      Elementul este acum:${
          //        currentItem.completed ? 'completat' : 'necompletat'
          //       }`,
          //       'info',
          //       5000,
          //     );
        }
        return item;
      });

      newObj = updatedObjects; // Returns the updated objects after change
    } else {
      newObj = items;
      // this.props.snackbarShowMessage(
      //   `Ati modificat ordinea elementului cu numele: ${currentItem.name}
      //   `,
      //    'info',
      //   5000,
      //  );
    } // The item was not moved from one list to the other so the completed prop is not changed

    setObjects(newObj);
  };

  const handleCheckboxCheck = (key) => {
    const oldObj = objects;
    const uncompletedObj = oldObj.filter((item) => item.completed === false); // Filters the uncompleted objects
    let currentItem;
    let selectedIndex;
    let newObj;
    // Sets the state to completed or not completed based on the last state

    const updatedObjects = oldObj.map((item, index) => {
      if (item.key === key) {
        // If key of the item in the array is === to the key of the Item to be modified, the completed property is changed
        item.completed = !item.completed;
        currentItem = item;
        selectedIndex = index;
        ////this.props.snackbarShowMessage(
        //  `Ati modificat starea elementului cu numele: ${currentItem.name}
        //  Elementul este acum:${
        //    currentItem.completed ? 'completat' : 'necompletat'
        ///  }`,
        //  'info',
        //  5000,
        // );
      }
      return item; // Returns the modified item
    });
    const [removed] = updatedObjects.splice(selectedIndex, 1); // If the item is moved via button, removes the item and inserts it into array:
    if (currentItem.completed === true) {
      updatedObjects.push(removed); // At last index if the item is moved to Completed list
    } else {
      updatedObjects.splice(uncompletedObj.length, 0, removed);
    } // At the end of the uncompleted indexes
    newObj = updatedObjects; // Returns the modified state with the modified item

    setObjects(newObj);
  };
  const handleClickPlus = (key) => {
    const oldObj = objects;
    // Modifies the quantity of the item
    let oldItem;
    const updatedObjects = oldObj.map((item) => {
      if (item.key === key) {
        oldItem = item;
        // If key of the item in the array is === to the key of the Item to be modified
        oldItem.quantity = parseInt(oldItem.quantity) + 1;
        //  this.props.snackbarShowMessage(
        //    `Ati modificat elementul cu numele: ${currentItem.name}
        //    Cantitate noua:${currentItem.quantity}`,
        //   'info',
        //   5000,
        //  ); // Increases quantity by 1
      }
      return item; // Returns the modified item
    });
    const newObj = updatedObjects; // Returns the modified state with the modified item

    setObjects(newObj);
  };
  const handleClickMinus = (key) => {
    const oldObj = objects;

    // Modifies the quantity of the item

    const updatedObjects = oldObj.map((item) => {
      if (item.key === key) {
        // If key of the item in the array is === to the key of the Item to be modified
        item.quantity = item.quantity - 1;
      }
      return item; // Returns the modified item
    });
    const updatedObjects2 = updatedObjects.filter(
      // If the quantity of the item is less than 0 it is deleted from the array
      (item) => item.quantity > 0,
    );
    const newObj = updatedObjects2; // Returns the modified state with the modified item

    setObjects(newObj);
  };
  const clearFields = () => {
    setCurrentItem({ name: CONSTANTS.empty, quantity: CONSTANTS.empty });
    // Resets the state of currentItem to clear input fields
  };
  const handleClickAddButton = () => {
    let nameErr = CONSTANTS.empty;
    let quantityErr = CONSTANTS.empty;
    let oldObj = objects; // Saves the state objects array
    const uncompletedObjNumber = oldObj.filter(
      (item) => item.completed === false,
    ).length; // Filters the uncompleted objects
    const itemToAdd = {
      // Current item from the input fields
      key: uuidv4(),
      name: currentItem?.name || CONSTANTS.empty,
      quantity: currentItem?.quantity || CONSTANTS.empty,
      completed: false,
    };
    if (itemToAdd.name === CONSTANTS.empty) nameErr = CONSTANTS.emptyField;
    // Checks if name input is empty
    else if (!validateName(itemToAdd.name)) nameErr = CONSTANTS.invalidName;
    // Checks if name input is valid
    if (itemToAdd.quantity === CONSTANTS.empty)
      quantityErr = CONSTANTS.emptyField;
    // Checks if quantity input is empty
    else if (!validateQuantity(itemToAdd.quantity))
      quantityErr = CONSTANTS.invalidQuantity;
    //Checks if quantity input is valid

    if (oldObj.filter((item) => item.name === itemToAdd.name).length !== 0)
      nameErr = CONSTANTS.nameAlreadyUsed;
    // Checks if name input is already used

    if (nameErr === CONSTANTS.empty && quantityErr === CONSTANTS.empty) {
      // If there was no error, adds the current Item and shows success message
      oldObj.splice(uncompletedObjNumber, 0, itemToAdd);
      //this.props.snackbarShowMessage(
      // `Ati adaugat un element nou!
      //  Nume: ${itemToAdd.name}
      //    Cantitate:${itemToAdd.quantity}`,
      //   'success',
      //   5000,
      // );
      clearFields();
    }
    setObjects(oldObj);
    setNameError(nameErr);
    setQuantityError(quantityErr);
  };
  const handleChange = (e) => {
    // Sets the state of the currentItem based on the event
    const { name, value } = e.target;
    if (name === 'name') setNameError(CONSTANTS.empty);
    else setQuantityError(CONSTANTS.empty); // Removes error of the selected input
    setObjects(objects);
    let changedItem = { ...currentItem, [name]: value };
    setCurrentItem(changedItem);
  };

  // State destructuring
  const HANDLERS = {
    handleCheckboxCheck,
    handleClickPlus,
    handleClickMinus,
  };
  const objBought = objects.filter((item) => item.completed === true); // Objects that are completed
  const objNotBought = objects.filter((item) => item.completed === false); // Objects that are not completed

  return (
    <SnackbarProvider SnackbarProps={{ autoHideDuration: 4000 }}>
      <DivPage>
        <Header />
        <Main>
          <MainInput // Main Div with input and add button
            currentItem={currentItem}
            name_error_text={nameError}
            quantity_error_text={quantityError}
            handleChange={handleChange}
            handleClickAddButton={handleClickAddButton}
          />

          <DragDropContext onDragEnd={(result) => afterDrag(result)}>
            <ListItems // Class to list the elements
              listName={CONSTANTS.forNotBought}
              objToList={objNotBought}
              HANDLERS={HANDLERS}
            />

            <ListItems // Class to list the elements
              listName={CONSTANTS.forBought}
              objToList={objBought}
              HANDLERS={HANDLERS}
            />
          </DragDropContext>
        </Main>
        <Footer />
      </DivPage>
    </SnackbarProvider>
  );
}
