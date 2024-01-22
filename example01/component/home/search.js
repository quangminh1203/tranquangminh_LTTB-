// ProductSearch.js
import React from 'react';
import { View, TextInput, TouchableOpacity ,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";


const ProductSearch = ({ searchText, onSearchTextChange, onSearchPress }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Tìm kiếm..."
        



        value={searchText}
        onChangeText={onSearchTextChange}
      />
      <TouchableOpacity onPress={onSearchPress}>
        <Icon name="search" size={25} color="#000000" right={10}
        onPress={() => {
          navigation.navigate("Searchread"); 
        }}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    margin:3,
    padding: 1,
    height: 40,
},
searchInput: {
    flex: 1,
    left: 10,

},
});
export default ProductSearch;
