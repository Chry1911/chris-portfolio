import React from 'react';
import CertificationCard from './CertificationCard';
import axios from 'axios';
import { useQuery } from 'react-query';
import ParagraphSkeleton from '../../Common/ParagraphSkeleton';

const Certifications = () => {
    const { isLoading, error, data } = useQuery('certifications', () =>
        axios.get('/api/certifications')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching certifications:', error))
    );

    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Certifications</div>
            <div className="grid w-full h-full mt-5 justify-items-start grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-4 px-2 md:px-8 pb-8">
                {isLoading ?
                    [1, 2, 3, 4].map((_, index) => (
                        <ParagraphSkeleton key={index} className={"p-8 h-full w-full relative"} />
                    ))
                    :
                    data?.map((certification, key) => (
                        <CertificationCard key={key} data={certification} />
                    ))
                }
            </div>
        </>
    );
};

export default Certifications;
