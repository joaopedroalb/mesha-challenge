import { useState } from 'react'
import styles from './index.module.scss'

export default function PlaylistStore(props:{list:any}){
    
    const [disableList,setDisableList] = useState(false);
    const formateDate = new Date (props.list.horaAgora).toLocaleString("pt-BR")

    function removerPlaylist(){
        localStorage.removeItem(props.list.keyLocalStorage)
        setDisableList(true)
    }

    return(
        <div className={disableList? styles.disable:styles.container}>
            <h1>Playlist de {props.list.genre} criada em {formateDate}</h1>
            <ul>
                {
                    props.list.songList.map((song:any,index:number)=>{
                        return(
                            <li key={index}>
                                <p >{index+1}. {song.title} - {song.artirst}</p>
                            </li>
                            
                        )
                    })
                }
            </ul>
            <button onClick={_=>removerPlaylist()}>Remover</button>
        </div>
    )
}