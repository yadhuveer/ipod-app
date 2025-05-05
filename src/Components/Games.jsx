import styles from './Games.module.css';

function Game(){
    return(
        <>
        <div className={styles.outerDiv}>
        <div className={styles.colorIcon}>

        <i className={`fa-solid fa-dice ${styles.icon}`}  ></i>
        </div>
       
        <p>Games</p>

        </div>
        </>
    )


}

export default Game;