import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './app1.module.css'
import Options from './Components/Options'
import Coverflow from './Components/CoverFlow'
import Game from './Components/Games'

import Setting from './Components/Settings'
import MusicMenue from './Components/MusicMenue'


import Song from './Components/Song'

function App() {

  const [currentOption,setCurrentOption]=useState(0);
  const [currentModule,setModule]=useState("optionModule");

  const optionList=["Cover Flow","Music","GameModule","Settings"]
  
  const dragging=useRef(false);
  const lastY=useRef(null);

  const backRef=useRef(false);
  const handleMouseDown = (e) => {
    dragging.current = true;
    lastY.current = e.clientY;
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;

    const currentY = e.clientY;
    const deltaY = currentY - lastY.current;

    if (Math.abs(deltaY) > 20) { 
      if (deltaY > 0) {
       
        setCurrentOption((prev) => (prev + 1) % 4);
      } else {
        
        setCurrentOption((prev) => (prev - 1 + 4) % 4);
      }
      lastY.current = currentY;
    }
  };

  const handleMouseUp = () => {
    dragging.current = false;
  };

  const handleOkClick = () => {
    //alert(`You selected: ${options[currentOption]}`);
    console.log(currentOption);
    console.log(backRef.current);

    if(currentModule=="Music"){
      setModule("Song");
      //backRef.current=!backRef.current;
      return;
    }

    if(backRef.current){
      setModule("optionModule");
      backRef.current=!backRef.current;
    }else{
      console.log("its correct");
      setModule(optionList[currentOption])
      backRef.current=!backRef.current;
    }
    }
   

  return (
    <>
   
    <div className={styles.container}>
      {currentModule=="optionModule"? <Options  selectedOption={currentOption}/>:currentModule=="Cover Flow"?<Coverflow/>:currentModule=="GameModule"?<Game/>:currentModule=="Settings"?<Setting/>:currentModule=="Music"?<MusicMenue  selectedOption={currentOption}/>: currentModule=="Song"?<Song/>:""}
   

      <div className={styles.menue} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        <p className={styles.MenueP}>MENU</p>
        <div className={styles.options}>
        <i class="fa-solid fa-forward"></i>
        <div className={styles.ok} onClick={handleOkClick}><p></p></div>
        <i class="fa-solid fa-forward"></i>
        </div>
        <i class="fa-solid fa-forward down" ></i>
      </div >

    </div>
      
    </>
  )
}

export default App
