//Create a List, map through the repos that are passed in
//racf
//Destructure and pull out repos
import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './Repoitem';

const Repos = ({ repos }) => {
    return repos.map(repo => <RepoItem repo={repo} key={repo.id} /> )
};

Repos.propTypes = {
    repos: PropTypes.array.isRequired
};

export default Repos;
