import styles from '../styles/home/index.module.scss'
import Head from "next/head"

function Contact() {

  function send() {
    var btn = document.getElementById('btn-send')
    const inputs = document.querySelectorAll('.inpForm')
    let reqs = 0

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.length != 0) {
        reqs++
      }
    }

    if (reqs == inputs.length) {
      setTimeout(
        function () {
          inputs.forEach(e => { e.style.pointerEvents = 'none'; e.style.userSelect = 'none'; e.style.backgroundColor = '#9a9a9a29' })
          btn.style.pointerEvents = 'none'; btn.style.backgroundColor = '#00ff62'; btn.style.color = '#000'; btn.style.fontWeight = '800'; btn.textContent = 'Enviado'; btn.style.userSelect = 'none'
        }, 500)
    } else {
      alert('ops... Você esqueceu de responder algo!')
    }
  }

  return (
    <>
      <Head>
        <title>Luci Lua | Contact</title>
      </Head>
      <div className={`${styles.pages} ${styles.contactSubpagina}`} id="contact-subpagina">
        <div className={styles.pInit}>
          <h2>Contact me</h2>
        </div>

        <div className={styles.contentContact}>
          <form action="https://docs.google.com/forms/d/e/1FAIpQLSehd1Fv1bXZRMB2eaKo1bSHvsADwVcS3blsy1JqXJTHIN-lBA/formResponse" target="prox">
            <input type="text" placeholder="Nome" name="entry.783351493" className={styles.inpForm} required />
            <input type="text" placeholder="Email" name="entry.34306990" className={styles.inpForm} required />
            <textarea placeholder="Mensagem" name="entry.1056023067" id="" cols="30" rows="10" className={styles.inpForm} required></textarea>
            <button onClick={send} id="btn-send">Enviar</button>
          </form>

          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSehd1Fv1bXZRMB2eaKo1bSHvsADwVcS3blsy1JqXJTHIN-lBA/formResponse" style={{ 'display': 'none' }} name="prox" frameBorder="0"></iframe>

          <div className={styles.line}></div>

          <p>
            Ou mande-me um e-mail em luci.lua81@gmail.com
          </p>
        </div>
      </div>

    </>
  )
}


export default Contact