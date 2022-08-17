const useLocalStorage = () => {

    const storage = window.localStorage;

    return{

        getItem: (item) => {
            return JSON.parse(storage.getItem(item));
        },
        setItem: (item, obj) => {
            storage.setItem(item, JSON.stringify(obj));
        },
        removeItem: (item) => {
            storage.removeItem(item);
        }

    };

};

export { useLocalStorage };