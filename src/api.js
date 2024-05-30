import axios from 'axios';



const dhdsToken = 'a8BudXiBvot4pnyXAHa3VLCBm';

const api = axios.create({
    baseURL: 'https://nidilrr-api.gov/',
  });
  
  const dhdsApi = axios.create({
    baseURL: 'https://data.cdc.gov/resource/k62p-6esq.json',
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


export const getDisabilityInsightsFromDhds = async (indicator, stratification) => {
  alert('here');
  return dhdsApi.get(`?indicatorid=${indicator}&stratification1=${stratification}&$$app_token=${dhdsToken}`)
    .then((response) => {
      alert('response is ' + response.data);
      return response.data;
    })
    .catch((error) => {
      alert('error is ' + error);
      throw error;
    });
    
}