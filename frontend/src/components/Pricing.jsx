import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: '/pricing.jpg',
      title: 'Quarterly',
      price: '5000',
      length: 3,
    },
    {
      imgUrl: '/pricing.jpg',
      title: 'Half Yearly',
      price: '8000',
      length: 6,
    },
    {
      imgUrl: '/pricing.jpg',
      title: 'Yearly',
      price: '15000',
      length: 12,
    },
  ];
  return (
    <section className="pricing">
      <h1>GymKhana Packages</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
              <p>
                <Check /> Free Diet Plan
              </p>
              <p>
                <Check /> Personal Locker
              </p>
              <p>
                <Check /> Changing Room
              </p>
              <p>
                <Check /> Free Counselling
              </p>
              <p>
                <Check /> Fingerprint Attendance
              </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
