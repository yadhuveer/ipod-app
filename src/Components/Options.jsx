import styles from "./Options.module.css"

function Option(props){

    const options=["Cover Flow","Music","Games","Settings"];

    return(
        <>
        <div className={styles.outerDiv}>
        <div className={styles.innerDiv}>
        <h3>iPod.js</h3>
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
export default Option;