import Link from "next/link";
import { useRef, useContext, useEffect } from "react";
import Context from "./Context";
import { useRouter } from "next/router";

export default function StepsMobile() {
  const context = useContext(Context);
  // Setting a Reference to each step / Element in the DOM
  const stepOne = useRef(null);
  const stepTwo = useRef(null);
  const stepThree = useRef(null);
  const stepFour = useRef(null);
  const stepFive = useRef(null);
  const stepSix = useRef(null);
  const stepSeven = useRef(null);
  // const stepEight = useRef(stepEight);
  const boliger = context.boliger;
  // URL Path Name
  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    function checkSteps(context) {
      // const boliger = context.boliger;
      // const stepOne = context.StepsMobile.stepOne;
      if (currentPath.includes("02-din-boligsituation/01-din-boligsituation")) {
        stepOne.current.classList.remove("step-disabled");
        stepOne.current.classList.add("step");
        console.log("boliger from checkSteps():", boliger);
      }
      if (currentPath.includes("03-ejendele/01-ejendele")) {
        stepTwo.current.classList.remove("step-disabled");
        stepTwo.current.classList.add("step");
        console.log("boliger from checkSteps():", boliger);
      }
      if (currentPath.includes("04-lidt-om-dig/01-lidt-om-dig")) {
        stepThree.current.classList.remove("step-disabled");
        stepThree.current.classList.add("step");
        console.log("boliger from checkSteps():", boliger);
      }
    }
    checkSteps();
  }, []);

  return (
    <>
      <div className="flex-row-space-around" id="steps">
        <Link id="step-din-ny-bolig" href={"/"} className="step-disabled" ref={stepOne}>
          <div>Din ny bolig</div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
          </div>
        </Link>
        <Link id="step-din-boligsituation" href={"/"} className="step-disabled" ref={stepTwo}>
          <div>Din boligsituation</div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
          </div>
        </Link>
        <Link id="step-ejendele" href={"/"} className="step-disabled" aria-disabled="true" ref={stepThree}>
          <div>Ejendele</div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
          </div>
        </Link>
        <Link id="step-lidt-om-dig" href={"/"} className="step-disabled" ref={stepFour}>
          <div>Lidt om dig</div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
          </div>
        </Link>
        <Link id="step-intaegter" href={"/"} className="step-disabled" ref={stepFive}>
          <div>Intægter</div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
          </div>
        </Link>
        <Link id="step-opsparing" href={"/"} className="step-disabled" ref={stepSix}>
          <div>Opsparing</div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
          </div>
        </Link>
        <Link id="step-godkendelse" href={"/"} className="step-disabled" ref={stepSeven}>
          <div>Godkendelse</div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
          </div>
        </Link>
      </div>
    </>
  );
}
