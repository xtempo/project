import { Text, View } from "./Themed";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { FontAwesome } from '@expo/vector-icons';
import { MonoText } from "./StyledText";

type Stock = {
    name: String;
    symbol: String;
    close: String;
    percent_change: String;
}

type StockListItem = {
    stock: Stock
}

export default function StockListItem({ stock }: StockListItem) {
   
//   here we are converting the stock.percent_change number
//   which is in string and we want in number
    const change = Number.parseFloat(stock.percent_change);
   
   
   
    return (
        <View style={style.constainer}>

            {/* now are spliting the container two */}
            {/* Left container */}
            <View style={{flex: 1 , gap: 5}}>
                <Text style={style.symbol}>{stock.symbol} <FontAwesome name="star-o" size={18} color="black" />
                </Text>
                <Text style={{ color: 'gray' }}>{stock.name}</Text>
            </View>

            {/*now we add stock price close and change in persentage  */}
            {/* Right container */}
            <View style={{alignItems: "flex-end" }}>
                <MonoText>${Number.parseFloat(stock.close).toFixed(1)}</MonoText>
                <MonoText style={{color: change > 0 ? 'green' :  'red'}}> {change > 0 ? '+' : ''}{change.toFixed(1)}%</MonoText>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    constainer: {
        flexDirection: 'row',
    },

    symbol: {
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.light.tint,
    }

})