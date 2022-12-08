import Card from './Card';
import abs4 from '../assets/img/abs4.jpg';
// import abs2 from '../assets/img/abs2.jpg';
// import abs3 from '../assets/img/abs3.jpg';

function Cards() {
  return(
    <div className='container-fluid align-items-center text-center'>
      <div className='row justify-content-center text-center'>
        <div className='col'>
          <Card img={abs4}/>
        </div>
        <div className='col'>
          <Card img={abs4}/>
        </div>
        <div className='col'>
          <Card img={abs4}/>
        </div>
        <div className='col'>
          <Card img={abs4}/>
        </div>
        <div className='col'>
          <Card img={abs4}/>
        </div>
        <div className='col'>
          <Card img={abs4}/>
        </div>
      </div>
    </div>
  )
}

export default Cards;