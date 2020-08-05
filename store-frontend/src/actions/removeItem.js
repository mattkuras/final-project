export const removeItem = (data) => {
  

    return(dispatch) => {
        fetch(`http://localhost:3001/items/${data}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(item =>dispatch({type: 'REMOVE_ITEM', payload: item}))

    }
}

