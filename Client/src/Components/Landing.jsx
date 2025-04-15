import React from 'react'
import "../Css/Landing.Css"
const Landing = () => {
  return (
    <div className="landing_wrapper" >
        {/* nav links */}
        <div className="nav_wrapper" >
        <nav>
            <ul>
                <li id='home' >Home</li>                
                <li id='about' >About Us</li>                
                <li id='goal' >Our Goal</li>                
                <li id='contact' >Contact Us</li>                
                
            </ul>
        </nav>
        <div className="button_wrapper" >
            <button>
                Quote
            </button>
        </div>
        </div>
        {/* header content */}
        <div className="header_wrapper" >
            <header>
                <div className="insideHeader_wrapper" >
                    
                    <h2>About Us</h2>
                   <p><span>"</span>As a moving company, we help people relocate by packing, loading, transporting, and unloading their belongings safely and efficiently. We handle heavy and fragile items with care, saving clients time, stress, and physical effort.<span>"</span><br/> - Michael Rainey</p>
                </div>
            </header>
        </div>
        {/* main content */}
        <div className="main_wrapper" >
            <main>
                <div className="insideMain_wrapper" >
                    <h2>Our Goal</h2>
                    <p>Our mission as movers is to take the pressure off our clients during a move. We carefully organize, load, and transport their belongings so they don't have to deal with the heavy lifting or logistics. We focus on making the process simple, fast, and safe, ensuring everything arrives on time and in one piece, giving peace of mind throughout.<br/> - Clayton Johnson</p>

                </div>
            </main>
        </div>
        {/* footer content */}
        <div className="footer_wrapper" >
            <footer>
            <div className="insideFooter_wrapper">
                <form>
                <h2>Contact Us</h2>
                    <input type="text"  placeholder='name'/>
                    <input type="email" placeholder='email'/>
                    <input type="text" placeholder='subject'/>
                    <input type="text" placeholder='text'/>
                    <button>Submit</button>
                </form>
            </div>
            {/* copyright */}
            <div className='copyright_wrapper' >
                <p>copyright©practicelayout2025</p>
            </div>
            </footer>
        </div>
    </div>
  )
}

export default Landing