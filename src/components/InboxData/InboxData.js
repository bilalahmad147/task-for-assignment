import React from 'react'
import { emailData } from '../data/emails'
import style from './inbox.module.css'

function InboxData() {
    return (
        <div>
            <h1>this is inbox data</h1>
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
                        </div>
                    )
                })
            }
        </div>
    )
}

export default InboxData
