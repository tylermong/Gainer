import '../index.css'; 
import { useState } from 'react';
import Menu from "../components/Menu"

function CreateWorkout() {
    const [isTemplateMenuOpen, setTemplateMenuOpen] = useState(false);

        const toggleTemplateMenu = () => {
            setTemplateMenuOpen(!isTemplateMenuOpen);
          }

    return (
        <>
            <div className = "container">
                <Menu />
                <div className = "page-container">
                    <div className = "create-workout-container">
                        <h1>Build a Mesocycle</h1>
                        <div id = "mesocycle-options">
                            <button className = "mesocycle-option" onClick = {toggleTemplateMenu}>Template</button>
                            <button className = "mesocycle-option">Custom</button>
                        </div>
                        {isTemplateMenuOpen && (
                            <div id = "template-menu">
                                <div className = "template-container">
                                    <div className = "split-type">Full Body</div>
                                    <div className = "split-name">High Frequency Full Body</div>
                                    <div className = "split-tags">
                                        <span>5x/Week</span>
                                        <span>Beginner</span>
                                        <span>Hypertrophy</span>
                                    </div>
                                </div>
                                <div className = "template-container">
                                    <div className = "split-type">Upper/Lower</div>
                                    <div className = "split-name">Heavy Duty Upper Lower</div>
                                    <div className = "split-tags">
                                        <span>4x/Week</span>
                                        <span>Advanced</span>
                                        <span>Hypertrophy</span>
                                    </div>
                                </div>
                                <div className = "template-container">
                                    <div className = "split-type">Bro Split</div>
                                    <div className = "split-name">RP Style Bro Split</div>
                                    <div className = "split-tags">
                                        <span>5x/Week</span>
                                        <span>Advanced</span>
                                        <span>Hypertrophy</span>
                                    </div>
                                </div>
                                <div className = "template-container">
                                    <div className = "split-type">Arnold Split</div>
                                    <div className = "split-name">High Volume Arnold Split</div>
                                    <div className = "split-tags">
                                        <span>5x/Week</span>
                                        <span>Advanced</span>
                                        <span>High Volume</span>
                                        <span>Hypertrophy</span>
                                    </div>
                                </div>
                            </div>
                         )}
                    </div>
                </div>  
            </div>
        </>
    );
}

export default CreateWorkout