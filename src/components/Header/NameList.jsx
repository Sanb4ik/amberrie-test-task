import React from 'react';

const NameList = ({className, iconNames, showBlock, up}) => {

    const namedItems = iconNames.map((str, index) => (
        <div key={index}>
        {
            (index === 8 && showBlock)
                ?
                <p className='hide'>Скрыть</p>
                :
                str
        }
        </div>

    ));

    return (
        <>
            {
                up
                    ?
                    <div className={className}>
                        {namedItems}
                    </div>
                    :
                    showBlock
                        ?
                        <div className={'logos_name down'}>
                            {namedItems}
                        </div>
                        :
                        <></>
            }
        </>


    );
};

export default NameList;
