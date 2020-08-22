import React from 'react';
import style from './Front.module.css';
import useWebAnimations from "@wellyshen/use-web-animations";

function FrontPage() {
    const { ref } = useWebAnimations({
        keyframes: [
            { transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 0 },
            { transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', offset: 0.4 },
            { transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: '1', offset: 0.6 },
            { transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)', opacity: '1', offset: 0.8 },
            { transform: 'perspective(400px)', opacity: '1', offset: 1 }
        ],
        timing: {
            delay: 1000,
            duration: 3000,
            iterations: 1
        }
    });

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
