import react from 'react';

const Hero =({handelLogOut})=>{

    return (
        <section className="hero"> 
        <nav>
            <h2>Welcome</h2>
            <button onClick={handelLogOut}>LogOut</button>
        </nav>
        </section>
    )
}

export default Hero;