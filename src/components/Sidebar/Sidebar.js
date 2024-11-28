import React from 'react';
import { useSidebarContext } from '../../context/sidebarContext';
import { ImCancelCircle } from "react-icons/im";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { useMealContext } from '../../context/mealContext';
import { localFoodCategories } from "../../actions/localFoodCategories";

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useSidebarContext();
    const { categories } = useMealContext();

    return (
        <nav className={`sidebar ${isSidebarOpen ? 'sidebar-visible' : ""}`}>
            <button type="button" className='navbar-hide-btn' onClick={() => closeSidebar()}>
                <ImCancelCircle size={24} />
            </button>

            <div className='side-content'>
                <ul className='side-nav'>
                    {localFoodCategories.map((category, index) => (
                        <li className='side-item' key={index}> {/* Using index as a fallback unique key */}
                            <Link
                                to={`/meal/category/${category.name}`}
                                className='side-link ls-1 fs-13'
                                onClick={() => closeSidebar()}
                            >
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
