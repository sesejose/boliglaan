import StepsMobile from "../../../../../components/StepsMobile";
import Link from "next/link";
import Context from "../../../../../components/Context";
import { useState, useContext } from "react";
import { useEffect } from "react";
// import { postNyBolig } from "../../../../../components/Post";
import { patchNyBolig } from "../../../../../components/Patch";
import { useRouter } from "next/router";

export default function DinNyBolig(props) {
  const context = useContext(Context);
  const router = useRouter();

  function errorMessage(e) {}
  // Function Submit Ny Bolig 1
  function submit(e) {
    e.preventDefault();
    postBolig();
    router.push(`/loan/steps/01-din-ny-bolig/02-din-ny-bolig`);
  }

  // Patch Ny Bolig in Supabase
  async function postBolig() {
    const response = await patchNyBolig({
      // id: 1,
      type: context.nyBolig.type,
      adresse: context.nyBolig.adresse,
      postnr: context.nyBolig.postnr,
      by: context.nyBolig.by,
      land: context.nyBolig.land,
      // pris: "",
      // betaling: "",
      // indkomst: "",
      // gaeld: "",
    });
  }

  // Ny Bolig type
  function setNyBoligType(e) {
    context.setNyBolig((previous) => ({ ...previous, type: e.target.value }));
    console.log(e.target.value);
    console.log(typeof context.nyBolig.type);
  }

  // Ny Bolig Adresse
  function setNyBoligAdresse(e) {
    context.setNyBolig((previous) => ({ ...previous, adresse: e.target.value }));
    console.log(e.target.value);
    console.log(typeof context.nyBolig.adresse);
  }
  // Ny Bolig Postnr
  function setNyBoligPostnr(e) {
    context.setNyBolig((previous) => ({ ...previous, postnr: e.target.value }));
    console.log(context.nyBolig.postnr);
    console.log(typeof context.nyBolig.postnr);
  }
  // Ny Bolig By
  function setNyBoligBy(e) {
    context.setNyBolig((previous) => ({ ...previous, by: e.target.value }));
    console.log(e.target.value);
    console.log(typeof context.nyBolig.by);
  }
  // Ny Bolig Land
  function setNyBoligLand(e) {
    context.setNyBolig((previous) => ({ ...previous, land: e.target.value }));
    console.log(e.target.value);
    console.log(typeof context.nyBolig.land);
  }

  return (
    <>
      {/* Modal intro  */}
      <div id="modal-intro" className="grid-center">
        <div className="modal-container flex-column-center col-3-11">
          {/* <div className="close-modal" onClick={hideModalIntro}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div> */}
          <h2>Godt at vide inden du går i gang med din ansøgning.</h2>
          <p className="small">
            I gennem ansøgning process vi kommer at spørger dig om forskællige ting, så anbefælles at have disse informationer med dig inden du går i gang med din ansøgning. <strong>Her en liste med hvad kommer vi at spørger dig om:</strong>
          </p>
          <p className="small green">(*) I tilfælde af eksisterende.</p>

          <div className="flex-row-modal">
            <p>
              <strong>Boligsituation:</strong> Addresse og værd på af ejerbolig.(*) Boliglån type, restgæld, rente og rente type.(*)
            </p>

            <p>
              <strong>Ejendele:</strong> Køretøj mærke, model, årgang og ejerforholdene.(*) Køretøj lån, låneudbyder, skylder og månedlige ydelse.(*)
            </p>

            <p>
              <strong>Indtægter:</strong> Månedlig husstandsindkomst(før skat). Arbejdsform og månedlige indkomst. Fagforening.(*) A-kasse.(*)
            </p>

            <p>
              <strong>Gæld: </strong> SU lån.(*) Banklån.(*) Banklån udbyder, restgæld, rentesats, rentetype og månedlige ydelse.
            </p>

            <p>
              <strong>Opsparing:</strong> Din bank. Husstanden stående på opsparings og lønkonti. Renten på opsparingskontoen. Kassekredit.(*) Kassekreditten maksimale beløb, penge på den og rente. Aktier (*) og penge i den. Penge i private
              pensionsopsparing.(*)
            </p>
          </div>
          <div>
            <p className="small">Det er også en god idé at oprette en konto og log ind, så hvis du skal forlade vi gemmer alle informationer du har allerede indstat for når du kommer tilbage.</p>
          </div>
          {/* <p>God fornjølse</p> */}
          <div className="container-buttons">
            <button className="btn-card-second" onClick={hideModalIntro}>
              Fortsæt uden logge ind
            </button>
            <Link className="btn-card" href={""}>
              Opret en konto
            </Link>
          </div>
        </div>
      </div>

      {/* Modal Phone  */}
      <div id="modal-phone" className="">
        <div className="modal-container flex-column-center col-3-11">
          {/* <div className="close-modal" onClick={hideModalIntro}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div> */}
          <h3>Du kan også ansøge med et opkald!</h3>
          <p className="">Hvis du ønsker at tale med en repræsentant og ansøge telefonisk, kan du ringe til os på dette telefonnummer fra mandag til fredag ​​fra 8.00 til 15.00.</p>

          <button className="btn-contact" onClick={closeModalPhone}>
            Forstået
          </button>
        </div>
      </div>

      {/* Back and Steps Bar */}
      <div className="step-back-wrapper">
        <div className="flex-row-space-around step-back-container">
          <div className="flex-row-left">
            <Link href="/" className="flex-row-left back">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg>
              Forside
            </Link>
          </div>
          <div className="flex-row-right">
            <button className="btn-card-second" onClick={openSteps}>
              1/8
            </button>
          </div>
        </div>
      </div>
      <StepsMobile></StepsMobile>
      {/**** FORM ****/}
      <div className="form-wrapper">
        <form id="nyBoligFormOne" onSubmit={submit}>
          <h2>Din ny bolig</h2>
          <p>For at bankerne kan komme med et tilbud på din økonomi, er de nødt til at vide noget omkring dine ønsker og behov.</p>
          <fieldset className="flex-column-left">
            <div className="flex-row-left">
              <legend>Hvilke type bolig vil du købe?</legend>
            </div>
            {/* Ejer eller Andel  */}
            <div className="radio-toolbar">
              <input type="radio" id="ny_bolig_ejersbolig" name="ny_bolig_andel_eller_ejerbolig" value="Ejersbolig" required onClick={setNyBoligType} />
              <label htmlFor="ny_bolig_ejersbolig">Ejer</label>

              <input type="radio" id="ny_bolig_andelsbolig" name="ny_bolig_andel_eller_ejerbolig" value="Andelsbolig" required onClick={setNyBoligType} />
              <label htmlFor="ny_bolig_andelsbolig">Andel</label>
            </div>
          </fieldset>
          {/* Ny Bolig Adresse */}
          <div className="flex-column-left">
            <p>Hvad er adressen på den bolig, du ønsker at købe? (valgfrit)</p>

            {/* Adresse  */}
            <div className="flex-column-left field">
              <label htmlFor="adresse_ny_bolig">Adresse</label>
              <input type="text" name="adresse_ny_bolig" id="adresse_ny_bolig" placeholder="Adresse" minLength="2" required onChange={setNyBoligAdresse} />
              <span className="nybolig-error-msg">Enter a valid value</span>
            </div>

            <div className="two-inputs-row">
              {/* Postnr.  */}
              <div className="flex-column-left field">
                <label htmlFor="postnr_ny_bolig">Postnr.</label>
                <input type="number" name="postnr_ny_bolig" id="postnr_ny_bolig" placeholder="Postnr." minLength="4" required onChange={setNyBoligPostnr} />
                <span className="error-message">Enter a valid value</span>
              </div>
              {/* By  */}
              <div className="flex-column-left field">
                <label htmlFor="by_ny_bolig">By</label>
                <input type="text" name="by_ny_bolig" id="by_ny_bolig" placeholder="By" minLength="2" required onChange={setNyBoligBy} />
                <span className="error-message">Enter a valid value</span>
              </div>
            </div>
            {/* Ny Bolig Land */}
            <div className="flex-column-left field">
              <label htmlFor="land_ny_bolig">Land</label>
              <input type="text" name="land_ny_bolig" id="land_ny_bolig" placeholder="Land" minLength="2" required onChange={setNyBoligLand} />
              <span className="error-message">Enter a valid value</span>
            </div>
          </div>
          {/* Submit  */}
          <div className="flex-row-center">
            <button className="btn-form" type="submit" onClick={errorMessage}>
              Fortsæt
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

function openSteps() {
  const steps = document.querySelector("#steps");
  if (steps.style.display === "flex") {
    steps.style.display = "none";
  } else {
    steps.style.display = "flex";
  }
}

function hideModalIntro() {
  document.querySelector("#modal-intro").classList.add("hiden");
  openModalPhone();
}

function openModalPhone() {
  const steps = document.querySelector("#modal-phone");
  if (steps.style.display === "none") {
    steps.style.display = "flex";
  } else {
    steps.style.display = "flex";
  }
}

function closeModalPhone() {
  const steps = document.querySelector("#modal-phone");
  if (steps.style.display === "flex") {
    steps.style.display = "none";
  } else {
    steps.style.display = "none";
  }
}

// function submit(e) {
//   // e.preventDefault();
//   window.location.href = "/loan/steps/01-din-ny-bolig/02-din-ny-bolig";
//   document.getElementById("nyBoligFormOne").submit();
// }
