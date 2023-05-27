import React from 'react';
import Container from '../shared/Container';
import categories from './categoriesData'
import CategoryBox from './CategoryBox';

const Categories = () => {
    return (
        <div>
            <Container>
                <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
                    {
                        categories.map(((category, index)=><CategoryBox label={category.label} icon={category.icon} key={index}></CategoryBox>))
                    }
                </div>
            </Container>
        </div>
    );
};

export default Categories;