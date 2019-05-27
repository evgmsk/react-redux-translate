#react-redux-translate

## Features

* Provide changing the language of the page accordingly with changing Redux state property

## Installing

    $ npm i --save react-redux-translate

## Usage
 Create Translate instance allowed in any place within the src directory.
  
 * First argument 'defaultLanguage' must correspond name of the JSON file in i18n directory.
 * Second argument 'languageKeyInState' must correspond name language key in the redux state.
 * Third argument 'pathToI18nDirectory' path form root of project (level of node-modules directory) 
 to 'i18n' directory.
    
    
    import React from 'react';
    import { connect } from 'react-redux';
    import translate from './common/react-redux-translate';
    
    let T = translate('defaultLanguage', 'languageKeyInState', 'pathToI18nDirectory');
    
    export default T = connect(state => ({languageKeyInState: state.languageKeyInState}))(T);
    
   
 If pure string needed to insert as the function argument
    
    export const funcT = ({keys, insertions = []}) => <T keys={keys} insertions={insertions} />;
    
 Import T where needed
 
    import T from 'pathToInstance';
    
 Insert as React Component with required properties
  
    <div><T keys="home.title" insertion={[Mary, John]} /><div>
  
 'Keys' property can be either string with dot delimiter or array of string.
 'Insertions' property must be an array of string.
   