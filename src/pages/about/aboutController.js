import React, { useState, useEffect } from 'react';
import yaml from 'js-yaml';
import axios from 'axios';
import YAMLData from '../../content/prod/aboutPagesContent.yaml';
import AboutView from './aboutView';
import { CircularProgress } from '@material-ui/core';

const About = ({ match }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let resultData = [];
      let result = [];
      try {
        setLoading(true);
        result = await axios.get(YAMLData);
        resultData = yaml.safeLoad(result.data);
        const supportObj = resultData.find(({ page }) => page === match.path);
        setData(supportObj);
      } catch (error) {
        return setData({error})
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [match.path]);

  if(data.error){
    return <div>Error in Loading aboutPagesContent.yaml.</div>
  }

  if (loading) return <CircularProgress />;

  return (

    <AboutView data={data} />
  );
};
export default About;
