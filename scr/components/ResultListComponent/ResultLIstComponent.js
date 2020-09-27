import React from 'react';
import {Text, ListItem, Left, Body} from 'native-base';
import {FlatList, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const ResultListComponent = ({range, headerText}) => {
  if(range.length===0){
    range.unshift({header: true, text: headerText});
  }
  else if (!range[0].header && headerText) {
    range.unshift({header: true, text: headerText});
  }

  const renderItem = ({item}) => {
    if (item.header) {
      return (
        <ListItem itemDivider>
          <Text style={{fontWeight: 'bold'}}>{item.text}</Text>
        </ListItem>
      );
    }
    return (
      <ListItem icon style={{marginLeft: 15, marginRight: 20}}>
        <Left>
          <Ionicons name="earth-outline" size={20} />
        </Left>
        <Body>
          <Text>{item}</Text>
        </Body>
      </ListItem>
    );
  };

  return (
    <SafeAreaView style={{flex: 4}}>
      <FlatList
        data={range}
        renderItem={renderItem}
        keyExtractor={(item) => {
          if (item.header) {
            return item.text;
          } else {
            return item;
          }
        }}
        stickyHeaderIndices={[0]}
      />
    </SafeAreaView>
  );
};
