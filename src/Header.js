export default function Header({textFilter, stockFilter}){

    function setQuery(event){
        // TODO
    }
    function filterInStock(event){
        console.log({stockFilter})
        //setStockFilter(!stockFilter)
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