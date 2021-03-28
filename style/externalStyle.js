import {StyleSheet} from 'react-native'

const externalStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      background: {
        bottom: 0,
        flex: 1,
        height: '130%',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        width: '100%',
      },
      button: {
          borderRadius: 8,
          paddingVertical: 14,
          paddingHorizontal: 10,
          backgroundColor: '#B6A3B0'
      },
      buttonText: {
          color: '#082370',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          fontSize: 16,
          textAlign: 'center'
      },
      fontStyle: {
        fontFamily: 'Menlo',
        color: '#082370'
      },
      header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B6A3B0',
      },
      headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
      },
      icon: {
        position: 'absolute',
        left: 16
      },
      footer: {
        backgroundColor: '#B6A3B0',
        borderBottomColor: '#a7a7aa',
        shadowColor: '#a7a7aa',
        shadowOffset: {'width':0,'height':0.5},
        shadowRadius: 0,
        shadowOpacity: 0.85,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 414
      },
      headerr: {
        backgroundColor: '#B6A3B0',
        borderBottomColor: '#a7a7aa',
        shadowColor: '#a7a7aa',
        shadowOffset: {'width':0,'height':0.5},
        shadowRadius: 0,
        shadowOpacity: 0.85,
        justifyContent: 'center',
        alignItems: 'center',
        height: 102,
        width: 414,
      },
      circle: {
        height: 175,
        width: 190,  
        resizeMode: 'contain',
        //bottom: -20,
        //right: 110
      },
      image: {
        height : 100,
        width: 180,
        resizeMode: 'contain',
        //bottom: -25,
        //right: -10
      }
})

export default externalStyle;