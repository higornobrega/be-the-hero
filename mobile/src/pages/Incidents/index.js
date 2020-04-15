import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import logoImg from '../../assets/logo.png'
export default function incidents() {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>.
                </Text>
            </View>
            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.description}>Escolha um dos casas abaixo e salve o dia</Text>
            
            <FlatList 
                data={[1,2,3,4,5]}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                style={styles.incidentList}
                renderItem={() => (
                    <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG: </Text>
                    <Text style={styles.incidentValue}>ACAPAN</Text>

                    <Text style={styles.incidentProperty}>Caso: </Text>
                    <Text style={styles.incidentValue}>Descrição do Caso</Text>

                    <Text style={styles.incidentProperty}>Valor: </Text>
                    <Text style={styles.incidentValue}>R$ 120,00</Text>
                    <TouchableOpacity 
                    style={styles.detailsButton}
                    onPress={()=>{}}
                    >
                        <Text style={styles.detailsButtonText}>
                            Ver mais detalher
                        </Text>
                        <Feather name="arrow-right" size={16} color="#E02041" />
                    </TouchableOpacity>

                </View>
                )}
            />
        </View>
    );
}