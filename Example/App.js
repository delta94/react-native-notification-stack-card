/**
 *
 * Inspiration: https://dribbble.com/shots/3731362-Event-cards-iOS-interaction
 */

import * as React from 'react';
import {
  StatusBar,
  Image,
  FlatList,
  Dimensions,
  Animated,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
const {width} = Dimensions.get('screen');
// import {EvilIcons} from '@expo/vector-icons';
import StackCardList from 'react-native-notification-stack-card'; // setActiveIndex,
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// https://www.creative-flyers.com
const DATA = [
  {
    title: 'Afro vibes',
    location: 'Mumbai, India',
    date: 'Nov 17th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/07/Afro-vibes-flyer-template.jpg',
  },
  {
    title: 'Jungle Party',
    location: 'Unknown',
    date: 'Sept 3rd, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2019/11/Jungle-Party-Flyer-Template-1.jpg',
  },
  {
    title: '4th Of July',
    location: 'New York, USA',
    date: 'Oct 11th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/4th-Of-July-Invitation.jpg',
  },
  {
    title: 'Summer festival',
    location: 'Bucharest, Romania',
    date: 'Aug 17th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/07/Summer-Music-Festival-Poster.jpg',
  },
  {
    title: 'BBQ with friends',
    location: 'Prague, Czech Republic',
    date: 'Sept 11th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/BBQ-Flyer-Psd-Template.jpg',
  },
  {
    title: 'Festival music',
    location: 'Berlin, Germany',
    date: 'Apr 21th, 2021',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/Festival-Music-PSD-Template.jpg',
  },
  {
    title: 'Beach House',
    location: 'Liboa, Portugal',
    date: 'Aug 12th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/Summer-Beach-House-Flyer.jpg',
  },
  {
    title: 'BBQ with friends',
    location: 'Prague, Czech Republic',
    date: 'Sept 11th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/BBQ-Flyer-Psd-Template.jpg',
  },
  {
    title: 'Festival music',
    location: 'Berlin, Germany',
    date: 'Apr 21th, 2021',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/Festival-Music-PSD-Template.jpg',
  },
  {
    title: 'Beach House',
    location: 'Liboa, Portugal',
    date: 'Aug 12th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/Summer-Beach-House-Flyer.jpg',
  },
];

const SPACING = 20;
const ITEM_WIDTH = width * 0.86;
const ITEM_HEIGHT = ITEM_WIDTH * 0.4;
const VISIBLE_ITEMS = 3;

export default function App() {
  const [data, setData] = React.useState(DATA);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <StackCardList
        data={data}
        visibleItems={3}
        itemWidth={ITEM_WIDTH}
        itemHeight={ITEM_HEIGHT}
        closeButtonView={<Icon name={'close'} color={'#ffffff'} size={20} />}
        stackType={'below'}
        spacing={SPACING}
        onItemPress={(index) => {
          console.log('press', index);
        }}
        renderItem={(item) => {
          const {index, activeIndex} = item;
          const isActiveIndex = index === activeIndex;
          const isSecondIndex = (index === index) === activeIndex + 1;
          const isThirdIndex = index === activeIndex + 2;
          const isAfterClicked = index < activeIndex;
          const backgroundColor = isActiveIndex
            ? 'transparent'
            : isSecondIndex
            ? '#95A9F7'
            : isThirdIndex
            ? '#BDC9F9'
            : isAfterClicked
            ? '#BDC9F9'
            : '#95A9F7';
          const contentView = (
            <View
              style={{
                width: ITEM_WIDTH,
                height: ITEM_HEIGHT,
                borderRadius: 24,
                backgroundColor: backgroundColor,
              }}>
              {/* <View>
                <Text>{'Below'}</Text>
                <Text>{'This is your notif'}</Text>
              </View> */}
            </View>
          );
          return (
            <>
              {isActiveIndex ? (
                <LinearGradient
                  colors={['#3856D0', '#354BFA']}
                  style={{borderRadius: 24}}>
                  {contentView}
                </LinearGradient>
              ) : (
                contentView
              )}
            </>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -1,
  },
  location: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
  },
});
