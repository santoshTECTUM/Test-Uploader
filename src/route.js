import SDRUploader from "./Component/ViewLayout/SDRUploader";
import Setting from "./Component/ViewLayout/Setting";
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
        component: SDRUploader,
        layout: "/admin",
        icon: "",
        isAccess: "false",
        subRoute: [
            {
                path: "/tower_uploader",
                name: "Tower Uploade",
                component: TowerUploade,
                layout: "/admin",
                icon: "",
                isAccess: "false"
            }, {
                path: "/setting",
                name: "setting",
                component: Setting,
                layout: "/admin",
                icon: "",
                isAccess: "false"
            },

        ]
    },
    {
        path: "/setting",
        name: "setting",
        component: Setting,
        layout: "/admin",
        icon: "",
        isAccess: "false"
    },
]