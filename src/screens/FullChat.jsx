import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React,{useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EmojiSelector from 'react-native-emoji-selector';


const FullChat = () => {
    const [showEmojiSelector, setShowEmojiSelector] = useState(false);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");


    const handleEmojiPress = () => {
        setShowEmojiSelector(!showEmojiSelector);
      };
    
  return (
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#F0F0F0'}}>
      <ScrollView></ScrollView>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 6,
          marginVertical: 5,
          borderTopColor: '#bab8b8',
          backgroundColor:'#ededed',
          marginBottom: showEmojiSelector? 0: 10,
        }}>
        <MaterialIcons
          onPress={handleEmojiPress}
          name="emoji-emotions"
          size={26}
          color="#545353"
          style={{marginHorizontal: 5}}
        />
        <TextInput
          //value={message}
          placeholder="Type a message"
          onTextChange={(text) => setMessage(text)}
          style={{
            flex: 1,
            marginHorizontal: 5,
            marginVertical: 5,
            height: 50,
            paddingHorizontal: 10,
            color: 'black',
            borderRadius: 20,
            borderColor:'grey',
            borderWidth:1,
          }}
        />
        <Ionicons name="camera" size={28} color="#545353" style={{marginRight:5}}/>
        {/* <Ionicons name="send-sharp" size={24} color="black"/> */}

        <Pressable style={{backgroundColor:"#f0c44d", borderRadius:30, paddingHorizontal:10, paddingVertical:6}}>
            <Text style={{color:'black', fontSize:15}}>Send</Text>
        </Pressable>
      </View>

      {showEmojiSelector && (
        <EmojiSelector
          onEmojiSelected={(emoji) => {
            setMessage((prevMessage) => prevMessage + emoji);
          }}
          style={{ height: 250 }}
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default FullChat;

const styles = StyleSheet.create({});
