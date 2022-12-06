import Card from './Card';
import abs4 from '../assets/img/abs4.jpg';
// import abs2 from '../assets/img/abs2.jpg';
// import abs3 from '../assets/img/abs3.jpg';

function Cards() {
  return(
    <div className='container-fluid' style={{display: 'inline-flex'}}>
      
        <Card img={abs4}/>
        <Card img={abs4}/>
        <Card img={abs4}/>
        <Card img={abs4}/>
        <Card img={abs4}/>
        <Card img={abs4}/>
      
    </div>
  )
}

export default Cards;