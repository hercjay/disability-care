import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nidilrr-api.gov/',
  });
  
  const dhdsApi = axios.create({
    baseURL: 'https://cdc-dhds-api.gov/',
  });
  
  const icfApi = axios.create({
    baseURL: 'https://icf-model-api.gov/',
  });

export const getHealthRisks = async (disability, healthOutcome) => {
  const nidilrrResponse = await api.get(`health-risks/${disability}/${healthOutcome}`);
  const dhdsResponse = await dhdsApi.get(`data/${disability}/${healthOutcome}`);
  const icfResponse = await icfApi.get(`model/${disability}/${healthOutcome}`);

  const prevalence = nidilrrResponse.data.prevalence;
  const riskFactors = dhdsResponse.data.riskFactors;
  const recommendations = icfResponse.data.recommendations;

  return { prevalence, riskFactors, recommendations };
};