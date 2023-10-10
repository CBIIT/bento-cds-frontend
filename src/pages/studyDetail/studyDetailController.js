import React from 'react';
import { useQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import StudyView from './studyDetailView';
import { Typography } from '../../components/Wrappers/Wrappers';
import { GET_PROGRAM_DETAIL_DATA_QUERY } from '../../bento/studyDetailData';

const StudyDetailContainer = ({ match }) => {
  const { loading, error, data } = useQuery(GET_PROGRAM_DETAIL_DATA_QUERY, {
    variables: { phs_accession: match.params.id },
  });

  if (loading) return <CircularProgress />;
  if (error || !data || data.studyDetail.phs_accession !== match.params.id) {
    return (
      <Typography variant="headline" color="error" size="sm">
        {error ? `An error has occurred in loading stats component: ${error}` : 'Recieved wrong data'}
      </Typography>
    );
  }
  return <StudyView data={data} />;
};

export default StudyDetailContainer;