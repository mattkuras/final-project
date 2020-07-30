export const addItem = (data) => {
    return(dispatch) => {
        fetch('http://localhost:3001/items', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(item => dispatch({type: 'ADD_ITEM', payload: item}))

    }
}