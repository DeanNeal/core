export default function ifObject(Class) {
    return function(data) {
        if ((typeof data === 'object' &&  Array.isArray(data) === false ) || !data) {
            let instance = new Class(data);
            instance._data = data || {};
            return instance; 
        } else {
            throw new Error('Should be an Object');
        }
    }
}
