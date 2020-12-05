import React from 'react';
import styles from '../../src/Style.module.css';
import {  useDrop } from "react-dnd";
import { DropTarget } from 'react-dnd'

//https://react-dnd.github.io/react-dnd/docs/api/use-drop
const Field =({children, className, title}) => { 

    const [{canDrop, isOver}, drop] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 0.0}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor)  => ({ //Collect:1 Optional. The collecting function. It should return a plain object of the props to return for injection into your component.
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            //props to return for injection into your component
        }),
       
    });

    const [, drop1] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 0.1}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop2] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 0.2}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop3] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 0.3}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop4] = useDrop({ //Specification Object Members:
        accept: 'shipTypes', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 0.4}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop5] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 0.5}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop6] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 0.6}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop7] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 0.7}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop8] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 0.8}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop9] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 0.9}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop10] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 1.0}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop11] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 1.1}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop12] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 1.2}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop13] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 1.3}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop14] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 1.4}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop15] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 1.5}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop16] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 1.6}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop17] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 1.7}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop18] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 1.8}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop19] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 1.9}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop20] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 2.0}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop21] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 2.1}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop22] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 2.2}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop23] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 2.3}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop24] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 2.4}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop25] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 2.5}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop26] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 2.6}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop27] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 2.7}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop28] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 2.8}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop29] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 2.9}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop30] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 3.0}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop31] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 3.1}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop32] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 3.2}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop33] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 3.3}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop34] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 3.4}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop35] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 3.5}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop36] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 3.6}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop37] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 3.7}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop38] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 3.8}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop39] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 3.9}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop40] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 4.0}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop41] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 4.1}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop42] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 4.2}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop43] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 4.3}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop44] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 4.4}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop45] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 4.5}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop46] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 4.6}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });
   
    const [, drop47] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 4.7}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });
    /* create a DropTarget and define a drop() function within its source,
     and whatever that returns will be what is returned by the monitor.getDropResult() */

     const [, drop48] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 4.8}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop49] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 4.9}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop50] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 5.0}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    
    const [, drop51] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 5.1}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    
    const [, drop52] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 5.2}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    
    const [, drop53] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 5.3}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    
    const [, drop54] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 5.4}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    
    const [, drop55] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 5.5}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    
    const [, drop56] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 5.6}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    
    const [, drop57] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 5.7}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    
    const [, drop58] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 5.8}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    
    const [, drop59] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 5.9}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    
    const [, drop60] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 6.0}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop61] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 6.1}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop62] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 6.2}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop63] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 6.2}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop64] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 6.4}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop65] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 6.5}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop66] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 6.6}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop67] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 6.7}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop68] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 6.8}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop69] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 6.9}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop70] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 7.0}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop71] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 7.1}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop72] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 7.2}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop73] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 7.3}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop74] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 7.4}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop75] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 7.5}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop76] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 7.6}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop77] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 7.7}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop78] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 7.8}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop79] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 7.9}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop80] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 8.0}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop81] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 8.1}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop82] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 8.2}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop83] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 8.3}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop84] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 8.4}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop85] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 8.5}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop86] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 8.6}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop87] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 8.7}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop88] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 8.8}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop89] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 8.9}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop90] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 9.0}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop91] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 9.1}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop92] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 9.2}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop93] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 9.3}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop94] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 9.4}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop95] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 9.5}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop96] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 9.6}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop97] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 9.7}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop98] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 9.8}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });

    const [, drop99] = useDrop({ //Specification Object Members:
        accept: 'laiva', //Required. Type laiva accepted
        drop: () => ({name: 'solu', id: 9.9}), //palauttaa tämän Laiva.js monitor.getDropResult() -> korvaa id viittauksella soluun?
        collect: (monitor) => ({ //Collect: Optional. The collecting function. It should return a plain object of the props to return for injection into your component.

            //props to return for injection into your component
        }),
       
    });






return ( 
//wrap our components that are taking part in drag and drop with DndProvider.
// <DndProvider backend={HTML5Backend}></DndProvider>
// done in layout

<div>    
<table className={styles.table}>
    <tbody>
    <tr className={styles.tr}> {/*rivi 1*/}  {/*https://reactjs.org/link/strict-mode-string-ref */}
        <td className={styles.td1} id = {0.0} ref = {drop} > {title} {children} </td> {/*solu*/} {/*drop -> lisää solu id? */}
        <td className={styles.td1} id = {0.1} ref = {drop1} > </td>
        <td className={styles.td1} id = {0.2} ref = {drop2} > </td>
        <td className={styles.td1} id = {0.3} ref = {drop3} > </td>
        <td className={styles.td1} id = {0.4} ref = {drop4} > </td>
        <td className={styles.td1} id = {0.5} ref = {drop5} > </td>
        <td className={styles.td1} id = {0.6} ref = {drop6} > </td>
        <td className={styles.td1} id = {0.7} ref = {drop7} > </td>
        <td className={styles.td1} id = {0.8} ref = {drop8} > </td>
        <td className={styles.td1} id = {0.9} ref = {drop9} >  </td>
    </tr>

    <tr className={styles.tr}> {/*rivi 2*/}  
        <td className={styles.td1} id = {1.0} ref = {drop10} >  </td> {/*solu*/}
        <td className={styles.td1} id = {1.1} ref = {drop11} >   </td>
        <td className={styles.td1} id = {1.2} ref = {drop12} >  </td>
        <td className={styles.td1} id = {1.3} ref = {drop13} >  </td>
        <td className={styles.td1} id = {1.4} ref = {drop14} > </td>
        <td className={styles.td1} id = {1.5} ref = {drop15} >  </td>
        <td className={styles.td1} id = {1.6} ref = {drop16} >  </td>
        <td className={styles.td1} id = {1.7} ref = {drop17} >  </td>
        <td className={styles.td1} id = {1.8} ref = {drop18} >   </td>
        <td className={styles.td1} id = {1.9} ref = {drop19} >   </td>
    </tr>

    <tr className={styles.tr}> {/*rivi 3*/}  
        <td className={styles.td1} id = {2.0} ref = {drop20} > </td> {/*solu*/}
        <td className={styles.td1} id = {2.1} ref = {drop21} > </td>
        <td className={styles.td1} id = {2.2} ref = {drop22} > </td>
        <td className={styles.td1} id = {2.3} ref = {drop23} > </td>
        <td className={styles.td1} id = {2.4} ref = {drop24} > </td>
        <td className={styles.td1} id = {2.5} ref = {drop25} > </td>
        <td className={styles.td1} id = {2.6} ref = {drop26} > </td>
        <td className={styles.td1} id = {2.7} ref = {drop27} > </td>
        <td className={styles.td1} id = {2.8} ref = {drop28} > </td>
        <td className={styles.td1} id = {2.9} ref = {drop29} > </td>
    </tr>

    <tr className={styles.tr}> {/*rivi 4*/}  
        <td className={styles.td1} id = {3.0} ref = {drop30} > </td> {/*solu*/}
        <td className={styles.td1} id = {3.1} ref = {drop31} > </td>
        <td className={styles.td1} id = {3.2} ref = {drop32} > </td>
        <td className={styles.td1} id = {3.3} ref = {drop33} > </td>
        <td className={styles.td1} id = {3.4} ref = {drop34} > </td>
        <td className={styles.td1} id = {3.5} ref = {drop35} > </td>
        <td className={styles.td1} id = {3.6} ref = {drop36} > </td>
        <td className={styles.td1} id = {3.7} ref = {drop37} > </td>
        <td className={styles.td1} id = {3.8} ref = {drop38} > </td>
        <td className={styles.td1} id = {3.9} ref = {drop39} > </td>
    </tr>

    <tr className={styles.tr}> {/*rivi 5*/}  
        <td className={styles.td1} id = {4.0} ref = {drop40} > </td> {/*solu*/}
        <td className={styles.td1} id = {4.1} ref = {drop41} > </td>
        <td className={styles.td1} id = {4.2} ref = {drop42} ></td>
        <td className={styles.td1} id = {4.3} ref = {drop43} > </td>
        <td className={styles.td1} id = {4.4} ref = {drop44} > </td>
        <td className={styles.td1} id = {4.5} ref = {drop45} > </td>
        <td className={styles.td1} id = {4.6} ref = {drop46} > </td>
        <td className={styles.td1} id = {4.7} ref = {drop47} > </td>
        <td className={styles.td1} id = {4.8} ref = {drop48} > </td>
        <td className={styles.td1} id = {4.9} ref = {drop49} > </td>
    </tr>

    <tr className={styles.tr}> {/*rivi 6*/}  
        <td className={styles.td1} id = {5.0} ref = {drop50} > </td> {/*solu*/}
        <td className={styles.td1} id = {5.1} ref = {drop51} > </td>
        <td className={styles.td1} id = {5.2} ref = {drop52} > </td>
        <td className={styles.td1} id = {5.3} ref = {drop53} > </td>
        <td className={styles.td1} id = {5.4} ref = {drop54} > </td>
        <td className={styles.td1} id = {5.5} ref = {drop55} > </td>
        <td className={styles.td1} id = {5.6} ref = {drop56} > </td>
        <td className={styles.td1} id = {5.7} ref = {drop57} > </td>
        <td className={styles.td1} id = {5.8} ref = {drop58} > </td>
        <td className={styles.td1} id = {5.9} ref = {drop59} > </td>
    </tr>

    <tr className={styles.tr}> {/*rivi 7*/}  
        <td className={styles.td1} id = {6.0} ref = {drop60} ></td> {/*solu*/}
        <td className={styles.td1} id = {6.1} ref = {drop61} > </td>
        <td className={styles.td1} id = {6.2} ref = {drop62} > </td>
        <td className={styles.td1} id = {6.3} ref = {drop63} > </td>
        <td className={styles.td1} id = {6.4} ref = {drop64} > </td>
        <td className={styles.td1} id = {6.5} ref = {drop65} > </td>
        <td className={styles.td1} id = {6.6} ref = {drop66} > </td>
        <td className={styles.td1} id = {6.7} ref = {drop67} > </td>
        <td className={styles.td1} id = {6.8} ref = {drop68} > </td>
        <td className={styles.td1} id = {6.9} ref = {drop69} > </td>
    </tr>

    <tr className={styles.tr}> {/*rivi 8*/}  
        <td className={styles.td1} id = {7.0}  ref = {drop70} > </td> {/*solu*/}
        <td className={styles.td1} id = {7.1} ref = {drop71} > </td>
        <td className={styles.td1} id = {7.2} ref = {drop72} > </td>
        <td className={styles.td1} id = {7.3} ref = {drop73} > </td>
        <td className={styles.td1} id = {7.4} ref = {drop74} > </td>
        <td className={styles.td1} id = {7.5} ref = {drop75} > </td>
        <td className={styles.td1} id = {7.6} ref = {drop76} > </td>
        <td className={styles.td1} id = {7.7} ref = {drop77} ></td>
        <td className={styles.td1} id = {7.8} ref = {drop78} > </td>
        <td className={styles.td1} id = {7.9} ref = {drop79} > </td>
    </tr>

    <tr className={styles.tr}> {/*rivi 9*/}  
        <td className={styles.td1} id = {8.0} ref = {drop80} > </td> {/*solu*/}
        <td className={styles.td1} id = {8.1} ref = {drop81} > </td>
        <td className={styles.td1} id = {8.2} ref = {drop82} > </td>
        <td className={styles.td1} id = {8.3} ref = {drop83} > </td>
        <td className={styles.td1} id = {8.4} ref = {drop84} > </td>
        <td className={styles.td1} id = {8.5} ref = {drop85} > </td>
        <td className={styles.td1} id = {8.6} ref = {drop86} > </td>
        <td className={styles.td1} id = {8.7} ref = {drop87} > </td>
        <td className={styles.td1} id = {8.8} ref = {drop88} > </td>
        <td className={styles.td1} id = {8.9} ref = {drop89} ></td>
    </tr>

    <tr className={styles.tr}> {/*rivi 10*/}  
        <td className={styles.td1} id = {9.0} ref = {drop90} > </td> {/*solu*/}
        <td className={styles.td1} id = {9.1} ref = {drop91} > </td>
        <td className={styles.td1} id = {9.2} ref = {drop92} > </td>
        <td className={styles.td1} id = {9.3} ref = {drop93} > </td>
        <td className={styles.td1} id = {9.4} ref = {drop94} > </td>
        <td className={styles.td1} id = {9.5} ref = {drop95} > </td>
        <td className={styles.td1} id = {9.6} ref = {drop96} > </td>
        <td className={styles.td1} id = {9.7} ref = {drop97} > </td>
        <td className={styles.td1} id = {9.8} ref = {drop98} > </td>
        <td className={styles.td1} id = {9.9} ref = {drop99} > </td>
    </tr>
    </tbody>
</table>

</div>

)};


export default Field;