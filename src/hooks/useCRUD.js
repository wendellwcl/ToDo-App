//Custom Hooks
import { useLocalStorage } from './useLocalStorage';


const useCRUD = () => {

    
    const { getItem, setItem } = useLocalStorage();
    let data;

    const event = new Event('localStorageChange');
    
    return{
        
        crudCreate: (local, newItem) => {
            if(local && newItem){
                data = getItem(local) || [];
                data = [...data, newItem];
                setItem(local, data);
                document.dispatchEvent(event);
            };
        },

        crudRead: (local, index) => {
            if(local && index){
                data = getItem(local);
                return data[index];
            } else if(local && !index){
                return getItem(local) || [];
            };
            document.dispatchEvent(event);
        },
        
        crudUpdate: (local, index, updatedItem) => {
            if(local && index && updatedItem){
                data = getItem(local);
                data.splice(1, index, updatedItem);
                setItem(local, data);
            };
            document.dispatchEvent(event);
        },
        
        crudDelete: (local, index) => {
            if(local && (index !== null || index !== undefined)){
                data = getItem(local);
                data.splice(index, 1);
                setItem(local, data);
            };
            document.dispatchEvent(event);
        }

    };

};

export { useCRUD };