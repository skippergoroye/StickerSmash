import { StyleSheet, Image } from "react-native";


export default function ImageViewer ({ placeholderImageSource, newImage }) {

    const imageSource = newImage !== null
    ? { uri: newImage }
    : placeholderImageSource;
    return (
       <Image source={imageSource} style={styles.image} />
    );
}



const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});