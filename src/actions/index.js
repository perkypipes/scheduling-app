import { FETCH_COURSES } from './types';

function fetchCourses() {
    return {
        type: FETCH_COURSES,
        payload: [
            {
            title: "Up and Running with Redis",
            Description: "In this course you'll learn how to work with something or other"
            },
            {
                title: "HTML/CSS Bootcamp",
                description: "this will be a basic rundown of everything you need to know about html and css."
            },
            {
                title: "UX For Developers",
                description: "this is a user experience course (UX) and thats pretty important so thats cool."
            },
        ]
        
        
    }
}