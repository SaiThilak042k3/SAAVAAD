import { FlatList } from 'react-native';


//components
import FeaturesItem from './FeaturesItem';

const FeaturesSection = ({ data }) => {
    
    return ( 
         <FlatList
            data={data} 
            renderItem={({item}) => <FeaturesItem {...item} />}
            keyExtractor={(id) => id.toString()}
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingLeft: 25,
                paddingTop: 25,
            }}
         />

    );
}


  
     
export default FeaturesSection;