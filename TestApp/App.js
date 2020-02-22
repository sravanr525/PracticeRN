/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  ListView,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
       
        {/* <ScrollView
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
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView> */}
      </SafeAreaView>
      <View style={styles.navigation}>
          <View style={styles.backButtonView}>
            {/* <Button>

            </Button> */}
          </View>
          <Text style={styles.navigationText}>Untitled</Text>
          <View style={styles.menuButtonView}>
          </View>
      </View>
      <View style={styles.mainView}>
          <TextInput multiline={true} style={styles.lyricsText}
            placeholder="This is where we write Lyrics..."
          />
      </View>
      <View style={styles.bottomView}>
      </View>
    </>
  );
};

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


  
  navigation: {
    height: 50.0,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderBottomColor : "#DADADA",
    flexDirection: "row",
  },
  navigationText: {
    paddingTop: 10,
    textAlign: "center",
    fontSize : 18,
    fontWeight: "bold",
    flex: 1,
  },
  lyricsText: {
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
  mainView: {
    backgroundColor: "#FAFAFA",
    flex: 1,
  },
  bottomView: {
    backgroundColor: "#0F1014",
    height: 84
  },
  loadBeatButton:{

  },
  backButtonView:{
    width: 60,
    backgroundColor: "#AAAAAA",
    left: 0
  },
  menuButtonView:{
    width: 60,
    backgroundColor: "#AAAAAA",
    right: 0
  }
});

export default App;
