import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

export default function ProductTable({productJson}){
    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <ProductCategoryRow/>
                </tr>
                <tr>
                    <ProductRow/>
                </tr>
                
            </tbody>
        </table>
    )
}



{/* <tr>
                <td>
                    {productJson[0].price}     
                </td>
            </tr> */}