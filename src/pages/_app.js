// _app.js Whatever happens in here, happens on every page - perfect place to link stylesheet, or other general stuff
import React from "react";
import "../../styles/forms.css";
import "../../styles/globals.css";
import "../../styles/tablet.css";
import "../../styles/desktop.css";
import Context from "../../components/Context";
import Layout from "../../components/Layout";
import { useState, useContext } from "react";
import Basket from "../../components/Basket";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function MyApp({ Component, pageProps }) {
  const context = useContext(Context);

  // Input chat
  const [chatInput, setChatInput] = useState();

  // 01. Din ny bolig
  const [nyBolig, setNyBolig] = useState({
    id: "",
    type: "",
    adresse: "",
    postnr: "",
    by: "",
    land: "",
    pris: "",
    betaling: "",
    indkomst: "",
    gaeld: "",
  });
  // Nuværende bolig
  const [nuvaerendeBolig, setNuvaerendeBolig] = useState({
    type: "",
    adresse: "",
    postnr: "",
    by: "",
    land: "",
    boligvaerd: "",
    boliglaan: "",
    boliglaanrestgaeld: "",
    boliglaanrente: "",
    boliglaanafdrag: "",
    realkreditlaan: "",
    realkreditlaanbank: "",
    realkreditlaanoprettet: "",
    realkreditlaanhovedstol: "",
    realkreditlaanrestgaeld: "",
    realkreditlaanrente: "",
    realkreditlaanrentetype: "",
    realkreditlaanafdrag: "",
    nylaan: "",
    skalsaelges: "",
  });
  // Anden Nuværende bolig
  const [andenNuvaerendeBolig, setAndenNuvaerendeBolig] = useState({
    type: "",
    adresse: "",
    postnr: "",
    by: "",
    land: "",
    boligVærd: "",
    banklaan: "",
    banklaanrestgaeld: "",
    banklaanrente: "",
    banklaanafdrag: "",
    realkreditlaan: "",
    realkreditlaanbank: "",
    realkreditlaanoprettet: "",
    realkreditlaanhovedstol: "",
    realkreditlaanrestgaeld: "",
    realkreditlaanrente: "",
    realkreditlaanrentetype: "",
    realkreditlaanafdrag: "",
    nylaan: "",
    skalsaelges: "",
  });
  // Lånebehov
  const [laanebehov, setLaanebehov] = useState({});
  // What is in the table of Ny Bolig
  const [boliger, setBoliger] = useState([]);
  // Ny Bolig ID
  const [boligId, setBoligId] = useState();
  // Steps
  const [dinNyBolig, setDinNyBolig] = useState();
  const [dinBoligSituation, setDinBoligSituation] = useState();
  const [ejendele, setEjendele] = useState();
  const [lidtOmDig, setLidtOmDig] = useState();
  const [indtaegter, setIntaegter] = useState();
  const [opsparing, setOpsparing] = useState();

  // Fetch Boliger from Supabase (Ny Bolig table)
  useEffect(() => {
    async function getBoliger() {
      const url = "https://wimczkvwnsepkvefdtzp.supabase.co/rest/v1/nyBolig";
      const headers = {
        "Content-Type": "application/json",
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpbWN6a3Z3bnNlcGt2ZWZkdHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyNjY5NTYsImV4cCI6MjAwMDg0Mjk1Nn0.wKsEPjpUvAZEzzuau6t0gW8X5-F3kmoIvaAcoUV-BK4",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpbWN6a3Z3bnNlcGt2ZWZkdHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyNjY5NTYsImV4cCI6MjAwMDg0Mjk1Nn0.wKsEPjpUvAZEzzuau6t0gW8X5-F3kmoIvaAcoUV-BK4",
        Prefer: "return=minimal",
      };
      const options = {
        method: "GET",
        headers: headers,
      };
      const body = {
        body: "false",
      };
      // Await then execute the code.
      const res = await fetch(url, options, body); // Fetchs the data (await)
      const boliger = await res.json(); //When it's done getting it
      setBoliger(boliger);
      console.log(boliger);
      generateNewId(boliger);
      // console.log("Pris:", boliger[0].pris);
    }
    getBoliger();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Generate New ID
  function generateNewId(arr) {
    setBoligId((arr[arr.length - 1].id = arr[arr.length - 1].id + 1));
    console.log(boligId);
    console.log(typeof boligId);
  }

  return (
    <>
      <Context.Provider
        value={{ boligId, setBoligId, boliger, setBoliger, nyBolig, setNyBolig, nuvaerendeBolig, setNuvaerendeBolig, andenNuvaerendeBolig, setAndenNuvaerendeBolig, laanebehov, setLaanebehov, chatInput, setChatInput, dinNyBolig, setDinNyBolig }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Context.Provider>
      <Analytics />
    </>
  );
}
