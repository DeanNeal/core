import { BaseComponent } from "./component/component";

export interface IComponentParams {
   selector: string;
   template: any;
   shadowDom?: boolean;
   style?: any;
   hostListeners?: any;
   hostAttrs?: any;
}

export interface IDecoratorParams {
   selector: string;
}
export interface IInput {
   sourceName: string;
   propertyKey: string;
}
export interface IDirectiveName {
   name: string;
   alias: string;
}

export interface IBaseComponent<T> {
   new(): T;
   selector: string;
   register: any;
}

export interface IOptions {
   template: string;
   hostListeners: { [key: string]: any };
   hostAttrs: { [key: string]: any };
}

export interface IBootstrapOptions {
   components?: IBaseComponent<BaseComponent>[];
   directives?: any;
   router?: any;
}

export interface ILoopParams {
   iterator: string;
   value?: any;
   index: number;
   indexName: string;
   parent: ILoopParams;
}

export interface IInterpolationItem {
   node: Text;
   value: string;
}

export interface IEvent {
   fnName: string;
   event: string;
   el: HTMLElement;
   f: (e: Event) => any;
}

export interface IDirectiveParams {
   elem: HTMLElement;
   attr?: string;
   attrs?: SimpleObject[];
   items?: any[];
   parent?: HTMLElement;
   cached?: [];
   comment?: Comment;
   rootCached?: string;
   interpolationArray?: { [key: string]: any[] }[];
   loopParams?: ILoopParams[];
   directives?: { [key: string]: any[] }[];
   prevValue?: string[];
}

export type SimpleObject = { [key: string]: string };