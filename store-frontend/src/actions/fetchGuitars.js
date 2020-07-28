export function fetchGuitars(action){
    return (dispatch) => {
        fetch("http://localhost:3001/guitars")
        .then(resp => resp.json())
        .then(data => dispatch({
            type: 'FETCH_GUITARS',
            payload: data
        }))
        
    }
 
}