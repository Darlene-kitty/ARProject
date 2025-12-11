import {
  ViroAmbientLight,
  ViroARSceneNavigator,
  ViroBox,
  ViroNode,
  ViroScene,
  ViroText,
} from '@viro-community/react-viro';
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { groupMembers } from '../components/MembersList';

// Scène AR avec useState pour gérer l'état
const ARSceneComponent = () => {
  const [cubeVisible, setCubeVisible] = useState(true);
  const [emojiVisible, setEmojiVisible] = useState(true);
  const [planeDetected, setPlaneDetected] = useState(false);

  return (
    <ViroScene>
      <ViroAmbientLight color="#ffffff" />

      {/* Liste des membres affichée en AR */}
      <ViroNode position={[0, 0, -3]}>
        <ViroText
          text="Groupe 4 - Membres:"
          position={[0, 1, 0]}
          scale={[0.3, 0.3, 0.3]}
          style={{
            color: "#007AFF",
            fontFamily: "Arial",
            fontSize: 40
          }}
        />
        {groupMembers.map((member, index) => (
          <ViroText
            key={index}
            text={`${index + 1}. ${member}`}
            position={[0, 0.8 - (index * 0.15), 0]}
            scale={[0.25, 0.25, 0.25]}
            style={{
              color: "#333333",
              fontFamily: "Arial",
              fontSize: 35
            }}
          />
        ))}
      </ViroNode>

      {/* Objet 3D (Cube coloré) - Plan Vertical */}
      {/* minHeight: 0.5, minWidth: 0.5, alignment: Vertical */}
      {cubeVisible && (
        <ViroNode position={[-1, 0, -2]}>
          <ViroBox
            position={[0, 0, 0]}
            scale={[0.3, 0.3, 0.3]}
            height={1}
            width={1}
            length={1}
            onClick={() => {
              setCubeVisible(!cubeVisible);
              setPlaneDetected(true);
            }}
          />
          <ViroText
            text="Objet 3D (Plan Vertical)"
            position={[0, -0.3, 0]}
            scale={[0.15, 0.15, 0.15]}
            style={{
              color: "#007AFF",
              fontFamily: "Arial",
              fontSize: 20
            }}
          />
          <ViroText
            text="minH:0.5 minW:0.5"
            position={[0, -0.45, 0]}
            scale={[0.12, 0.12, 0.12]}
            style={{
              color: "#666666",
              fontFamily: "Arial",
              fontSize: 15
            }}
          />
        </ViroNode>
      )}

      {/* Emoji 😂 sur Plan Horizontal */}
      {/* minHeight: 0.7, maxWidth: 0.7, alignment: Horizontal */}
      {emojiVisible && (
        <ViroNode position={[1, -0.5, -2]}>
          <ViroText
            text="😂"
            position={[0, 0, 0]}
            scale={[1.5, 1.5, 1.5]}
            style={{
              fontSize: 100
            }}
            onClick={() => setEmojiVisible(!emojiVisible)}
          />
          <ViroText
            text="Plan Horizontal"
            position={[0, -0.3, 0]}
            scale={[0.15, 0.15, 0.15]}
            style={{
              color: "#FF6B6B",
              fontFamily: "Arial",
              fontSize: 20
            }}
          />
          <ViroText
            text="minH:0.7 maxW:0.7"
            position={[0, -0.45, 0]}
            scale={[0.12, 0.12, 0.12]}
            style={{
              color: "#666666",
              fontFamily: "Arial",
              fontSize: 15
            }}
          />
        </ViroNode>
      )}

      {/* Instructions interactives */}
      <ViroText
        text="Touchez les objets pour interagir"
        position={[0, -1, -2]}
        scale={[0.2, 0.2, 0.2]}
        style={{
          color: "#FF9500",
          fontFamily: "Arial",
          fontSize: 18
        }}
      />

      {/* Indicateur de détection */}
      {planeDetected && (
        <ViroText
          text="✓ Plan détecté!"
          position={[0, -1.3, -2]}
          scale={[0.15, 0.15, 0.15]}
          style={{
            color: "#34C759",
            fontFamily: "Arial",
            fontSize: 16
          }}
        />
      )}
    </ViroScene>
  );
};

// Composant principal de la page AR - EXPORT PAR DÉFAUT
export default function ARScreen() {
  const [showAR, setShowAR] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>Chargement de l'AR...</Text>
        </View>
      ) : (
        showAR && (
          <ViroARSceneNavigator
            autofocus={true}
            initialScene={{
              scene: ARSceneComponent,
            }}
            style={styles.arView}
          />
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  arView: {
    flex: 1,
  },
  loadingText: {
    color: '#fff',
    marginTop: 20,
    fontSize: 16,
  },
});
