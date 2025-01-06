"use client"
import React, {useState} from 'react';
import Icon from "@/components/icons/Icon";

interface SidebarCardProps {
    service: string;
    active: string | undefined;
    setActive: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const SidebarCard = ({service, active, setActive}: SidebarCardProps ) => {

    let bgColor;
    let bgHover;
    let icon;
    let label;
    let borderColor;

    switch (service) {
        case "location":
            bgColor = "bg-solution-location"
            borderColor = "border-solution-location"
            bgHover = "hover:bg-solution-locationHover"
            icon = "location"
            label = "Location"
            break;
        case "negoce":
            bgColor = "bg-solution-negoce"
            borderColor = "border-solution-negoce"
            bgHover = "hover:bg-solution-negoceHover"
            icon = "negoce"
            label = "Négoce"
            break;
        case "conseils":
            bgColor = "bg-featured-shadow"
            borderColor = "border-featured-shadow"
            bgHover = "hover:bg-featured"
            icon = "stepOne"
            label = "Conseils"
            break;
        case "installation":
            bgColor = "bg-accent"
            borderColor = "border-accent"
            bgHover = "hover:bg-accent-shadow"
            icon = "stepTwo"
            label = "Installation"
            break;
        case "formation":
            bgColor = "bg-featured"
            borderColor = "border-featured"
            bgHover = "hover:bg-featured-shadow"
            icon = "stepThree"
            label = "Formation"
            break;
        case "assistance":
            bgColor = "bg-accent-shadow"
            borderColor = "border-accent-shadow"
            bgHover = "hover:bg-accent"
            icon = "stepFour"
            label = "Assistance"
            break;
        default:
            break;
    }
    return (
        <button
            type={"button"}
            onClick={() => setActive(active === service ? undefined : service)}
            className={`sidebarCard min-w-[7.5rem] w-full lg:w-auto lg:min-w-[230px] ${active === service ? `border-b-4 pb-2 lg:border-b-0 lg:pb-6 lg:pr-4 lg:border-r-8 ${borderColor} bg-white text-black` : ` ${bgColor} ${bgHover}`} `}>
            <Icon name={icon!}/>
            <span className="flex-auto text-left">{label}</span>
        </button>
    );
};

export default SidebarCard;