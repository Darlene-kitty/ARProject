import ViroARSceneNavigator from '@reactvision/react-viro'
import arview from '../components/arview'
export default function ARLayout(){
    return(
         <ViroARSceneNavigator initialScene={{scene: arview}} style={{flex:1}}></ViroARSceneNavigator>
    )
      
}