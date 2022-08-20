//Packages
import { useContext } from 'react';

//Context
import { TwoStepsContext } from '../context/TwoStepsContext';
import { TasksContext } from '../context/TasksContext';

//Custom hooks
import { useCRUD } from './useCRUD';
import { useLocalStorage } from './useLocalStorage';


const useTwoStepsVerification = () => {

    const { getItem, setItem } = useLocalStorage();
    const { crudDelete } = useCRUD();
    const { local, setLocal, index, setIndex, action, setAction } = useContext(TwoStepsContext);
    const { setCompleteTasksCount } = useContext(TasksContext);


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
                        const count = getItem('completeTasksCount') || 0;
                        setItem('completeTasksCount', (count + 1));
                        setCompleteTasksCount(count + 1);
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