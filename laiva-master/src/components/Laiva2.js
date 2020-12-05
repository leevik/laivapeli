import React from 'react';
import styles from '../../src/Style.module.css';
import {DndProvider, useDrag } from "react-dnd";
//import { DndProvider} from "react-dnd";
//import { HTML5Backend } from "react-dnd-html5-backend";

//Väliaikainen komponentti, millä testailen DnD
const Laiva2 =() => { 

    //https://react-dnd.github.io/react-dnd/docs/api/use-drag
    
    const [isDragging, drag] = useDrag({
        item: {type: "laiva", length: 4,
                id: 2}, //Required. A plain JavaScript object describing the data being dragged. This is the only information available to the drop targets about the drag source so it's important to pick the minimal data they need to know. It's a good idea to return something like { type, id } from this method.
         //item.type must be set, and it must be either a string, an ES6 symbol. Only the drop targets registered for the same type will react to this item.
      //  id: 1}, //yksilöivä ID laivoille?

        end: (item, monitor) => {
            // monitor.getDropResult(); //https://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor - getDropResult()
         
            const dropResult = monitor.getDropResult();
            let laivanpituus = item.length;
          let sijainti = dropResult["id"].toFixed(1);

            let r= sijainti.toString();
            let res = r.split("."); 
            let laivaSijainti = [];
            laivaSijainti.push(res[0] + "." + res[1]);     
          let  tokaString = parseInt(res[1]);
          let  ekaString = res[0];
            
            for (let i=1; i< laivanpituus; i++) {
                let s = tokaString + 1
                let asd = ekaString.toString() + "." + s.toString()
                laivaSijainti.push(asd)
                tokaString = tokaString + 1
            }
            
             console.log(laivaSijainti); 
            /** If it was handled, and the drop target specified a 
             * drop result by returning a plain object from its drop() method, it will be available
             *  as monitor.getDropResult().  */         
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0.4 : 1;
    return (
        <div ref={drag} className='movable-item' className = "container">
            <tr>
                <td className={styles.td3} ></td>
            </tr>
        </div>   
    )
};

export default Laiva2;