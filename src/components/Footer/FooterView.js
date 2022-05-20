import React, { useEffect, useState } from 'react';
import { Footer } from 'bento-components';
import FooterData from '../../bento/globalFooterData';
import env from '../../utils/env';

const FILE_SERVICE_API = env.REACT_APP_FILE_SERVICE_API;

const ICDCFooter = () => {
  const [footerUpdatedData, setFooterUpdatedData] = useState(FooterData);
  const url = window.location.href;
  const { hash } = window.location;
  const indexOfHash = url.indexOf(hash) || url.length;
  const hashlessUrl = url.substr(0, indexOfHash);
  async function getBEVersion() {
    const schemaVersion = await fetch(
      `${hashlessUrl}version`,
    )
      .then((response) => response.text())
      .then((data) => {
        const backendObj = JSON.parse(data);
        return backendObj.version;
      })
      .catch(() => '0.0.0');
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
