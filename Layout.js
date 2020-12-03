import Navbar from './Navbar';
import Field  from './Field';
import Footer from './Footer';
import Spacer from './Spacer';
import OpponentField from './OpponentField';
import React from 'react';
import styles from '../../src/Style.module.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
//KAIKKI DnD liittyvät importit tulee laittaa {} Sisään!
import { useState } from 'react';
import Laiva from './Laiva';
import Tuhoaja from "./Tuhoaja";
import  Vene  from './Vene';
import Sukellusvene from './Sukellusvene';
import Laiva2 from "./Laiva2"
import Laiva3 from "./Laiva3"

const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text} </button>;
  };

const Layout = (props) => (

    <div>
        
        {/*Vaihtaa sivun title*/}

            <title>Laivanupotus</title>
        
        {/*Bootstrap*/}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"/>
        {/*jquery*/}
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        {/*javascript*/}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
        {/*style sheet*/}
        <link rel="stylesheet" href="App.css" type="text/css"/>

        


         {/*Header*/}
    <body className={styles.body}>
        <main className={styles.main}> 

    
            <Navbar/> 
            <Spacer/> {/*blokki millä asetellut sivun elementit paremmin*/}
            

            {/*wrap our components that are taking part in drag and drop with DndProvider.
            <DndProvider backend={HTML5Backend}></DndProvider>*/}
            <DndProvider backend={HTML5Backend}> 
            <div className="container"> 
            <Button handleClick={""} text="aloita peli"/>
                <div className="row">
                    <h1 className="col">Oma lauta</h1>
                    <h1 className="col">Vastustajan lauta</h1>
                </div>

                
               
                <div className="row">   {/*asettaa kentät riviin*/}
                    
                    <div className="col">
                        <Field/> {/*pelikenttä*/} 
                    </div>
                   
                    <div className="col">
                        <OpponentField/> {/*pelikenttä*/} 
                    </div>
                </div>

            </div>
            <Laiva/>
            <Laiva2/>
            <Laiva3/>
            <Vene />
           <Tuhoaja />                
            <Sukellusvene />       
            </DndProvider>
            <Spacer/>
            <Spacer/>
            <Spacer/>
            <Footer/>

        </main>
    </body>
    </div>
);

export default Layout;