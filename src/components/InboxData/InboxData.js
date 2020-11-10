import React from 'react'
import { emailData } from '../data/emails'
import style from './inbox.module.css'

function InboxData() {
    return (
        <div>
            <h1>this is inbox data</h1>
            {
                emailData.map((obj, ind) => {
                    return (
                        <div key={ind.id} className={style.mainData}>
                            <button>
                                <ul>
                                    <li>{obj.name}</li>
                                    <li>{obj.subject}</li>
                                    <li>{obj.time}</li>
                                </ul>
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default InboxData
