declare module '@reactvision/react-viro' {
  import { Component } from 'react';
  import { ViewStyle } from 'react-native';

  export interface ViroSceneProps {
    children?: React.ReactNode;
  }

  export interface ViroTextProps {
    text: string;
    position: [number, number, number];
    scale?: [number, number, number];
    style?: {
      color?: string;
      fontFamily?: string;
      fontSize?: number;
    };
  }

  export interface ViroAmbientLightProps {
    color: string;
  }

  export interface ViroARSceneNavigatorProps {
    initialScene: {
      scene: () => JSX.Element;
    };
    style?: ViewStyle;
    children?: React.ReactNode;
  }

  export class ViroScene extends Component<ViroSceneProps> {}
  export class ViroText extends Component<ViroTextProps> {}
  export class ViroAmbientLight extends Component<ViroAmbientLightProps> {}
  export default class ViroARSceneNavigator extends Component<ViroARSceneNavigatorProps> {}
}
