import React from 'react'
import { emailData } from '../data/emails'
import style from './trash.module.css'

function TrashData() {
    return (
        <div>
            <h1>this is trash data</h1>
            {
                emailData.map((ind, key) => {
                    return (
                        <div key={ind.id} className={style.mainData}>
                            <ul>
                                <li>{ind.name}</li>
                            </ul>
                            <ul>
                                <li>{ind.subject}</li>
                            </ul>
                            <ul>
                                <li>{ind.message}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TrashData
