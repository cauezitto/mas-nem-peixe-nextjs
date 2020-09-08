import React from 'react'
import './styles.css'

import {FiSearch, FiChevronDown} from 'react-icons/fi'

export default function SearchHeader() {
    return (
        <div className = 'container'>
            <div className = 'searchInputContainer'>
                <input 
                type = 'text' 
                className = 'searchInput'
                placeholder = 'DIGITE OQUE ESTÁ PROCURANDO'
                />
                
                <FiSearch/>
            </div>

            <div className = 'searchLinksContainer'>
                <strong className = 'searchLink'>
                    <FiChevronDown/>
                    CAMISETAS
                </strong>

                <strong className = 'searchLink'>
                    <FiChevronDown/>
                    DECORAÇÃO
                </strong>

                <strong className = 'searchLink'>
                    <FiChevronDown/>
                    CANECAS
                </strong>

                <strong className = 'searchLink'>
                    <FiChevronDown/>
                    VESTUÁRIO
                </strong>
            </div>
        </div>
    )
}
