import React, { Component } from 'react';
import ListItems from './Components/ListItems';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import MainInput from './Components/MainInput';
import { CONSTANTS } from './CONST';
import { DragDropContext } from 'react-beautiful-dnd';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { withSnackbar } from './Components/higherOrderComponent';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objects: [], // Array with all the objects , bought and not bought
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

  componentDidMount() {
    this.props.snackbarShowMessage(`Bine ati venit!`, 'success', 5000);
  }
  reorder(dragResult, list, startIndex, endIndex) {
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
  }
  afterDrag(dragResult) {
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
    this.setState(() => {
      if (source.droppableId !== destination.droppableId) {
        // If the item was moved, changes that item's completed prop
        const updatedObjects = items.map((item) => {
          if (item.key === dragResult.draggableId) {
            item.completed = !item.completed;
            currentItem = item;
          }
          return item;
        });
        this.props.snackbarShowMessage(
          `Ati modificat starea elementului cu numele: ${currentItem.name} 
          Elementul este acum:${
            currentItem.completed ? 'completat' : 'necompletat'
          }`,
          'info',
          5000,
        );
        return { objects: updatedObjects }; // Returns the updated objects after change
      } else return { objects: items }; // The item was not moved from one list to the other so the completed prop is not changed
    });
  }

  handleCheckboxCheck(key) {
    const oldObj = this.state.objects;
    const uncompletedObj = oldObj.filter((item) => item.completed === false); // Filters the uncompleted objects
    let currentItem;
    let selectedIndex;
    // Sets the state to completed or not completed based on the last state
    this.setState(() => {
      const updatedObjects = oldObj.map((item, index) => {
        if (item.key === key) {
          // If key of the item in the array is === to the key of the Item to be modified, the completed property is changed
          item.completed = !item.completed;
          currentItem = item;
          selectedIndex = index;
          this.props.snackbarShowMessage(
            `Ati modificat starea elementului cu numele: ${currentItem.name} 
            Elementul este acum:${
              currentItem.completed ? 'completat' : 'necompletat'
            }`,
            'info',
            5000,
          );
        }
        return item; // Returns the modified item
      });
      const [removed] = updatedObjects.splice(selectedIndex, 1); // If the item is moved via button, removes the item and inserts it into array:
      if (currentItem.completed === true) {
        updatedObjects.push(removed); // At last index if the item is moved to Completed list
      } else {
        updatedObjects.splice(uncompletedObj.length, 0, removed);
      } // At the end of the uncompleted indexes
      return { objects: updatedObjects }; // Returns the modified state with the modified item
    });
  }
  handleClickPlus(key) {
    const oldObj = this.state.objects;
    let currentItem;
    // Modifies the quantity of the item
    this.setState(() => {
      const updatedObjects = oldObj.map((item) => {
        if (item.key === key) {
          currentItem = item;
          // If key of the item in the array is === to the key of the Item to be modified
          item.quantity = item.quantity + 1;
          this.props.snackbarShowMessage(
            `Ati modificat elementul cu numele: ${currentItem.name} 
            Cantitate noua:${currentItem.quantity}`,
            'info',
            5000,
          ); // Increases quantity by 1
        }
        return item; // Returns the modified item
      });
      return { objects: updatedObjects }; // Returns the modified state with the modified item
    });
  }
  handleClickMinus(key) {
    const oldObj = this.state.objects;
    let currentItem;
    let removedItem;
    // Modifies the quantity of the item
    this.setState(() => {
      const updatedObjects = oldObj.map((item) => {
        if (item.key === key) {
          currentItem = item;

          // If key of the item in the array is === to the key of the Item to be modified
          item.quantity = item.quantity - 1;
          if (item.quantity > 0) {
            this.props.snackbarShowMessage(
              `Ati modificat elementul cu numele: ${currentItem.name} 
            Cantitate noua:${currentItem.quantity}`,
              'info',
              5000,
            );
          } else {
            removedItem = item;
            this.props.snackbarShowMessage(
              `Ati sters elementul cu numele: ${removedItem.name}`,
              'warning',
              5000,
            );
          } // Decreases quantity by 1
        }

        return item; // Returns the modified item
      });
      const updatedObjects2 = updatedObjects.filter(
        // If the quantity of the item is less than 0 it is deleted from the array
        (item) => item.quantity > 0,
      );
      return { objects: updatedObjects2 }; // Returns the modified state with the modified item
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
    let oldObj = this.state.objects; // Saves the state objects array
    const uncompletedObj = oldObj.filter((item) => item.completed === false); // Filters the uncompleted objects
    const itemToAdd = {
      // Current item from the input fields
      key: uuidv4(),
      name: this.state.currentItem?.name,
      quantity: parseInt(this.state.currentItem?.quantity) || 0,
      completed: false,
    };
    if (
      oldObj.filter((item) => item.name === itemToAdd.name).length === 0 // If the item has not been already added to the array checks the inputs
    ) {
      if (itemToAdd.name !== CONSTANTS.empty && itemToAdd.quantity > 0) {
        oldObj.splice(uncompletedObj.length, 0, itemToAdd);
        // If the inputs are completed it adds the item using setState
        this.setState(() => ({
          objects: oldObj,
        }));
        this.props.snackbarShowMessage(
          `Ati adaugat un element nou!
          Nume: ${itemToAdd.name} 
          Cantitate:${itemToAdd.quantity}`,
          'success',
          5000,
        );
        this.clearFields();
      } else alert(CONSTANTS.alerta1);
    } else alert(CONSTANTS.alerta2);
  }
  changeState(e) {
    // Sets the state of the currentItem based on the event
    this.setState(() => {
      let currentItem = this.state.currentItem;
      currentItem[e.target.id] = e.target.value;
      return { currentItem };
    });
  }
  render() {
    const { objects, currentItem } = this.state; // State destructuring
    const HANDLERS = {
      handleCheckboxCheck: this.handleCheckboxCheck,
      handleClickPlus: this.handleClickPlus,
      handleClickMinus: this.handleClickMinus,
    };
    const objBought = objects.filter((item) => item.completed === true); // Objects that are completed
    const objNotBought = objects.filter((item) => item.completed === false); // Objects that are not completed

    return (
      <div className='App'>
        <table>
          <tbody>
            <tr>
              <th colSpan='3'>
                <Header />
              </th>
            </tr>
            <tr className='trGif'>
              <td className='right'>
                <MainInput // Main Div with input and add button
                  currentItem={currentItem}
                  changeState={this.changeState}
                  handleClickAddButton={this.handleClickAddButton}
                />
              </td>
              <DragDropContext onDragEnd={(result) => this.afterDrag(result)}>
                <td className='left'>
                  <ListItems // Class to list the elements
                    className={CONSTANTS.forNotBought}
                    objToList={objNotBought}
                    HANDLERS={HANDLERS}
                    snackbarShowMessage={this.props.snackbarShowMessage}
                  />
                </td>

                <td className='middle'>
                  <ListItems // Class to list the elements
                    className={CONSTANTS.forBought}
                    objToList={objBought}
                    HANDLERS={HANDLERS}
                    snackbarShowMessage={this.props.snackbarShowMessage}
                  />
                </td>
              </DragDropContext>
            </tr>
            <tr>
              <th colSpan='3'>
                <Footer />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const AppWithSnackbar = withSnackbar(App);
export default AppWithSnackbar;
