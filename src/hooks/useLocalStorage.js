const useLocalStorage = () => {

    const storage = window.localStorage;

    return{

        getItem: (local) => {
            return JSON.parse(storage.getItem(local));
        },

        setItem: (local, obj) => {
            storage.setItem(local, JSON.stringify(obj));
        },
        
        removeItem: (local) => {
            storage.removeItem(local);
        }

    };

};

export { useLocalStorage };