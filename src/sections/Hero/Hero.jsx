import heroImg from '../../assets/hero-img.png'
import styles from  './HeroStyles.module.css';
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import profileimg from '../../assets/profileimage.jpeg'
import CV from '../../assets/M-NIRANJAN--Resume--.pdf'
import { useTheme } from '../../common/ThemeContext';
function Hero(){
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    
    return(
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img 
                className={styles.hero} 
                src={heroImg} alt='profile picture' 
                />
                 <img className={styles.colorMode} src={themeIcon} alt='color mode icon'
                 onClick={toggleTheme}/>
            </div>
           <div className={styles.info}>
            <h1>
                M NIRANJAN
            </h1>
            <h2>
                Full Stack Web Developer
            </h2>
            <span>
                <a href='https://github.com/mniranjan24' target='_blank'>
                    <img src={githubIcon} alt='git hub logo'/>
                </a>
                <a href='https://www.linkedin.com/in/niranjan-m-dev/' target='_blank'>
                    <img src={linkedinIcon} alt='linkedin hub logo'/>
                </a>
            </span>
            <p className={styles.description}>
            "I'm a passionate Full-Stack Developer skilled in building dynamic, responsive web applications using Python, Django, React, and modern technologies. I love turning ideas into real-world digital experiences with clean code and creative solutions. Welcome to my portfolio — where innovation meets craftsmanship."
            </p>
            <a href={CV} target='_blank' download>
                <button className='hover' >Resume</button>
            </a>
           </div>
        </section>
    )
}
export default Hero