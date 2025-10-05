import Navbar from "@/components/Navbar";

const Page = () =>{
  return (
    <header>
    <Navbar></Navbar>
       <main>
        <div className="section">
            <section id="Home">
            <h1>Home Section</h1>
            <p>Scroll down to see more!</p>
        </section>
        </div>
        <div className="section">
        <section id="Features">
            <h2>Features</h2>
            <p>Features</p>
        </section>
        </div>
        <div className="section">
        <section id="Feedback">
            <h2>Feedback</h2>
            <p>This is the contact section.</p>
        </section>
        </div>
    </main>
    </header>
  )
}
export default Page;