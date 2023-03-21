import React from "react";
import {Preloader} from "../Components/common/Preloader/Preloader";


export const withSuspense = (Component: JSX.Element) => {

    return <React.Suspense fallback={<Preloader/>}>
        {Component}
    </React.Suspense>
}
