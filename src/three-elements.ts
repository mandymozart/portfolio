import { CustomMaterial } from '@/materials/CustomMaterial';
import { LineMaterial } from '@/materials/LineMaterial';
import { Object3DNode, extend } from '@react-three/fiber';

extend({ LineMaterial, CustomMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    lineMaterial: Object3DNode<LineMaterial, typeof LineMaterial>;
    customMaterial: Object3DNode<CustomMaterial, typeof CustomMaterial>;
  }
}
