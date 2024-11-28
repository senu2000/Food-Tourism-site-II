import React from "react";
import "./Category.scss";
import { Link } from "react-router-dom";
import { localFoodCategories } from "../../actions/localFoodCategories";

const CategoryList = () => {
    return (
        <div className="section-wrapper bg-whitesmoke">
            <div className="container">
                <div className="sc-title">Categories</div>
                <section className="sc-category grid">
                    {localFoodCategories.map((category) => {
                        const { id, name, image, description } = category;

                        return (
                            <Link
                                to={`/meal/category/${name}`} // Correct the URL
                                className="category-itm align-center justify-center"
                                key={id}
                            >
                                <div className='category-itm-img h-100 w-100 flex align-center justify-center'>
                                    <img src={image} alt={name} style={{borderRadius:"20px"}} className='category-img' />
                                    <div className='category-itm-title bg-orange'>
                                        <h3 className='text-white fs-11 fw-6 ls-1 text-uppercase'>{name}</h3>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </section>
            </div>
        </div>
    );
};

export default CategoryList;
