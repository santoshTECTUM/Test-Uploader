import TowerUploade from "./Component/ViewLayout/TowerUploade";

export const Router = [
    {
        path: "/tower_uploader",
        name: "Tower Uploade",
        component: TowerUploade,
        layout: "/admin",
        icon: "",
        isAccess: "false"
    },
    {
        path: "/sdr_uploader",
        name: "SDR Uploade",
        component: TowerUploade,
        layout: "/admin",
        icon: "",
        isAccess: "false"
    },
]