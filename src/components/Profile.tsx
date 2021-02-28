import styles from '../styles/components/Profile.module.css';
import {useContext} from "react";
import {ChallengesContext} from "../contexts/ChallengeContext";

export function Profile() {
    const {level} = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/assisgui.png" alt="Guilherme Almeida" />
            <div>
                <strong>Guilherme Almeida</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}
