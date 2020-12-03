import React from 'react';
import styles from '../../src/Style.module.css';
import { useDrag } from "react-dnd";
import {shipTypes} from "./shipTypes"
//import { DndProvider} from "react-dnd";
//import { HTML5Backend } from "react-dnd-html5-backend";

//Väliaikainen komponentti, millä testailen DnD
const Laiva =() => { 

    //https://react-dnd.github.io/react-dnd/docs/api/use-drag
    
    const [, drag] = useDrag({
        item: {type: "laiva"}, //Required. A plain JavaScript object describing the data being dragged. This is the only information available to the drop targets about the drag source so it's important to pick the minimal data they need to know. It's a good idea to return something like { type, id } from this method.
         //item.type must be set, and it must be either a string, an ES6 symbol. Only the drop targets registered for the same type will react to this item.
      //  id: 1}, //yksilöivä ID laivoille?

        end: (item, monitor) => {
            // monitor.getDropResult(); //https://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor - getDropResult()
         
          const dropResult = monitor.getDropResult();
            console.log(dropResult);
            /** If it was handled, and the drop target specified a 
             * drop result by returning a plain object from its drop() method, it will be available
             *  as monitor.getDropResult().  */         
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });


    return (
        <div ref={drag} className='movable-item' className = "container">
            <tr>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
            </tr>
        </div>   
    )
};

export default Laiva;