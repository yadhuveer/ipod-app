import styles from "./MusicMenue.module.css"

function MusicMenue(props){

    const options=["All Songs","Artists","Albums"];

    return(
        <>
        <div className={styles.outerDiv}>
        <div className={styles.innerDiv}>
        <h3>Music</h3>
        <div className={styles.OptionsDiv}>
            {options.map((option,index)=>(
               <b> <p className={props.selectedOption==index ?styles.active:styles.notActive}>{option}</p></b>
            ))}

        </div>
        </div>
        </div>
        </>
    )



}
export default MusicMenue;