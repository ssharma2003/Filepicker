// import { StyleSheet, Text, View, ScrollView, Touchable, TouchableOpacity, Image } from 'react-native'
// import React from 'react'

// const Profile = () => {

//   const widthAndHeight = 250
//   const series = [430, 321, 185, 123, 80]
//   const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00']

//   return (
//   <ScrollView style={{ flex: 1 }}>
//     <TouchableOpacity>
//       <Image source={require('../../assets/profileimg.webp')} 
//       style={{width:150, height:150, borderRadius:150, marginLeft: 20,marginTop:30}}
//       ></Image>
//     </TouchableOpacity>
    
//     <Text style={{fontSize: 15,color:'black', fontWeight: 'bold', marginLeft:5}}>John Doe,</Text>
//     <Text style={{fontSize: 15,color:'black', marginLeft:5}}>Dwarkadas J. Sanghvi College of Engineering</Text>
    
//     <View>
//       <Text style={{fontSize: 25,color:'black', fontWeight: 'bold', margin:10,}}>Projects</Text>

//     </View>
    
//   </ScrollView>
//   )
// }

// export default Profile

// const styles = StyleSheet.create({})


// 

import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { projects } from '../constants/projects'; // Import the projects array
import { skills } from '../constants/skills'; // Import the skills array
import Feather from 'react-native-vector-icons/Feather';

const Profile = () => {
  const renderProjects = () => {
    return projects.map(project => (
      <TouchableOpacity key={project.id} style={styles.projectContainer}>
        <Image source={project.image} style={styles.projectImage} />
        <View style={styles.projectInfo}>
          <Text style={styles.projectName}>{project.name}</Text>
          <Text style={styles.projectDescription}>{project.description}</Text>
        </View>
      </TouchableOpacity>
    ));
  };

  const renderSkills = () => {
    return (
      <View style={styles.skillsContainer}>
        {skills.map(skill => (
          <TouchableOpacity key={skill.id} style={styles.skillContainer}>
            <Text style={styles.skillName}>{skill.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const handleLogout = () => {
    // Implement logout functionality here
    
  };

  return (
    <>
    <View style={styles.header}>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    <ScrollView style={{ flex: 1 }}>

      <View style={{ flex: 1,flexDirection:'row' }}>
      <TouchableOpacity>
        <Image
          source={require('../../assets/profileimg.webp')}
          style={{ width: 150, height: 150, borderRadius: 150, marginLeft: 20, marginTop: 3 }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="edit" size={20} color="black" style={{ position: 'absolute', top: 130, left: 10 }} />
      </TouchableOpacity>
      </View>
      

      <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', marginLeft: 5 }}>John Doe,</Text>
      <Text style={{ fontSize: 15, color: 'black', marginLeft: 5 }}>Dwarkadas J. Sanghvi College of Engineering</Text>

      <View style={{ flex: 1,flexDirection:'row',justifyContent:'space-evenly',  }}>
        <TouchableOpacity> 
          <Text style={{ fontSize: 20, color: 'black', margin: 10 ,borderRadius:15, backgroundColor:'#f0c44d', padding:10}}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity> 
          <Text style={{ fontSize: 20, color: 'black', margin: 10 ,borderRadius:15, backgroundColor:'#f0c44d',padding:10}}>Add to team</Text>
        </TouchableOpacity>      
      </View>

      <View>
        <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold', margin: 10 }}>Projects</Text>
        {renderProjects()}
      </View>
      <View>
        <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold', margin: 10 }}>Skills</Text>
        {renderSkills()}
      </View>
    </ScrollView>
    </>
    
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: 'white', // Change color as needed
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  logoutButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#f0c44d', // Change color as needed
  },
  logoutButtonText: {
    color: '#fff', // Change color as needed
    fontSize: 16,
    fontWeight: 'bold',
  },
  projectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  projectImage: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginRight: 10,
  },
  projectInfo: {
    flex: 1,
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  projectDescription: {
    fontSize: 14,
    color: 'black',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  skillContainer: {
    backgroundColor: '#f0c44d',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 10,
  },
  skillName: {
    fontSize: 16,
    color: 'black',
  },
});
