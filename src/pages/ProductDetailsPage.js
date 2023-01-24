import {Link, useParams} from 'react-router-dom'


const ProductDetails = (props) => {

    const params = useParams();

    return (
        <div>
            <h1>Product Details Page</h1>
            {params.productId}
            <p><Link to=".." relative="path">Back</Link></p>
            <p><Link to=".." relative="route">Back</Link></p>
        </div>
    );
}

export default ProductDetails;