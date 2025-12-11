import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

// Liste des membres du groupe 4
export const groupMembers = [
    'BOUGONG',
    'KOUANG',
    'MELONG',
    'SIMO'
];

interface MembersListProps {
    title?: string;
}

export default function MembersList({ title = "Membres du Groupe 4" }: MembersListProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <ScrollView style={styles.listContainer}>
                {groupMembers.map((member, index) => (
                    <View key={index} style={styles.memberItem}>
                        <Text style={styles.memberNumber}>{index + 1}.</Text>
                        <Text style={styles.memberName}>{member}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#007AFF',
        marginBottom: 15,
        textAlign: 'center',
    },
    listContainer: {
        maxHeight: 200,
    },
    memberItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    memberNumber: {
        fontSize: 16,
        fontWeight: '600',
        color: '#666',
        marginRight: 10,
        width: 25,
    },
    memberName: {
        fontSize: 18,
        color: '#333',
        fontWeight: '500',
    },
});
