import React, { Component } from 'react';

import Icon from '../icon';
import Arrow from '../arrow';

class LibraryCourse extends Component {
    render() {
        return (
        <div className="library-course">
            <div className="library-course__title-arrow">
                <label className="library-course__title">Problem Solving</label>
                { Icon('fas fa-check', 'library-course__icon') }
            </div>
                <Arrow className="library-course__arrow"/>
                {/* action button component */}
            <div className="library-course__description">
                <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu tempor purus. Morbi ultrices eros et elementum tincidunt. Nulla velit erat, suscipit
                    </p>
            </div>
            
        </div>
            );
    }
}

export default LibraryCourse;