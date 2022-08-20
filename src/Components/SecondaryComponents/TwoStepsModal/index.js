//Packages
import { useContext, useState , useEffect} from 'react';

//Css
import './TwoStepsModal.css';

//Components
import Modal from '../../MainComponents/Modal';

//Context
import { TwoStepsContext } from '../../../context/TwoStepsContext';

//Custom hooks
import { useTwoStepsVerification } from '../../../hooks/useTwoStepsConfirmation';


const TwoStepsModal = () => {

    const { action } = useContext(TwoStepsContext);
    const { twoStepsResponse } = useTwoStepsVerification();

    const [ message, setMessage ] = useState();

    //Verificar ação solicitada para setar menssagem adequada
    useEffect(() => {
        switch(action){
            case 'DELETE':
                setMessage('Você realmente quer deletar esta tarefa?');
                break;
            case 'COMPLETE':
                setMessage('Confirmar a conclusão da tarefa irá retirá-la da lista.');
                break;
            default:
                break;
        };
    }, [action]);


    //Fechar modal
    function handleClose(e){
        const el = e.target;
        let parent = el.parentNode;
        while(!parent.classList.contains('modal')){
            parent = parent.parentNode;
        };
        parent.classList.remove('show');
    };

    //Enviar resposta a requisição
    function handleResponseRequest(e, response){
        twoStepsResponse(response);
        handleClose(e);
    };


    return(
        <Modal id={'two-steps-modal'} title='Confirmar ação'>
            <p id='two-steps-message'>{message}</p>
            <div id='two-steps-modal-btn-container'>
                <button type='button' className='btn' onClick={e => handleResponseRequest(e, false)}>Voltar</button>
                <button type='button' className='btn' onClick={e => handleResponseRequest(e, true)}>Confirmar</button>
            </div>
        </Modal>
    );

};

export default TwoStepsModal;