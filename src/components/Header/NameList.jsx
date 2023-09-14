import React from 'react';

const NameList = ({className, iconNames}) => {

    const namedItems = iconNames.map((str, index) => (
        <div key={index}>{str}</div>
    ));

    return (
        <div className={className}>
            {namedItems}
        </div>
    );
};

export default NameList;
