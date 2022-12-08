import {Link} from 'react-router-dom';

function Card(prop) {
  return(
    <div className='container-fluid px-0 gx-0 mx-0 mt-4'>
      <div className='card'>
      <img src={prop.img} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>Card title</h5>
        <p className='card-text'>Some quick sample</p>
        <Link to='/' className='btn btn-primary'>Go somewhere</Link>
      </div>
      </div>
    </div>
  )
}

export default Card;