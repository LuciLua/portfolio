import styles from "../styles/contact/index.module.scss";
import Head from "next/head";

function Contact() {
  function send(e: any) {
    var btn = document.getElementById("btnSend");
    const inputs: any = document.querySelectorAll(".inpForm");
    let reqs = 0;

    const spamVerification: any = document.getElementById("spamVerification");

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.length != 0) {
        reqs++;
      }
    }

    if (reqs == inputs.length) {
      if (spamVerification.value == "CrytoObela") {

        e.preventDefault()

        alert("PARE DE FAZER SPAM AQUI");

        setTimeout(function () {
          inputs.forEach((e: any) => {
            e.style.pointerEvents = "none";
            e.style.userSelect = "none";
            e.style.backgroundColor = "#9a9a9a29";
          });
          btn.style.pointerEvents = "none";
          btn.style.backgroundColor = "#f00";
          btn.style.color = "#000";
          btn.style.fontWeight = "800";
          btn.textContent = "SPAM DETECTED";
          btn.style.userSelect = "none";
        }, 500);

      } else {

        setTimeout(function () {
          inputs.forEach((e: any) => {
            e.style.pointerEvents = "none";
            e.style.userSelect = "none";
            e.style.backgroundColor = "#9a9a9a29";
          });

          btn.style.pointerEvents = "none";
          btn.style.backgroundColor = "#00ff62";
          btn.style.color = "#000";
          btn.style.fontWeight = "800";
          btn.textContent = "Enviado";
          btn.style.userSelect = "none";
        }, 500);
      }
    } else {
      alert("ops... Você esqueceu de responder algo!");
    }
  }

  return (
    <div
      className={`pages ${styles.contactSubpagina}`}
      id="contact-subpagina"
    >
      <Head>
        <title>Luci Lua | Contact</title>
      </Head>
      <div className={styles.titleContactContainer}>
        <h2>Contact me</h2>
      </div>

      <div className={styles.contentContact}>
        <form
          action={process.env.LINK}
          target="prox"
        >
          <input
            type="text"
            placeholder="Nome"
            name={process.env.NAME}
            className={"inpForm"}
            id={"spamVerification"}
            required
          />
          <input
            type="text"
            placeholder="Email"
            name={process.env.EMAIL}
            className={"inpForm"}
            required
          />
          <textarea
            placeholder="Mensagem"
            name={process.env.MSG}
            id=""
            cols={30}
            rows={10}
            className={"inpForm"}
            required
          ></textarea>
          <button onClick={send} id="btnSend">
            Enviar
          </button>
        </form>

        <iframe
          src={process.env.LINK}
          style={{ display: "none" }}
          name="prox"
          frameBorder="0"
        ></iframe>
        <div className={'line'}></div>
        <p>Ou mande-me um e-mail em luci.lua81@gmail.com</p>
      </div>
    </div>
  );
}

export default Contact;
