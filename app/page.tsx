import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JobInfo from "@/components/JobInfo";
import Form from "@/components/Form";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <JobInfo />
        <Form />
      </main>
    </>
  );
}
