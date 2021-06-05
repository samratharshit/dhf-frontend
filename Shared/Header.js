import React from "react"
import { StyleSheet, Image, SafeAreaView, View } from "react-native"

const Header = () => {
    return(
        <SafeAreaView style={styles.header}>
            <Image
                source={require("../assets/Logo.png")}
                resizeMode="contain"
                style={{ height: 51 }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        backgroundColor: "#f54748",
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center",
        padding: 14
    }
})

export default Header;