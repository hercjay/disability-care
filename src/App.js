import React, { useState, useEffect } from 'react';
import './App.css';
import { getHealthRisks } from './api';

function App() {
  const [disability, setDisability] = useState('');
  const [healthOutcome, setHealthOutcome] = useState('');
  const [prevalence, setPrevalence] = useState('');
  const [riskFactors, setRiskFactors] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchHealthRisks = async () => {
      const data = await getHealthRisks(disability, healthOutcome);
      setPrevalence(data.prevalence);
      setRiskFactors(data.riskFactors);
      setRecommendations(data.recommendations);
    };
    fetchHealthRisks();
  }, [disability, healthOutcome]);

  return (
    <div className="container mx-auto p-4 pt-6">
      <h1 className="text-3xl font-bold">Disability Health Risks</h1>
      <form>
        <label className="block" htmlFor="disability">Select Disability:</label>
        <select className="w-full p-2 pl-10 text-sm text-gray-700" id="disability" value={disability} onChange={(e) => setDisability(e.target.value)}>
          <option value="">Select</option>
          <option value="physical">Physical</option>
          <option value="sensory">Sensory</option>
          <option value="cognitive">Cognitive</option>
        </select>
        <label className="block" htmlFor="health-outcome">Select Health Outcome:</label>
        <select className="w-full p-2 pl-10 text-sm text-gray-700" id="health-outcome" value={healthOutcome} onChange={(e) => setHealthOutcome(e.target.value)}>
          <option value="">Select</option>
          <option value="diabetes">Diabetes</option>
          <option value="hypertension">Hypertension</option>
          <option value="depression">Depression</option>
        </select>
      </form>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Prevalence:</h2>
        <p>{prevalence}</p>
        <h2 className="text-2xl font-bold">Risk Factors:</h2>
        <ul>
          {riskFactors.map((factor, index) => (
            <li key={index}>{factor}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-bold">Recommendations:</h2>
        <ul>
          {recommendations.map((recommendation, index) => (
            <li key={index}>{recommendation}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;