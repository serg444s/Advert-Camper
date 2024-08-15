import Modal from "react-modal";
import css from "./CamperModal.module.css"
import ReviewList from "../ReviewList/ReviewList";
import Features from "../Features/Features";
import { useState } from "react";

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "40px",
      width: "980px",
      height: "600px",

    },
  };

  Modal.setAppElement("#root");

  const CamperModal = ({ item, modalIsOpen, closeModal }) => {

    const [visible, setVisible] = useState("")

    const onReviews = () => {
      setVisible("reviews")
    }

    const onFeatures = () => {
      setVisible("features")
    }

    const ImageGallery = (urls) => {
      if (urls.length > 0 ) {
        return (urls.map((url, index) => (<div key={index} className={css.imgwrap}><img src={url} alt={`Image ${index + 1}`} className={css.img}/></div>
          ))
      );
      } else {
        return <div className={css.imgwrap}><img src="https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg" alt ="picture not found" className={css.img}></img></div>
      }
    };

    return (
      <div className={css.container}>
 <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        
        <div className={css.gallery}>
      {item.gallery.length > 0 && ImageGallery(item.gallery)}
    </div>
          <p className={css.text}>Text{item.description}</p>
          <div className={css.btn}>
            <button onClick={onReviews}>Reviews</button>
            <button onClick={onFeatures}>Features</button>
          </div>
          <div className={css.line}></div>
          {visible === "reviews" && <ReviewList reviews={item.reviews}/>}
          {visible === "features" && <Features item={item}/>}
        </Modal>
        </div>
       
    );
  };
  
  export default CamperModal;