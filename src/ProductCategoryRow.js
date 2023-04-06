export default function ProductCategoryRow({category, key}){
    return(
        <tr className="categoryTitle">
            <th colspan="2">{category}</th>
        </tr>
    )
}