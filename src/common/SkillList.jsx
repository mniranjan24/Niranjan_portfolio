function SkillList({src,skill}){
    return(
        <span>
        <img src={src} alt="Ckeckmark icon"/>
        <p>{skill}</p>
    </span>
    )
}
export default SkillList