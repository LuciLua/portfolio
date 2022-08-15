import styles from "./skillcardcontainer.module.scss";
import Skillcarditem from "./skillcarditem/Skillcarditem";

function Skillcardcontainer() {
  return (
    <div className={styles.skillsItemContainer}>
      <Skillcarditem srcIcon="/html.svg" title="HTML">
        HTML
      </Skillcarditem>
      <Skillcarditem srcIcon="/css.svg" title="CSS">
        CSS
      </Skillcarditem>
      <Skillcarditem srcIcon="/javascript.svg" title="JavaScript">
        JavaScript
      </Skillcarditem>
      <Skillcarditem srcIcon="/python.svg" title="Python">
        Python
      </Skillcarditem>
      <Skillcarditem srcIcon="/typescript.png" title="Typescript">
        Typescript
      </Skillcarditem>
      <Skillcarditem srcIcon="/vue.png" title="VueJs">
        VueJs
      </Skillcarditem>
      <Skillcarditem srcIcon="/node.png" title="NodeJs">
        NodeJs
      </Skillcarditem>
      <Skillcarditem srcIcon="/react.png" title="ReactJs">
        ReactJs
      </Skillcarditem>
      <Skillcarditem srcIcon="/sass.png" title="Sass">
        Sass
      </Skillcarditem>
      <Skillcarditem srcIcon="/next.png" title="Nextjs">
        Nextjs
      </Skillcarditem>
      <Skillcarditem srcIcon="/batch.png" title="Batch Script">
        Batch Script
      </Skillcarditem>
      <Skillcarditem srcIcon="/mysql.png" title="MySql">
        MySql
      </Skillcarditem>
    </div>
  );
}

export default Skillcardcontainer;
