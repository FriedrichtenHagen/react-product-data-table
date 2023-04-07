export default function Header({textFilter, stockFilter, onStockFilterChange, onTextFilterChange}){



    return (
        <div className="header">
            <input placeholder="Enter your search terms" onChange={e => onTextFilterChange(e.target.value)}></input>
            <label>
            <input type="checkbox" onChange={event => onStockFilterChange(event.target.checked)} />
            Only show products in stock
            </label>
        </div>
    )
}

// Eventlistener is not working yet