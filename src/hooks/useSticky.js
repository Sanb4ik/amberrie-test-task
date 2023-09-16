import {useEffect, useState} from "react";

export default  function useSticky() {
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const header = document.getElementById('header'); // Replace 'header' with the actual id or selector of your header element
            if (header) {
                const rect = header.getBoundingClientRect();
                if (rect.top <= 0) {
                    setIsHeaderSticky(true);
                } else {
                    setIsHeaderSticky(false);
                }
            }
        }

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return isHeaderSticky
}