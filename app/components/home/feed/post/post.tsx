"use client";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
export default function Post() {
  return (
    <>
      <div className="rounded-xl bg-white">
        <Header />

        <Content />
        <Footer />
      </div>
    </>
  );
}
