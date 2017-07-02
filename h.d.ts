import { VNode, VNodeData } from './vnode';
export declare type VNodeChildren = Array<VNode | string | undefined | null>;
export declare function h(sel: string): VNode;
export declare function h(sel: string, data: VNodeData): VNode;
export declare function h(sel: string, text: string): VNode;
export declare function h(sel: string, children: VNodeChildren): VNode;
export declare function h(sel: string, data: VNodeData, text: string): VNode;
export declare function h(sel: string, data: VNodeData, children: VNodeChildren): VNode;
export default h;
