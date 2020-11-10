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
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Subject</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Alfreds Futterkiste</td>
                                        <td>Maria Anders</td>
                                        <td>Germany</td>
                                    </tr>
                                    <tr>
                                        <td>Centro comercial Moctezuma</td>
                                        <td>Francisco Chang</td>
                                        <td>Mexico</td>
                                    </tr>
                                    <tr>
                                        <td>Ernst Handel</td>
                                        <td>Roland Mendel</td>
                                        <td>Austria</td>
                                    </tr>
                                    <tr>
                                        <td>Island Trading</td>
                                        <td>Helen Bennett</td>
                                        <td>UK</td>
                                    </tr>
                                    <tr>
                                        <td>Laughing Bacchus Winecellars</td>
                                        <td>Yoshi Tannamuri</td>
                                        <td>Canada</td>
                                    </tr>
                                    <tr>
                                        <td>Magazzini Alimentari Riuniti</td>
                                        <td>Giovanni Rovelli</td>
                                        <td>Italy</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default InboxData
