import React from 'react';
import Responsive from 'react-responsive';

export const SmallScreen = (props) => <Responsive {...props} maxWidth={ 768 } values={{width: 1024}} />;
export const LargeScreen = (props) => <Responsive {...props} minWidth={ 769 } values={{width: 1024}} />;
