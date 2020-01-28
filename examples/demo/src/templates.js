
import React from "react";
import * as flags from '@activewidgets/examples/flags';


export function company({data}){
    return <div>
        <div className="bold blue">{data.customerID}</div>
        <div className="small">{data.companyName}</div>
    </div>;
}

export function contact({data}){
    return <div>
        <div className="bold">{data.contactName}</div>
        <div className="small">{data.contactTitle}</div>
    </div>;
}

export function address({data}){
    return <div>
        <div className="small">{data.address}</div>
        <div className="small">{data.postalCode} <span>{data.city}</span></div>
    </div>;
}

export function country({text}){
    return <div><img src={flags[text]}/>{text}</div>;
}

export function phone({data}){
    return <div>
        <div className="small phone">{data.phone}</div>
        <div className="small fax">{data.fax}</div>
    </div>;
}
