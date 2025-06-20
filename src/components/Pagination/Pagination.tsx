
import { useEffect, useState } from "react";

export default function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 20;
    useEffect(()=>{
        localStorage.setItem("currentPage", currentPage.toString());
    }, [currentPage]);
    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const getVisiblePages = () => {
        const pages: number[] = [];
        if (currentPage > 1) pages.push(currentPage - 1);
        pages.push(currentPage); 
        if (currentPage < totalPages) pages.push(currentPage + 1); 
        return pages;
    };

    const visiblePages = getVisiblePages();

    return (
        <div className="flex items-center gap-4 justify-center mt-8">
           
            <button
                className="text-gray-500 bg-transparent disabled:opacity-30"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.191815 6.46637L4.52543 10.8001C4.64914 10.9238 4.81402 10.9917 4.98982 10.9917C5.16582 10.9917 5.3306 10.9237 5.4543 10.8001L5.84776 10.4065C5.97137 10.283 6.03947 10.118 6.03947 9.94215C6.03947 9.76634 5.97137 9.59581 5.84776 9.4723L3.31959 6.93856L11.3517 6.93856C11.7139 6.93856 12 6.65505 12 6.29281L12 5.73643C12 5.37418 11.7139 5.06209 11.3517 5.06209L3.29091 5.06209L5.84767 2.51421C5.97128 2.3905 6.03937 2.23001 6.03937 2.05411C6.03937 1.87841 5.97128 1.71558 5.84767 1.59197L5.45421 1.19968C5.3305 1.07597 5.16572 1.00856 4.98972 1.00856C4.81392 1.00856 4.64904 1.07685 4.52534 1.20056L0.191718 5.53418C0.067719 5.65828 -0.000475432 5.82394 1.28342e-05 6.00003C-0.000378188 6.17671 0.0677189 6.34247 0.191815 6.46637Z" fill="#696969" />
                </svg>
            </button>

            {visiblePages.map((page) => (
                <button
                    key={page}
                    className={`w-[44px] h-[44px]  rounded-full flex items-center justify-center text-sm font-medium ${
                        currentPage === page ? "bg-blue-600 text-white" : "text-color"
                    }`}
                    onClick={() => goToPage(page)}
                >
                    {page}
                </button>
            ))}

            <button
                className="text-gray-500 bg-transparent disabled:opacity-30"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8082 5.53363L7.47457 1.19991C7.35086 1.0762 7.18598 1.0083 7.01018 1.0083C6.83418 1.0083 6.6694 1.0763 6.5457 1.19991L6.15224 1.59347C6.02863 1.71698 5.96053 1.88195 5.96053 2.05785C5.96053 2.23366 6.02863 2.40419 6.15224 2.5277L8.68041 5.06144H0.648287C0.286144 5.06144 0 5.34495 0 5.70719V6.26357C0 6.62582 0.286144 6.93791 0.648287 6.93791H8.70909L6.15233 9.48579C6.02873 9.6095 5.96063 9.76999 5.96063 9.94589C5.96063 10.1216 6.02873 10.2844 6.15233 10.408L6.54579 10.8003C6.6695 10.924 6.83428 10.9914 7.01028 10.9914C7.18608 10.9914 7.35096 10.9231 7.47466 10.7994L11.8083 6.46582C11.9323 6.34172 12.0005 6.17606 12 5.99997C12.0004 5.82329 11.9323 5.65753 11.8082 5.53363Z" fill="#696969" />
                </svg>
            </button>
        </div>
    );
}
