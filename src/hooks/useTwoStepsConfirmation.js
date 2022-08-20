//Packages
import { useContext } from 'react';

//Context
import { TwoStepsContext } from '../context/TwoStepsContext';

//Custom hooks
import { useCRUD } from './useCRUD';


const useTwoStepsVerification = () => {

    const { crudDelete } = useCRUD();
    const { local, setLocal, index, setIndex, action, setAction } = useContext(TwoStepsContext);


    return{
        twoStepsRequest: (local, index, action) => {
            document.querySelector('#two-steps-modal').classList.add('show');
            setLocal(local);
            setIndex(index);
            setAction(action);
        },

        twoStepsResponse: (response) => {
            if(response){
                switch(action){
                    case 'DELETE':
                        crudDelete(local, index);
                        break;
                    case 'COMPLETE':
                        crudDelete(local, index);
                        //CONTADOR ++
                        break;
                    default:
                        break;
                };
            };
            setLocal(null);
            setIndex(null);
            setAction(null);
        }

    };

};

export { useTwoStepsVerification };