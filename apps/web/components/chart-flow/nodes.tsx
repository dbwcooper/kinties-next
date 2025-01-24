import { Node } from "@xyflow/react";

export const initialNodes: Node[] = [
  {
    id: 'node-1',
    type: 'nodeBasic',
    position: { x: 60, y: 0 },
    data: { value: 123, label: 'root' },
  },
  {
    id: 'node-2',
    type: 'nodeBasic',
    position: { x: 0, y: 80 },
    data: { label: 'node 2' },
  },
  {
    id: 'node-3',
    type: 'nodeBasic',
    position: { x: 100, y: 80 },
    data: { label: 'node 3' },
  },
];