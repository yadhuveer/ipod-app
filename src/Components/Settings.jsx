import styles from './Games.module.css';

function Setting(){
    return(
        <>
        <div className={styles.outerDiv}>
      

        <i className={`fa-solid fa-gear ${styles.icon}`}  ></i>
       
       
        <p>Settings</p>

        </div>
        </>
    )


}

export default Setting;