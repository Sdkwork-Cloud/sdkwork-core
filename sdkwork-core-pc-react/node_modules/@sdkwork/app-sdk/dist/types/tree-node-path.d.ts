import { PathNode } from './path-node';
export interface TreeNodePath {
    nodes?: PathNode[];
    level?: number;
    depth?: number;
    pathIds?: number[];
    parentNode?: PathNode;
    rootNode?: PathNode;
    pathName?: string;
    currentNode?: PathNode;
}
//# sourceMappingURL=tree-node-path.d.ts.map