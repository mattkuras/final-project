export function fetchItems(action){
    return (dispatch) => {
        fetch("http://localhost:3001/carts/1")
        .then(resp => resp.json())
        .then(data => dispatch({
            
            type: 'FETCH_ITEMS',
            payload: data.items

        }))
    }
}