import { FlatList } from 'react-native';

//components
import ToolsItem from './ToolsItem';

const ToolsSection = ({ data }) => {
    
    return ( 
         <FlatList
            data={data} 
            renderItem={({item}) => <ToolsItem {...item} />}
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


  
     
export default ToolsSection;