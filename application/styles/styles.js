import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  saveButton: {
    borderColor: '#48BBEC',
    borderWidth: 1,
  },
  newButton: {
    marginBottom: 0,
  },
  todo: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  txt: {
    fontSize: 18,
    marginLeft: 5,
    marginTop: 2,
    color: '#222222',
  },
  completed: {
    color: '#cccccc',
    textDecorationLine: 'line-through',
  },
  hr: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: 1,
    marginLeft: 0,
    marginRight: 0,
    marginVertical: 5,
  },
  listView: {
    flex: 1,
    alignSelf: 'stretch',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    fontSize: 18,
  },
});

export default styles;
