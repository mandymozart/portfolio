import { Object3DNode, extend } from '@react-three/fiber';
import { CustomMaterial } from './materials/CustomMaterial';
import { LineMaterial } from './materials/LineMaterial';

extend({ LineMaterial, CustomMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    lineMaterial: Object3DNode<LineMaterial, typeof LineMaterial>;
    customMaterial: Object3DNode<CustomMaterial, typeof CustomMaterial>;
  }
}
