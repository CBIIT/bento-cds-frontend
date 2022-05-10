/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Footer } from 'bento-components';
import gql from 'graphql-tag';
import FooterData from '../../bento/globalFooterData';
import env from '../../utils/env';
import client from '../../utils/graphqlClient';

const GET_BE_VERSION = gql`{
  schemaVersion
}
`;

const FILE_SERVICE_API = env.REACT_APP_FILE_SERVICE_API;

const ICDCFooter = () => {
  const [footerUpdatedData, setFooterUpdatedData] = useState(FooterData);
  async function getBEVersion() {
    const schemaVersion = await client
      .query({
        query: GET_BE_VERSION,
      })
      .then((result) => result.data.schemaVersion);
    return schemaVersion;
  }
  useEffect(() => {
    const getSystems = async () => {
      const response = await fetch(
        `${FILE_SERVICE_API}version`,
      ).then((resp) => (resp))
        .catch(() => ({ version: '' }));
      const data = response.json();
      const beVersion = await getBEVersion();
      setFooterUpdatedData({ ...FooterData, ...{ FileServiceVersion: data.version || '' }, ...{ BEversion: beVersion } });
    };
    getSystems();
  }, [FooterData]);

  return <><Footer data={footerUpdatedData} /></>;
};

export default ICDCFooter;
