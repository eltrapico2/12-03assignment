import Card from './Card';
import abs4 from '../assets/img/abs4.jpg';
// import abs2 from '../assets/img/abs2.jpg';
// import abs3 from '../assets/img/abs3.jpg';

function Cards() {
  return(
    <div className='container-fluid text-center'>
      <div className='row row-cols-1 row-cols-sm-1 row-cols-md-4 row-cols-lg-6'>
        <Card img={abs4}/>
        <Card img={abs4}/>
        <Card img={abs4}/>
        <Card img={abs4}/>
        <Card img={abs4}/>
        <Card img={abs4}/>
      </div>
    </div>
  )
}

export default Cards;