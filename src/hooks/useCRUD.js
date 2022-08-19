//Custom Hooks
import { useLocalStorage } from './useLocalStorage';


const useCRUD = () => {

    const event = new Event('localStorageChange');
    const { getItem, setItem } = useLocalStorage();
    let data;

    
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
            if(local && index > -1){
                data = getItem(local);
                return data[index];
            } else if(local && !index){
                return getItem(local) || [];
            };
            document.dispatchEvent(event);
        },
        
        crudUpdate: (local, index, updatedItem) => {
            if(local && index > -1 && updatedItem){
                data = getItem(local);
                data.splice(index, 1, updatedItem);
                setItem(local, data);
            };
            document.dispatchEvent(event);
        },
        
        crudDelete: (local, index) => {
            if(local && index > -1){
                data = getItem(local);
                data.splice(index, 1);
                setItem(local, data);
            };
            document.dispatchEvent(event);
        }

    };

};

export { useCRUD };