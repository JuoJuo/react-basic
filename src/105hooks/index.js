import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Counter, Counter2, Counter3, Counter4, Counter5 } from './001useState'
import { ABC } from './002useCallback-useMemo'
import { CounterUseReducer } from './003useReducer'
import { App } from './004useContext'
import { Effect } from './005useEffecti'

ReactDOM.render(<Effect num={5}></Effect>, document.getElementById('root'));

