//Custom Hooks
import { useLocalStorage } from './useLocalStorage';


const useCRUD = () => {

    const { getItem, setItem } = useLocalStorage();
    let data;

    return{
        
        crudCreate: (local, newItem) => {
            if(local && newItem){
                data = getItem(local) || [];
                data = [...data, newItem];
                setItem(local, data);
            };
        },

        crudRead: (local, index) => {
            if(local && index){
                data = getItem(local);
                return data[index];
            } else if(local && !index){
                return getItem(local) || [];
            };
        },

        crudUpdate: (local, index, updatedItem) => {
            if(local && index && updatedItem){
                data = getItem(local);
                data.splice(1, index, updatedItem);
                setItem(local, data);
            };
        },

        crudDelete: (local, index) => {
            if(local && (index || index === 0)){
                data = getItem(local);
                data.splice(index, 1);
                setItem(local, data);
                console.log(index)
            };
        }

    };

};

export { useCRUD };