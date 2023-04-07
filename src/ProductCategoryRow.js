export default function ProductCategoryRow({category}){
    return(
        <tr className="categoryTitle">
            <th colSpan="2">{category}</th>
        </tr>
    )
}