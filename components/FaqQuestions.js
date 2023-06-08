import Link from "next/link";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export default function FaqQuestions() {
  return (
    <>
      <div id="faq-questions" className="grid">
        {/* Om os  */}
        <div className="col-3-11">
          <h2>Har du spørgsmål? Vi har svar!</h2>

          <p>
            Vi har samlet de mest almindelige spørgsmål, som vores brugere typisk har, i denne FAQ. Her kan du finde svar på alt fra, hvordan du ansøger om et boliglån, til hvad du kan forvente i forhold til renter, gebyrer og tilbagebetaling. Hvis
            du stadig har spørgsmål, er du velkommen til at kontakte vores supportteam, som altid står klar til at hjælpe dig.
          </p>

          <div className="mtb">
            <form>
              {/* Din udbetaling  */}
              <div className="flex-column-left field">
                <label htmlFor="search"></label>
                <div className="input-group">
                  <div className="tilmeld">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </div>
                  <input type="text" name="search" id="search" placeholder="Hvad leder du efter?" minLength="2" required />
                  <span className="error-message">Enter a valid value</span>
                </div>
              </div>
            </form>
          </div>

          <Accordion>
            {/* New item  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Hvordan fungerer Boliglån.dk?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* New item  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Hvad skal jeg vide, når jeg søger boliglån?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.</p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* New item  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Hvilke dokumenter har jeg brug for at ansøge om et boliglån?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.</p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* New item  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Hvor lang tid tager det at få godkendt en boliglånsansøgning?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.</p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* New item  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Hvordan kan jeg betale mit boliglån tilbage hurtigere?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.</p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* New item  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Hvad er renten på et boliglån, og hvordan beregnes den?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.</p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* New item  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Hvad er forskellen på fast og variabel rente?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.</p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* New item  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Hvordan kan jeg finde ud af, om det er bedre at købe eller leje en bolig?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.</p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* New item  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Hvad er afdrag, og hvordan fungerer det?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.</p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* New item  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Hvordan kan jeg forbedre min kreditværdighed, så jeg kan få et bedre tilbud?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.</p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* New item  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Hvordan kan jeg vælge det bedste boliglån for mig?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.</p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* New item  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Hvad er forskellen på boliglån og realkreditlån?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.</p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* New item  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Hvad er ÅOP på boliglån og huslån?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.</p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>

          {/* <div className="btns-container">
            <Link href={""} className="btn-contact">
              <div className="flex-row-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
                <p className="">12 34 56 78</p>
              </div>
            </Link>
            <Link href={""} className="btn-contact">
              <div className="flex-row-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                </svg>
                <p className="">info@boliglån.dk</p>
              </div>
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
}
