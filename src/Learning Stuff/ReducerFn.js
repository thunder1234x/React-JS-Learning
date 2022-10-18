
const reducer = (state , action) =>{
    if (action.type === "SUCCESS") {
        const newPeople = [...state.people , action.payload]
        return {
            ...state,
            isModalOpen:true,
            modalContent:'Item Added',
            people:newPeople,
            status:'S'
        }
    }

    if (action.type === "FAILED") {

        return {
            ...state,
            isModalOpen:true,
            modalContent:'Fill the value',
            status:'E'
        }
    }

    if (action.type === "DELETE_ITEM") {
        const updatedPeople = state.people.filter(person=>person.id !== action.id);
        return {
            ...state,
            people:updatedPeople,
            status:'S',
            modalContent: 'Item Deleted',
            isModalOpen:true
        } 
    }

    if (action.type === "CLOSE_MODAL") {
        return {
            ...state,
            isModalOpen: false
        }
    }

    throw new Error('No match found with dispatch type');
}

export default reducer;