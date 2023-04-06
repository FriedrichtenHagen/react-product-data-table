export default function ProductRow({product, key}){
    return(
        <tr>
            <td>
                {product.name}
            </td>
            <td>
                {product.price}
            </td>
        </tr>

    )
}