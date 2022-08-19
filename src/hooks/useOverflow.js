const useOverflow = () => {

    return{
        checkOverflow: (el) => {
            const parent = el.parentNode;
            const parentCss = window.getComputedStyle(parent);
            const parentHeight = Number((parentCss.getPropertyValue('height')).replace('px', ''));
            const elScrollHeight = el.scrollHeight;
            if(elScrollHeight > parentHeight){
                parent.style.overflowY = 'scroll';
            } else {
                parent.style.overflowY = 'initial';
            };
        }
    };

};

export { useOverflow };