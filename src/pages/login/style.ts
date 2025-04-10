import { Dimensions, StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const style = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },

    boxTop: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },

    boxMid: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
       paddingHorizontal: 37,


    },

    boxBottom: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
       alignItems: 'center',
        justifyContent: 'center'


    },

    logo: {
        width: 100,
        height: 100,


    },

    text: {
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 18,


    },

    

    BoxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: themas.colors.lightGray,
        borderColor: themas.colors.lightGray,
        shadowColor: "blue",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.30,
        shadowRadius: 5,
        elevation: 10,

    },

    input: {
        width: '90%',
        height: '100%',
        borderRadius: 40,


    },

    boxIcon: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    },

    button: {
        width: 200,
        height: 40,
        borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 40,
        borderColor: themas.colors.lightGray,
        backgroundColor: themas.colors.blueLigth,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        shadowColor: "blue",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.20,
        shadowRadius: 4.65,
        elevation: 7,


    },


    textButton: {
        fontSize: 16,
        fontWeight: 'bold',

    },


    titleInput: {
        marginLeft: 5,
        marginTop: 20,
        color:'black'
    },
    textBottom: {
        fontSize: 16,
        color: themas.colors.gray
    },
    textBottomCreate: {
        fontSize: 16,
        color: themas.colors.primary
    }



})