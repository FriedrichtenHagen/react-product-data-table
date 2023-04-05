export default function Header(){

    function setQuery(event){
        // TODO
    }
    function filterInStock(event){
        console.log("filter by in stock")
    }

    return (
        <div className="header">
            <input placeholder="Enter your search terms" onChange={event => setQuery(event.target.value)}></input>
            <label>
            <input type="checkbox" onChange={event => filterInStock(event)} />
            Only show products in stock
            </label>
        </div>
    )
}