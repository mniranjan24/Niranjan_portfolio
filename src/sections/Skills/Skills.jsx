import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';
function Skills(){
    return (
    <section className={styles.container}>
        <h2 className='sectionTitle'>Skills</h2>
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="HTML"/>
           <SkillList src={checkMarkIcon} skill="CSS"/>
           <SkillList src={checkMarkIcon} skill="JAVASCRIPT"/>
           <SkillList src={checkMarkIcon} skill="PYTHON"/>
           <SkillList src={checkMarkIcon} skill="SQL"/>
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="REACT"/>
           <SkillList src={checkMarkIcon} skill="DJANGO"/>
           <SkillList src={checkMarkIcon} skill="BOOTSTRAP"/>
        </div>
        <hr />
        <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="RestAPI"/>
        <SkillList src={checkMarkIcon} skill="REDUX"/>
        <SkillList src={checkMarkIcon} skill="Git"/>
        <SkillList src={checkMarkIcon} skill="MySQL"/>
        <SkillList src={checkMarkIcon} skill="POSTMAN"/>
           
        </div>
    </section>
    )
}
export default Skills;