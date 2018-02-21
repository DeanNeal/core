export function _lazy(array) {
    array.forEach(item => {
        let fnName = item.attr.split(',');
        let elem = item.elem;
        let loader = document.createElement('div');
        let isLoading = false;
        loader.style.textAlign = 'center';
        loader.style.padding = '20px';
        loader.innerHTML = 'LOADING';
        elem.style.overflow = 'auto';
        // elem.style.height = '400px';
        let self = this;

        let onScrollChange = function  (e) {
            scrollCheck.call(self, e);
        };

        function scrollCheck(e) {
            if (!isLoading && e.target.scrollTop + 20 >= (e.target.scrollHeight - e.target.offsetHeight)) {
                elem.appendChild(loader);
                isLoading = true;
                if(this[fnName]){
                    this[fnName].call(this, {
                        complete: ()=> {
                            elem.removeChild(loader);
                            isLoading = false;
                        },
                        end: ()=> {
                            elem.removeChild(loader);
                            isLoading = false;
                            elem.removeEventListener('scroll', onScrollChange, false);
                        }
                    });
                } else {
                    throw new Error('Unknown method ' + fnName);
                }
            }
        }
   
        elem.addEventListener('scroll', onScrollChange, false);
    });
}