import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, ScrollView, FlatList, TouchableOpacity, SectionList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const destaquesData = [
  { id: '1', image: require('./assets/bolo-cenoura-metade.png'), title: 'Metade Cenoura com Cobertura', price: 'R$ 30,00' },
  { id: '2', image: require('./assets/bolo-cenoura-inteiro.png'), title: 'Bolo Cenoura com cobertura', price: 'R$ 52,00' },
  { id: '3', image: require('./assets/bolo-formigueiro.png'), title: 'Bolo de Formigueiro', price: 'R$ 34,00' },
];

const profileSections = [
    {
        data: [
          { id: '1', icon: '💬', title: 'Conversas', subtitle: 'Meu histórico de conversas' },
          { id: '2', icon: '🔔', title: 'Notificações', subtitle: 'Minha central de notificações' },
          { id: '3', icon: '👤', title: 'Dados da conta', subtitle: 'Minhas informações da conta' },
        ],
    },
    {
        data: [
          { id: '4', icon: '💳', title: 'Pagamentos', subtitle: 'Meus saldos e cartões' },
        ],
    },
    {
        data: [
          { id: '5', icon: '♡', title: 'Clube iFood', subtitle: 'Meus benefícios exclusivos' },
          { id: '6', icon: '🎟️', title: 'Cupons', subtitle: 'Meus cupons de desconto' },
          { id: '7', icon: '⭐', title: 'Comunidade iFood', subtitle: 'Junte-se a nós' },
          { id: '8', icon: '🔑', title: 'Código de entrega', subtitle: null },
        ],
    },
];

const TelaBolos = () => (
    <ScrollView style={styles.screenContainer}>
        <Image source={require('./assets/header-bolo.jpg')} style={styles.bolosHeaderImage} />
        <View style={styles.bolosContent}>
            <Text style={styles.bolosTitle}>Bolos do Pato - Águas não tão Claras</Text>
            <View style={styles.bolosInfoRow}>
                <Text>⭐ 49.0/10 (1M avaliações)</Text>
                <Text> • Nível 10</Text>
            </View>
            <Text style={styles.bolosDeliveryInfo}>Entrega Hoje, 35-45 min • Grátis</Text>

            <View style={styles.destaquesContainer}>
                <Text style={styles.destaquesTitle}>Destaques</Text>
                <FlatList
                    data={destaquesData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.destaqueCard}>
                            <Image source={item.image} style={styles.destaqueImage} />
                            <Text style={styles.destaqueTitle}>{item.title}</Text>
                            <Text style={styles.destaquePrice}>{item.price}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    </ScrollView>
);

const TelaMercadoPago = () => (
    <View style={[styles.screenContainer, { backgroundColor: '#fff' }]}>
        <TouchableOpacity style={styles.mpCloseButton}>
            <Text style={styles.mpCloseButtonText}>X</Text>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.mpScrollView}>
            <Image source={require('./assets/celular-cartao.png')} style={styles.mpImage} />
            <Text style={styles.mpTitle}>Peça seu Cartão de Crédito Mercado Pago e aproveite essas vantagens exclusivas:</Text>
            <View style={styles.mpBenefits}>
                <Text style={styles.mpBenefitText}>- Parcele suas compras em até 18x sem juros no Mercado Livre</Text>
                <Text style={styles.mpBenefitText}>- Anuidade Grátis</Text>
                <Text style={styles.mpBenefitText}>- Segurança e controle: acompanhe seus gastos pelo App, garantindo controle de todas suas transações.</Text>
            </View>
        </ScrollView>
        <TouchableOpacity style={styles.mpButton}>
            <Text style={styles.mpButtonText}>Peça já</Text>
        </TouchableOpacity>
    </View>
);

const TelaPerfil = () => (
    <View style={[styles.screenContainer, { backgroundColor: '#f7f7f7' }]}>
        <SectionList
            sections={profileSections}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={() => (
                <View style={styles.profileHeader}>
                    <Image source={require('./assets/perfil-diego.png')} style={styles.profileAvatar} />
                    <View>
                        <Text style={styles.profileName}>Diego Rodrigues</Text>
                        <Text style={styles.profileAction}>Adicionar telefone de acesso</Text>
                    </View>
                </View>
            )}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.profileItem}>
                    <Text style={styles.profileItemIcon}>{item.icon}</Text>
                    <View style={styles.profileItemTextContainer}>
                        <Text style={styles.profileItemTitle}>{item.title}</Text>
                        {item.subtitle && <Text style={styles.profileItemSubtitle}>{item.subtitle}</Text>}
                    </View>
                    <Text style={styles.profileItemChevron}>›</Text>
                </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={styles.profileSeparator} />}
            SectionSeparatorComponent={() => <View style={styles.profileSectionSeparator} />}
        />
    </View>
);

export default function App() {
    const [activeScreen, setActiveScreen] = useState('Bolos');

    const renderScreen = () => {
        switch (activeScreen) {
            case 'Bolos':
                return <TelaBolos />;
            case 'MercadoPago':
                return <TelaMercadoPago />;
            case 'Perfil':
                return <TelaPerfil />;
            default:
                return <TelaBolos />;
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
                <StatusBar barStyle="dark-content" />
                <View style={styles.selectorContainer}>
                    <TouchableOpacity onPress={() => setActiveScreen('Bolos')} style={[styles.selectorButton, activeScreen === 'Bolos' && styles.selectorActive]}>
                        <Text style={[styles.selectorText, activeScreen === 'Bolos' && styles.selectorTextActive]}>Tela 1: Bolos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActiveScreen('MercadoPago')} style={[styles.selectorButton, activeScreen === 'MercadoPago' && styles.selectorActive]}>
                        <Text style={[styles.selectorText, activeScreen === 'MercadoPago' && styles.selectorTextActive]}>Tela 2: Cartão</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActiveScreen('Perfil')} style={[styles.selectorButton, activeScreen === 'Perfil' && styles.selectorActive]}>
                        <Text style={[styles.selectorText, activeScreen === 'Perfil' && styles.selectorTextActive]}>Tela 3: Perfil</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    {renderScreen()}
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    selectorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    selectorButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        backgroundColor: '#eee',
    },
    selectorActive: {
        backgroundColor: '#EA1D2C',
    },
    selectorText: {
      color: '#333',
      fontWeight: 'bold',
    },
    selectorTextActive: {
      color: '#fff',
    },
    content: {
        flex: 1,
    },
    screenContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    bolosHeaderImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    bolosContent: {
        padding: 15,
        backgroundColor: '#fff',
    },
    bolosTitle: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    bolosInfoRow: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center',
    },
    bolosDeliveryInfo: {
        color: 'gray',
    },
    destaquesContainer: {
        marginTop: 20,
    },
    destaquesTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    destaqueCard: {
        width: 150,
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    destaqueImage: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
    },
    destaqueTitle: {
        paddingHorizontal: 8,
        paddingTop: 8,
        fontSize: 14,
    },
    destaquePrice: {
        paddingHorizontal: 8,
        paddingBottom: 8,
        fontWeight: 'bold',
        color: '#555',
    },
    mpCloseButton: {
        position: 'absolute',
        top: 15,
        left: 15,
        zIndex: 1,
    },
    mpCloseButtonText: {
        fontSize: 24,
        color: '#888',
    },
    mpScrollView: {
        alignItems: 'center',
        padding: 20,
        paddingTop: 60,
    },
    mpImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 30,
    },
    mpTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    mpBenefits: {
        alignSelf: 'flex-start',
        marginBottom: 80,
    },
    mpBenefitText: {
        fontSize: 16,
        color: '#555',
        marginBottom: 15,
    },
    mpButton: {
        backgroundColor: '#009ee3',
        padding: 15,
        borderRadius: 8,
        margin: 20,
        alignItems: 'center',
    },
    mpButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    profileAvatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    profileAction: {
        color: '#EA1D2C',
    },
    profileItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    profileItemIcon: {
        fontSize: 20,
        marginRight: 20,
        width: 25,
        textAlign: 'center',
    },
    profileItemTextContainer: {
        flex: 1,
    },
    profileItemTitle: {
        fontSize: 16,
    },
    profileItemSubtitle: {
        fontSize: 12,
        color: 'gray',
    },
    profileItemChevron: {
        fontSize: 20,
        color: '#EA1D2C',
    },
    profileSeparator: {
        height: 1,
        backgroundColor: '#f0f0f0',
        marginLeft: 65,
    },
    profileSectionSeparator: {
        height: 10,
    },
});