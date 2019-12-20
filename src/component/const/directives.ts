import { IDirectiveName } from "src/interfaces";

export const DIRECTIVES_NAMES: { name: string, alias: string }[] = [
    'for',
    'style',
    'value',
    'params',
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
].map((r): IDirectiveName => {
    return {
        name: r,
        alias: 'bind-' + r
    }
});