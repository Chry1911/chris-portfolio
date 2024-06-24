import React from 'react';
import CardLayout from '../../Common/CardLayout';

const CertificationCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="p-8 h-full relative card_stylings transition">
                <div className="w-full h-48 flex items-center justify-center">
                    <img src={data?.image} className="max-h-full max-w-full object-contain" alt="Certification" />
                </div>
                <div className="text-Snow font-bold mt-4 text-center">
                    {data?.title}
                </div>
                <div className="text-sm mt-2 text-LightGray font-normal text-center">
                    {data?.description}
                </div>
            </div>
        </CardLayout>
    );
};

export default CertificationCard;
