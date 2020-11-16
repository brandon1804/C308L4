/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import moment from 'moment-timezone';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  console.log("Listing semester modules and recommended eats");
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Welcome />
              <MyFirstApp />
              <Text>{"\nMy modules this semester:"}</Text>
              <SemModule day="Monday - " SemModule module="C348"/>
              <SemModule day="Tuesday - " SemModule module="C273"/>
              <SemModule day="Wednesday - " SemModule module="C308"/>
              <Text>{"\nRecommended Eats @ RP"}</Text>
              <Eats name="Sweet Tooth Waffles" Eats location="W6 Level 1, E-Canteen"/>
              <Text>{"\n"}</Text>
              <Eats name="Crowded Bowl" Eats location="W4/W6 Lawn Canteen"/>
              <Text>{"\n"}</Text>
              <Eats name="Western Cuisine @ Koufu" Eats location="E1 Level 1, Koufu"/>
              <Text>{"\n"}</Text>
              <Eats name="Ayam Penyet" Eats location="W4/W6 Lawn Canteen"/>
              <Text>{"\nWorld Clock"}</Text>
              <WorldClock />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const Welcome = () => {
  return (
    <View>
      <Text>Welcome to C308 Web Frameworks!</Text>
    </View>
  );
};
class MyFirstApp extends React.Component {
  render() {
    return (
      <View>
        <Text>My first React Native app</Text>
      </View>
    );
  }
}

const SemModule = (props) => {
  return (
        <Text>{props.day}{props.module}</Text>
  );
};

class Eats extends React.Component {
  render() {
    return (
          <Text>
            {this.props.name}
            {"\n"}
            {this.props.location}
          </Text>
    );
  }
}

class WorldClock extends React.Component {
  render() {
    var aS = moment.tz(moment(), "Asia/Singapore").format("H:D Z");
    var eL = moment.tz(moment(), "Europe/London").format("H:D Z");
    var aN = moment.tz(moment(), "America/New_York").format("H:D Z");
    var eO = moment.tz(moment(), "Europe/Oslo").format("H:D Z");

    return (
          <Text>
          Asia/Singapore - {aS}{"\n"}
          Europe/London - {eL}{"\n"}
          America/New_York - {aN}{"\n"}
          Europe/Oslo - {eO}</Text>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
