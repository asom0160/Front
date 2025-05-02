"use client";

import Program from "./program/page";
import PortfolioLinks from "./portfolioLinks/page";
import Introduce from "./introduce/page";



export default function Home() {


  return (
    <main className="container mx-auto">

      <section className="snap-section">
        <Introduce />
      </section>
      <section className="snap-section">
        <PortfolioLinks />
      </section>
      <section className="snap-section">
        <Program />
      </section>
    </main>
  );
}