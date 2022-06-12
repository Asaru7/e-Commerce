import { useParams } from 'react-router-dom';

function ProductScreen (){
  const params = useParams();
  const {slug} = params;
  return(
  <div className='slug'>
    <h1>{slug}</h1>
    </div>
    )
}
export default ProductScreen;