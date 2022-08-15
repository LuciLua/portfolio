import styles from "./skillcardcontainer.module.scss";
import SkillCardItem from "./skillcarditem/Skillcarditem";

function SkillCardContainer() {
  return (
    <div className={styles.skillsItemContainer}>
      <SkillCardItem srcIcon="/html.svg" title="HTML">
        HTML
      </SkillCardItem>
      <SkillCardItem srcIcon="/css.svg" title="CSS">
        CSS
      </SkillCardItem>
      <SkillCardItem srcIcon="/javascript.svg" title="JavaScript">
        JavaScript
      </SkillCardItem>
      <SkillCardItem srcIcon="/python.svg" title="Python">
        Python
      </SkillCardItem>
      <SkillCardItem srcIcon="/typescript.png" title="Typescript">
        Typescript
      </SkillCardItem>
      <SkillCardItem srcIcon="/vue.png" title="VueJs">
        VueJs
      </SkillCardItem>
      <SkillCardItem srcIcon="/node.png" title="NodeJs">
        NodeJs
      </SkillCardItem>
      <SkillCardItem srcIcon="/react.png" title="ReactJs">
        ReactJs
      </SkillCardItem>
      <SkillCardItem srcIcon="/sass.png" title="Sass">
        Sass
      </SkillCardItem>
      <SkillCardItem srcIcon="/next.png" title="Nextjs">
        Nextjs
      </SkillCardItem>
      <SkillCardItem srcIcon="/batch.png" title="Batch Script">
        Batch Script
      </SkillCardItem>
      <SkillCardItem srcIcon="/mysql.png" title="MySql">
        MySql
      </SkillCardItem>
    </div>
  );
}

export default SkillCardContainer;
