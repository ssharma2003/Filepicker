// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import DocumentPicker from 'react-native-document-picker'

// const Aws = () => {

//     const selectdoc=async() => {
//         try {
//             console.log('Document picker')
//             const doc = await DocumentPicker.pick(
//               {type: [DocumentPicker.types.allFiles],
//               allowMultiSelection: true,}
//             );
//             console.log(doc)
//         } catch (err) {
//             if (DocumentPicker.isCancel(e)) {
//                 console.log(e)
//             }
//             else
//             {
//                 console.log(err)
//             }
//         }
        
//     }
//   return (
//     <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
//       <TouchableOpacity style={{backgroundColor:'yellow', width:150, padding:10,borderRadius:15}} onPress={selectdoc}>
//         <Text style={{color:'black'}}> Document picker </Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default Aws

// const styles = StyleSheet.create({})

import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { showFilePicker } from 'react-native-file-picker';

const FilePickerExample = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const pickFile = () => {
    showFilePicker(null, (response) => {
      if (response.didCancel) {
        console.log('User cancelled file picker');
      } else if (response.error) {
        console.log('File picker error:', response.error);
      } else {
        console.log('Selected file:', response);
        setSelectedFile(response);
      }
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={pickFile} style={{ backgroundColor: 'skyblue', padding: 10, borderRadius: 5 }}>
        <Text style={{ color: 'white' }}>Pick a File</Text>
      </TouchableOpacity>
      {selectedFile && (
        <View style={{ marginTop: 20 }}>
          <Text>Selected File:</Text>
          <Text>{`Name: ${selectedFile.fileName}`}</Text>
          <Text>{`Type: ${selectedFile.type}`}</Text>
          <Text>{`Size: ${selectedFile.fileSize}`}</Text>
          <Text>{`URI: ${selectedFile.uri}`}</Text>
        </View>
      )}
    </View>
  );
};

export default FilePickerExample;
