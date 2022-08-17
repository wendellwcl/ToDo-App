//Packages
import { useEffect, useRef } from 'react';
import { BsXLg } from 'react-icons/bs';

//Css
import './Modal.css';


const Modal = ( { id, title, children } ) => {

    //Referenciando elementos
    const modalContentRef = useRef();

    //Checar se elemento possui overflow
    useEffect(() => {
        const modalContent = modalContentRef.current;

        if(modalContent.scrollHeight > 400){
            modalContent.classList.add('overflow');
        };
    });

    //Fechar Modal
    function handleCloseModal(e){
        if(id){
            const el = document.querySelector(`#${id}`);
            el.classList.remove('show');
        } else {
            let el = e.target;
            let parent = el.parentNode;
            while(!parent.classList.contains('modal')){
                parent = parent.parentNode;
            };
            parent.classList.remove('show');
        };
    };


    return(
        <div className='modal show' id={id}>
            <div className='fade' onClick={e => handleCloseModal(e)}></div>
            <div className='modal-dialog'>
                <div className='modal-header'>
                    <h5 className='modal-title'>
                        {title}
                    </h5>
                    <button type='button' className='btn-close-modal' onClick={e => handleCloseModal(e)}>
                        <BsXLg/>
                    </button>
                </div>
                <div className='modal-content' ref={modalContentRef}>
                    {children}
                </div>
            </div>
        </div>
    );

};

export default Modal;