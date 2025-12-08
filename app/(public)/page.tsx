import Navbar from "@/components/Navbar";

const Page = () =>{
  return (
    <>
        <section id="Home"  className="hero-section">
        <div className="container">
          <div className="hero-grid">
          <div className="hero-content">
            <h4>Finally,<br/>Expenses that track themselves.</h4>
            <p>No spreadsheets. No manual entry. Just answers.</p>
            <a href="#Features" className="sub-text-link">2 minutes to understand why<span className="sub-arrow">↓</span></a>
          </div>
          <div className="hero-card"> 
              <div className="hero-card-content">
                <div className="hero-card-receipt">📃</div>
                <div className="hero-card-arrow">↓</div>
                <div className="hero-card-data">Oraganized Data</div>
              </div>
          </div>
          </div>
        </div>
        </section>

        <section id="Features" className="features-section">
          <div className="container">
            <div className="feature-heading">What if your money managed itself?</div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📸</div>
                <p className="text-black-16">Snap-Done</p>
              </div>
            <div className="feature-card">
                <div className="feature-icon">💾</div>
                <p className="text-black-16">Spent $50 on groceries-logged</p>
              </div>
            <div className="feature-card">
                <div className="feature-icon">📊</div>
                <p className="text-black-16">AI Analysis and in-depth insights</p>
              </div>
            </div>
            <a href="#Insights" className="sub-text-link">Seriously,it's that easy! <span className="sub-arrow">↓</span></a>
          </div>
        </section>

          <section id="Insights" className="insights-section">
            <div className="container">
              <div className="insights-grid">
                <div className="insights-block">
                <div className="insights-content">
                  <h4>AI Analysis of your expenses</h4>
                  <p >Proactive insights to stop overspending.</p>
                  <div className="small-card">"You usually overspend on weekends. Got $200 left."</div>
               
                <div className="insights-card">
                  <img src="https://placehold.co/400x300/f2fcf9/44bca6?text=Visual:+AI+Insights" alt="AI Insights Visual" />
                </div>
                 </div>
                 </div>
                 <div className="insights-block">
                <div className="insights-content">
                  <h4>Learns your habits</h4>
                  <p>The more you use it, the smarter and more personalized it gets.</p>
               
                <div className="insights-card">
                  <img src="https://placehold.co/400x300/f2fcf9/44bca6?text=Visual:+Learning+graph" alt="Learning graph Visual" />
                </div>
                 </div>
              </div>
              <a href="#Points" className="sub-text-link">One more thing <span className="sub-arrow">↓</span></a>
            </div>
            </div>
          </section>

          <section id="Points" className="points-section">
            <div className="container">
              <div className="points-heading">No worries in tracking expenses now!</div>
              <div className="points-grid">
                <div className="points-content">
                  <h3>5 sec</h3>
                  <p className="text-black-20">To log expenses</p>
                </div>
              <div className="points-content">
                  <h3>Visualizations</h3>
                  <p className="text-black-20">Graphs,charts and more!</p>
                </div>
              <div className="points-content">
                  <h3>Export Reports</h3>
                  <p className="text-black-20">PDF or CSV</p>
                </div>
              </div>
            </div>
            
            <div className="review-card">
              <div className="review-content">
                <div>"I forgot I was even tracking expenses. It just... happens now."</div>
                <p >-Someone,using for 6 months</p>
            </div> 
            </div>
             <a href="#Final" className="sub-text-link">Ready <span className="sub-arrow">↓</span></a>
          </section>

          <section id="Final" className="final-section">
            <div className="container">
              <div className="final-content">
                 <h4>Try it. You'll forget other apps exist.</h4>
                <ul className="final-content">
                  <li><span className="final-icon">√</span> Free to start, no credit card</li>
                  <li><span className="final-icon">√</span> Works in 30 seconds</li>
                  <li><span className="final-icon">√</span> Something ....</li>
                </ul>
              </div>
              <a href="/sign-in" className="btn">Sign In & Start Tracking</a>
              
            </div>
          </section>

        <footer id="Footer" className="footer-section">
            <div className="container">
              <div className="footer-grid">
               
              <div className="footer-col-logo">
                  <div className="footer-logo">
                    <img src="/Expent_logo.png" alt="logo" className="w-8 h-8"/>
                    <span>Expent</span>
                    <p className="footer-tag">
                      Stop stressing about spreadsheets.Expent AI-powered expense tracker that gives you instant clarity
                    </p>
                  </div>
              </div>

              <div className="footer-heading">
                <span>PRODUCT</span>
                <ul className="footer-pitem">
                  <a href="#Features">Features</a>
                   <a href="#Pricing">Pricing</a>
                </ul>
                  </div>

                <div className="footer-heading">
                <span>COMPANY</span>
                <ul className="footer-pitem">
                  <a href="#Features">About Us</a>
                   <a href="#Pricing">Contact</a>
                </ul>
                  </div>

              <div className="footer-heading">
                <span>RESOURCES</span>
                <ul className="footer-pitem">
                  <a href="#Features">Help Center</a>
                   <a href="#Pricing">Community</a>
                </ul>
                  </div>

                <div className="footer-bottom">
                <div  className="footer-copy">
                  ©<p id="year">2025</p><p>Expent.co All rights reserved.</p>
                </div>
                <div className="footer-links">
                  <a href="#Privacy Policy" >Privacy Policy</a>
                   <a href="#Terms of Service" >Terms of Service</a>
                    <a href="#Cookies" >Cookies</a>
                    </div>
                </div>
              </div>
            </div>
        </footer>
<script>
 document.getElementById('year').textContent = new Date().getFullYear();
</script>
</>
  )
}
export default Page;