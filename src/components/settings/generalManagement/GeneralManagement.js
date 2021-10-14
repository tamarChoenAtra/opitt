import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../header/Header';
import {
    Text,
    FlatList,
    ScrollView,
    TouchableOpacity,
    View,
    StyleSheet
} from 'react-native';
import styles from '../../../styles/Styles';
import { navigateScreen } from '../../../routes/routes';
import Row from '../../genericComponents/Row';
import ArrowBack from '../../../assets/arrowBack.svg'

export default (props) => {
    const { t } = useTranslation();
    const generalManagement = 'generalManagement'.toString();
    const jsonSetting = [
        {
            item: t(`${generalManagement}.chooseLanguage`),
            navigate: 'ChooseLanguage'
        },
        {
            item: t(`${generalManagement}.notificationsManagement`),
            navigate: 'NotificationsManagement'
        },
        {
            item: t(`${generalManagement}.about`),
            navigate: 'About'
        },

    ]
    const renderItem = ({ item }) => {
        return (
            <>
                <TouchableOpacity
                    style={[_styles.item]}
                    onPress={() =>
                        // alert(item.navigate)
                        navigateScreen(props, item.navigate)
                    }
                >
                    <Text style={[_styles.itemTxt]}>
                        {item.item}
                    </Text>
                </TouchableOpacity>
                <View style={styles.headerBottomDivider}></View>
            </>
        )
    }
    const { navigation } = props;
    return (
        <>
            <Header
                {...props}
                headerRightElement={
                    <Row style={_styles.row}>
                        <Text style={styles.headerWithTitle}>
                            {t(`${generalManagement}.title`)}
                        </Text>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack();
                        }}>
                            <ArrowBack />
                        </TouchableOpacity>
                    </Row>
                }
            />
            <ScrollView>
                <FlatList
                    data={jsonSetting}
                    renderItem={renderItem}
                    keyExtractor={(o, index) => index}
                />
            </ScrollView>
        </>
    )
}

const _styles = StyleSheet.create(
    {
        item: {
            justifyContent: 'center',
            height: 65
        },
        row: {
            alignItems: 'center'
        },
        itemTxt: {
            textAlign: 'right',
            marginRight: '5%',
            fontWeight: 'bold',
            fontSize: 16,
            lineHeight: 20
        }
    }
)