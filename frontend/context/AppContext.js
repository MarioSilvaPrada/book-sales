import React from 'react';
// create auth context with default value

// set backup default for search Input if none is provided in Provider
const AppContext = React.createContext({ searchInput: 'Mar' });
export default AppContext;
