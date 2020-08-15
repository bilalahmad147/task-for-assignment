import React from 'react';
import style from './Front.module.css';
import useWebAnimations, {rotateInDownLeft} from "@wellyshen/use-web-animations";

function FrontPage() {
    const { ref } = useWebAnimations({...rotateInDownLeft});

    return (
        <div className={style.homePage}>
            <div ref={ref} className={style.homePageText}>
                <div >Hello, I'm
                <span className={style.text}> Bilal Ahmad</span>.
                <br />
                I'm a full-stack web developer.
                <br />
                </div>
            </div>
        </div>
    );
}

export default FrontPage;
