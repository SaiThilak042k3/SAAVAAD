import { FlatList } from 'react-native';


//components
import InputItems from './InputItems';

const InputSections = ({ data }) => {
    
    return ( 
         <FlatList
            data={data} 
            renderItem={({item}) => <FeaturesItem {...item} />}
            keyExtractor={(id) => id.toString()}
            horizontal={false} 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingLeft: 25,
                paddingTop: 25,
            }}
         />

    );
}


  
     
export default InputSections;