import React, { useState, useEffect } from 'react';
import './App.css';
import { getHealthRisks } from './api';
import dhdsConstants from  './utils/dhds-api-constants';

function App() {
  const [disability, setDisability] = useState('');
  const [healthOutcome, setHealthOutcome] = useState('');
  const [prevalence, setPrevalence] = useState('');
  const [riskFactors, setRiskFactors] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  function getDisabilityInsights() {
    //check that values are valid
    const indicator = document.querySelector('#indicator-id').value;
    const stratification = document.querySelector('#stratification-1').value;
    alert('indicator is ' + indicator + 'stratification ' + stratification);
  }

  // useEffect(() => {
  //   const fetchHealthRisks = async () => {
  //     const data = await getHealthRisks(disability, healthOutcome);
  //     setPrevalence(data.prevalence);
  //     setRiskFactors(data.riskFactors);
  //     setRecommendations(data.recommendations);
  //   };
  //   fetchHealthRisks();
  // }, [disability, healthOutcome]);

  return (
    <div className="container flex justify-center mx-auto my-auto p-4 pt-6 ">
      <div className='bg-white p-8 rounded-sm mt-6 shadow-md max-w-full md:max-w-screen-md'>
        <h1 className="text-3xl font-bold mb-2">Disability Data Comparison Tool</h1>
        <p className='mb-8'>
          Uncover insights into disability disparities by comparing employment, education, income and other outcomes for people with various disabilities, including self-care, independent living, cognitive, and mobility disabilities, against those without disabilities.
        </p>
        <form className='flex flex-col gap-4 mb-12'>

          <div className='flex flex-col gap-2'>
            <label htmlFor="stratification-1">Select Disability status:</label>
            <select id="stratification-1" className='p-2 border'>
                <option disabled value="">Select Disability status:</option>
                {dhdsConstants.stratification1.map((option) => (
                  <option value={option.key}>{option.title}</option>
                ))}
            </select>
          </div>
          
          <div className='flex flex-col gap-2'>
            <label htmlFor="indicator-id">Select an indicator</label>
            <select id="indicator-id" className='p-2 border'>
                <option disabled value="">Select Disability status</option>
                {dhdsConstants.indicatorid.map((option) => (
                  <option value={option.key}>{option.title}</option>
                ))}
            </select>
          </div>

          <button onClick={() => getDisabilityInsights()} className='bg-teal-500 hover:bg-teal-600 shadow-teal-300 text-white font-bold py-2 px-4 mt-2 rounded shadow-lg '>
              Get insights
          </button>

        </form>


        <small>
          <strong>Attribution</strong>: Centers for Disease Control and Prevention, National Center on Birth Defects and Developmental Disabilities
        </small>

      </div>
    </div>
  );
}

export default App;