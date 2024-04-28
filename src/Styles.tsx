import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%',
      backgroundColor: '#301934',  
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        width: '100%',
    },
    timeContainer: {
      justifyContent: 'space-between',
      paddingHorizontal: 10,
    },
    artwork: {
        width: 300,
        height: 300,
        borderRadius: 30,
        marginTop: 20
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    desc: {
        fontSize: 20,
        color: 'white',
    },
    slider: {
        width: '100%',
        height: 20,
    }
})
