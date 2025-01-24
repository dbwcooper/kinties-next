import { Node } from "@xyflow/react";

// export const initialNodes: Node[] = [
//   {
//     id: 'node-1',
//     type: 'nodeBasic',
//     position: { x: 60, y: 0 },
//     data: { value: 123, label: 'root' },
//   },
//   {
//     id: 'node-2',
//     type: 'nodeBasic',
//     position: { x: 0, y: 80 },
//     data: { label: 'node 2' },
//   },
//   {
//     id: 'node-3',
//     type: 'nodeBasic',
//     position: { x: 100, y: 80 },
//     data: { label: 'node 3' },
//   },
// ];


export const initialNodes: Node[] = [
  {
    id: 'A',
    type: 'group',
    position: { x: 0, y: 0 },
    data: { label: 'A'},
    style: {
      width: 170,
      height: 140,
    },
  },
  {
    id: 'A-1',
    type: 'nodeBasic',
    data: { label: 'A1' },
    position: { x: 10, y: 10 },
    parentId: 'A',
    extent: 'parent',
  },
  {
    id: 'A-2',
    type: 'nodeBasic',
    data: { label: 'A2' },
    position: { x: 10, y: 90 },
    parentId: 'A',
    extent: 'parent',
  },
  {
    id: 'B',
    type: 'nodeBasic',
    position: { x: -100, y: 200 },
    data: { label: 'B' },
  },
  {
    id: 'C',
    type: 'nodeBasic',
    position: { x: 100, y: 200 },
    data: { label: 'C' },
  },
]