#react-redux-translate

## Features

*Easy Internationalization for your react app

## Installing

    $ npm i --save react-redux-translate

## Usage

### Create instance
 Create Translate instance in any place within the src directory.
  
    import React from 'react';
    import { connect } from 'react-redux';
    import translate from 'react-redux-translate';
    
    let T = translate('language', 'languageKeyInState', 'pathToI18nDirectoryFromProjectRoot');
    
    export default T = connect(state => ({languageKeyInState: state.languageKeyInState}))(T);

If pure string needed to insert as the function argument
    
    export const funcT = ({keys, insertions = []}) => <T keys={keys} insertions={insertions} />;
    
Keep in mind
 
    1. 'language' must correspond name of the JSON file in i18n directory.
    
    2. 'languageKeyInState' must correspond name language key in the redux state.
    
    3.  'pathToI18nDirectoryProjectRoot' path form root of the project (the same level where is the node-modules directory) 
     to 'i18n' directory.
    
   
 ### Instance usage
 
Import T component where is needed
 
    import T from 'pathToYourTranslateInstance';
    
Insert as React Component with required properties
  
    <div><T keys="home.title" /><div>
  
'Keys' property can be either string with dot delimiter or array of string.

If case you have some words in the text, which you will not translate you could use `insertions` property and add placeholders `${}` to the source string. 

The `insertions` must be an array of string.

For example, if you have `en-EN` JSON file with property

      `"home":{"event": "Meet ${} and ${} at GitHub" }` 
   
and you set follow params to the `<T/>`component

      `<div><T keys="home.event" insertions={['Mary', 'John']} /><div>`

 you will get **"`Meet Mary and John at GitHub`"** string inside `div`. 
   