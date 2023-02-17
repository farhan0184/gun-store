import './App.css';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import { CgCloseO } from 'react-icons/cg';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: "500px",
    width: "600px",
    overflow: "auto",
    
  },
};

function App() {
  // fetch data section
  const [guns , setGuns] = useState([])
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setGuns(data))
  },[])

  // save cart
  const [carts , setCarts] = useState([])
  function handleProductCart(product){
    const newCarts = [...carts,product];
    setCarts(newCarts)
  }

  // modal section
  const [modalIsOpen, setIsOpen] = useState(false);
  // modal open fuc
  function openModal() {
    setIsOpen(true);
  }
  // modal open func
  function closeModal() {
    setIsOpen(false);
  }

  // modal overflow
  return (
    <div>
       <Navbar carts={carts} openModal={openModal}></Navbar>
       <div className='container'>
          <div className='carts'>
          {
              guns.map(gun => <Cart func={handleProductCart} key={gun.id} gun={gun}></Cart>)
          }
       </div>
       </div>
       <Modal isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}>
          <button className='closeBtn' onClick={closeModal}>
                <CgCloseO size={25} color='black'></CgCloseO>
          </button>
          {carts.length == 0 &&(
            <div className='cart-warning'>
              <p>empty</p>
            </div>
          )}
          {
            carts.map((cart)=>(
                <div className='selected-cart'>
                   <div>
                     <img style={{width: '120px', height: '120px'}} src={cart.img} alt="" />
                   </div>
                   <div style={{paddingLeft: '20px'}}>
                    <h2>{cart.name}</h2>
                    <h3>Price: {cart.price}</h3>
                   </div>
                </div>
            ))
          }
       </Modal>
    </div>
  );
}

export default App;
