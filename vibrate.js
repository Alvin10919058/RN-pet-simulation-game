'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Vibration,
} = React;

//exports.framework = 'React';
//exports.title = 'Vibration';
//exports.description = 'Vibration API';
var vibrate = React.createClass({ 
  title: 'Vibration.vibrate()',
  render() {
    return (
      <TouchableHighlight
        style={styles.wrapper}
        onPress={() => Vibration.vibrate()}>
        <View style={styles.button}>
          <Text>Vibrate</Text>
        </View>
      </TouchableHighlight>
    );
   }
});
var styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
});
module.exports = vibrate;