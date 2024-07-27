
import { useState } from "react"
import { toast } from "react-toastify";

function BMICalculator() {

 const [height, setHeight] = useState("");
 const [weight, setWeight] = useState("");
 const [gender,setGender] = useState("");
 const [bmi, setBmi] = useState("");

 const calculateBMI =(e)=>{
  e.preventDefault();
  if(!height || !weight || !gender){
    toast.error("You must enter Height, Weight and Gender");
    return ;
  }
  const heightInMetres = height/100;
  const bmiValue = (weight/(heightInMetres * heightInMetres)).toFixed(2);
  setBmi(bmiValue);

  if(bmiValue < 18.5){
    toast.warning("You are underweight. Consult with trainer Sushan");
  }
  else if(bmiValue >= 18.5 && bmiValue < 24.9){
    toast.success("You have normal weight. Keep Grinding");
  }
  if(bmiValue >= 25 && bmiValue <29.9){
    toast.warning("You are overweight. Consult with trainer Sushan");
  }
  // else{
  //   toast.error("Invalid Data . Please enter valid data")
  // }
 }
  return (
    <section className="bmi">
      <h1>BMI Calculator</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label >Height(cm)</label>
              <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required/>
            </div>
            <div>
              <label >Weight(kg)</label>
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required/>
            </div>
            <div>
              <label >Gender</label>
              <select value={gender} onChange={(e)=>setGender(e.target.value)}>
              <option value="">Select Gender </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
              </div>
              <button type="submit" >Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="bmi pic" />
        </div>
      </div>
    </section>
  )
}

export default BMICalculator