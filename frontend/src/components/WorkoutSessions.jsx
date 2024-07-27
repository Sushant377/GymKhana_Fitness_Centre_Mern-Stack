
function WorkoutSessions() {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1> Workout Design</h1>
        <p style={{color:"black"}}>
          Our workout sessions are designed by our NASM certified head coach Mr.Sushan Lamichhane  to push your limits and help you achieve your fitness goals.
        </p>
        <img src="/img5.jpg" alt="workoutsession" />
      </div>
      <div className="wrapper">
        <h1>Our Services</h1>
        <p style={{color:"black"}} >
          Explore wide range of services we offer to help you stay fit. Our professional trainers and state-of-the-art facilities are here to support you every step of the way.
        </p>
        <div className="bootcamps">
          <div>
            <h4>ELite Membership</h4>
            <p>
              Get elite membership with  workout plans and one-on-one coaching with our certified personal trainers. They will help you set realistic goals and achieve them efficiently.
            </p>
          </div>
          <div>   
            <h4>Group Classes</h4>
            <p>
              Join our group classes to stay motivated and enjoy a variety of workouts including yoga, pilates, spinning, and high-intensity interval training (HIIT).
            </p>
          </div>
          <div>
            <h4>Nutrition Counseling</h4>
            <p>
              Our nutrition experts will provide you with customized diet plans to complement your fitness routine and ensure you meet your health and wellness goals.
            </p>
          </div>
          <div>
            <h4>Massage Therapy</h4>
            <p>
              Relax and rejuvenate with our massage therapy services. Our skilled therapists offer a range of treatments to help you recover faster and feel your best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkoutSessions;
