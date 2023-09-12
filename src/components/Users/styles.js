import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 8,
        backgroundColor: "#fff",
        alignContent: "center",
        borderRadius: 8,
        marginBottom: 27,
        paddingHorizontal: 88,
    },
    userImage: {
        width: 100,
        height: 100,
        borderRadius: 25,
        marginRight: 10,
        marginBottom: 10, 
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#272727",
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
        fontWeight: "500",
    },
    buttonGradient: {
        width: 116, 
        padding: 15,
        borderRadius: 20, 
        marginTop: 20,
      },
});

export default styles;
