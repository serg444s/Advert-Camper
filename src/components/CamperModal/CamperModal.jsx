import Modal from "react-modal";
import css from "./CamperModal.module.css"

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("#root");

  const CamperModal = ({ item, modalIsOpen, closeModal }) => {

    // const ImageGallery = (urls) => {
    //   if (urls.length > 0 ) {
    //     return (urls.map((url, index) => (<img key={index} src={url} alt={`Image ${index + 1}`} />
    //       ))
    //   );
    //   }
      
    // };

    return (
      <div className={css.container}>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div className={css.gallery}>
      {item.gallery.length > 0 && item.gallery.map((url, index) => (
        <img key={index} src={url} alt={`Image ${index + 1}`} className={css.img}/>
      ))}
    </div>
          <p className={css.text}>Text{item.description}</p>
        </Modal>
      </div>
    );
  };
  
  export default CamperModal;