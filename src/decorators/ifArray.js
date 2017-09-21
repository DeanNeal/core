export default function IfArray(Class) {
    return function(data) {
        if (Array.isArray(data) || !data) {
            let instance = new Class(data);
            instance._data = data || [];
            return instance; 
        } else {
            throw new Error('Should be an Array');
        }
    }
}