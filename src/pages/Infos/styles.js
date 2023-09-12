import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 85,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    border: 1,
    borderColor: "rgba(255, 255, 255)",
    padding: 40,

  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: "#fff",
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
    color: "#fff",
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
