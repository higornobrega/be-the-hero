import React from 'react';
import { Feather } from '@expo/vector-icons';
import {useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
export default function detail() {
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041"/>
                </TouchableOpacity>
                </View>
                <View style={styles.incident}>
                    <Text style={[styles.incidentProperty, {marginTop:0}]}>ONG: </Text>
                    <Text style={styles.incidentValue}>ACAPAN</Text>

                    <Text style={styles.incidentProperty}>Caso: </Text>
                    <Text style={styles.incidentValue}>Descrição do Caso</Text>

                    <Text style={styles.incidentProperty}>Valor: </Text>
                    <Text style={styles.incidentValue}>R$ 120,00</Text>
                </View>
                <View style={styles.contactBox}>
                    <Text style={styles.heroTitle}>Salve o dia!</Text>
                    <Text style={styles.heroTitle}>Seja o herói desse caso:</Text>

                    <Text style={styles.heroDescription}>Entre em contato:</Text>
                    
                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action}  onPress={() => {}}>
                            <Text style={styles.actionText}>WhatsApp</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} onPress={() => {}}>
                            <Text style={ styles.actionText}>email</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    );
}