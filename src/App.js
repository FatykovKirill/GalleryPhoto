import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-regular-svg-icons'; 

import './App.css';

const imageItem = [
  {
    id: 1,
    imageUrl: '/image/5Rv5CH4uNjig.jpg',
  },
  {
    id: 2,
    imageUrl: '/image/8QFQSqoYSPgh.jpg',
  },
  {
    id: 3,
    imageUrl: '/image/9FII64QceUKd.jpg',
  },
  {
    id: 4,
    imageUrl: '/image/aED19yBnL5.jpg',
  },
  {
    id: 5,
    imageUrl: '/image/CW6hSTDGLxxi.jpg',
  },
  {
    id: 6,
    imageUrl: '/image/FhLmT1gWBN5.jpg',
  },
  {
    id: 7,
    imageUrl: '/image/fLOheylmTs3T.jpg',
  },
  {
    id: 8,
    imageUrl: '/image/jiyQzAdsIOfX.jpg',
  },
  {
    id: 9,
    imageUrl: '/image/NGfLobURU9F8.jpg',
  },
  {
    id: 10,
    imageUrl: '/image/PZ5BXUv5FOLh.jpg',
  },
  {
    id: 11,
    imageUrl: '/image/qgEyGFfIESPZ.jpg',
  },
  {
    id: 12,
    imageUrl: '/image/R2m6Ld4K6mDy.jpg',
  },
  {
    id: 13,
    imageUrl: '/image/TPhmZodv1j.jpg',
  },
  {
    id: 14,
    imageUrl: '/image/wfQveVRjtMPP.jpg',
  },
  {
    id: 15,
    imageUrl: '/image/wNfSPUSYmPwy.jpg',
  },
  {
    id: 16,
    imageUrl: '/image/xXe0zcCE8SLc.jpg',
  },
  {
    id: 17,
    imageUrl: '/image/zr1uC0MVMcuE.jpg',
  },


]

const App = () => {
  return (
    <div>
      <div className='title'>
        <h1>midnight rendezvous</h1>
        <div className='subtitle'>
          <a href='https://t.me/FatykovKirill'>
        <FontAwesomeIcon icon={faPaperPlane} 
        className='icon' />
          </a>
        <p> Kirill Fatykov</p>
        </div>
      </div>
      <div className='image'>
        {imageItem.map((item) => (
          <img key={item.id}
            src={`${item.imageUrl}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
