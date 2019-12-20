
// import API from'../../api';

export function _customDirective(obj) {
    // console.log(obj);
    for(let key in obj) {
        let array = obj[key];
    
        array.forEach(r=>{
            r.directive.onUpdate();
        });
    }
}