import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: width * .8,
        height: height * .4,
        objectFit: "contain",
    },
    title: {
        color: "#fff",
        fontSize: 28,
        marginLeft: 32,
        marginRight: 32,
        textAlign: "center",
    },
    text: {
        color: "#fff",
        fontSize: 14,
        marginLeft: 40,
        marginRight: 40,
        textAlign: "center",
    },
    buttonGradient: {
        width: 240, 
        padding: 15,
        borderRadius: 20, 
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      
    buttonText: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
        fontWeight: "500",
    },
});

export default styles;
