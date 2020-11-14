import React from 'react';
import {View, Text, Dimensions, Pressable} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DashboardScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          marginTop: 0.05 * height,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Pressable
          onPress={() => navigation.navigate('Bill')}
          android_ripple={{color: 'lightgrey'}}
          style={{
            height: 0.1 * height,
            width: 0.4 * width,
            borderRadius: 10,
            backgroundColor: 'lightgreen',
            alignItems: 'center',
          }}>
          <Text style={{marginTop: 10, marginBottom: 5}}>Bills open</Text>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}> 2</Text>
        </Pressable>
        <Pressable
          android_ripple={{color: 'lightgrey'}}
          style={{
            height: 0.1 * height,
            width: 0.4 * width,
            borderRadius: 10,
            backgroundColor: 'tomato',
            alignItems: 'center',
          }}>
          <Text style={{marginTop: 10, marginBottom: 5}}>Bills closed</Text>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}> 2</Text>
        </Pressable>
      </View>
      <View
        style={{
          marginTop: 0.05 * height,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Pressable
          android_ripple={{color: 'lightgrey'}}
          style={{
            height: 0.1 * height,
            width: 0.4 * width,
            borderRadius: 10,
            backgroundColor: 'orange',
            alignItems: 'center',
          }}>
          <Text style={{marginTop: 10, marginBottom: 5}}>Amount Pending</Text>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}> 2</Text>
        </Pressable>
        <Pressable
          android_ripple={{color: 'lightgrey', borderless: false}}
          style={{
            height: 0.1 * height,
            width: 0.4 * width,
            borderRadius: 10,
            backgroundColor: 'red',
            alignItems: 'center',
          }}>
          <Text style={{marginTop: 10, marginBottom: 5}}>Bills danger</Text>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}> 2</Text>
        </Pressable>
      </View>
      <View>
        <Text>Bezier Line Chart</Text>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};

export default DashboardScreen;
