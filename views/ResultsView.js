import React from 'react';
import { View, Text } from 'react-native';

const ResultsView = ({ isLoadingResults, results }) => {

  if (isLoadingResults) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    if (results !== null) {
      return (
        <View>
          <Text>TODO: Results</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text>No results</Text>
        </View>
      );
    }
  }

};

export default ResultsView;