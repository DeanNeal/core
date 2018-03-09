export const DIRECTIVES_NAMES = [
    'for',
    'style',
    'value',
    'input',
    'model',
    'if',
    'class',
    'link',
    'attr',
    'on',
    'pattern',
    'outside',
    'ref',
    'form-group',
    'dropdown',
    'lazy-load'
].map(r=> {
    return {
        name: r,
        alias: 'bind-' + r
    }
});