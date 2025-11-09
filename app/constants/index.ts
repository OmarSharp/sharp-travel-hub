// import type { AxisModel } from "@syncfusion/ej2-react-charts";

import {formatDate} from "~/lib/utils";

export const sidebarItems = [
  {
    id: 1,
    icon: "/assets/icons/home.svg",
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 3,
    icon: "/assets/icons/users.svg",
    label: "All Users",
    href: "/users",
  },
  {
    id: 4,
    icon: "/assets/icons/itinerary.svg",
    label: "AI Trips",
    href: "/trips",
  },
];

export const chartOneData: object[] = [
  {
    x: "Jan",
    y1: 0.5,
    y2: 1.5,
    y3: 0.7,
  },
  {
    x: "Feb",
    y1: 0.8,
    y2: 1.2,
    y3: 0.9,
  },
  {
    x: "Mar",
    y1: 1.2,
    y2: 1.8,
    y3: 1.5,
  },
  {
    x: "Apr",
    y1: 1.5,
    y2: 2.0,
    y3: 1.8,
  },
  {
    x: "May",
    y1: 1.8,
    y2: 2.5,
    y3: 2.0,
  },
  {
    x: "Jun",
    y1: 2.0,
    y2: 2.8,
    y3: 2.5,
  },
];

export const travelStyles = [
  "Relaxed",
  "Luxury",
  "Adventure",
  "Cultural",
  "Nature & Outdoors",
  "City Exploration",
];

export const interests = [
  "Food & Culinary",
  "Historical Sites",
  "Hiking & Nature Walks",
  "Beaches & Water Activities",
  "Museums & Art",
  "Nightlife & Bars",
  "Photography Spots",
  "Shopping",
  "Local Experiences",
];

export const budgetOptions = ["Budget", "Mid-range", "Luxury", "Premium"];

export const groupTypes = ["Solo", "Couple", "Family", "Friends", "Business"];

export const footers = ["Terms & Condition", "Privacy Policy"];

export const selectItems = [
  "groupType",
  "travelStyle",
  "interest",
  "budget",
] as (keyof TripFormData)[];

export const comboBoxItems = {
  groupType: groupTypes,
  travelStyle: travelStyles,
  interest: interests,
  budget: budgetOptions,
} as Record<keyof TripFormData, string[]>;

// export const userXAxis: AxisModel = { valueType: "Category", title: "Day" };
// export const useryAxis: AxisModel = {
//   minimum: 0,
//   maximum: 10,
//   interval: 2,
//   title: "Count",
// };
//
// export const tripXAxis: AxisModel = {
//   valueType: "Category",
//   title: "Travel Styles",
//   majorGridLines: { width: 0 },
// };
//
// export const tripyAxis: AxisModel = {
//   minimum: 0,
//   maximum: 10,
//   interval: 2,
//   title: "Count",
// };

export const CONFETTI_SETTINGS = {
  particleCount: 200, // Number of confetti pieces
  spread: 60, // Spread of the confetti burst
  colors: ["#ff0", "#ff7f00", "#ff0044", "#4c94f4", "#f4f4f4"], // Confetti colors
  decay: 0.95, // Gravity decay of the confetti
};

export const LEFT_CONFETTI = {
  ...CONFETTI_SETTINGS,
  angle: 45, // Direction of the confetti burst (90 degrees is top)
  origin: { x: 0, y: 1 }, // Center of the screen
};

export const RIGHT_CONFETTI = {
  ...CONFETTI_SETTINGS,
  angle: 135,
  origin: { x: 1, y: 1 },
};


// Static Data

export const user = {name:'Omar'}

export const dashboardStats = {
    totalUsers: 1618,
    usersJoined: {
        currentMonth: 110,
        lastMonth: 85,
    },
    userRole: {
        total: 60,
        currentMonth: 90,
        lastMonth: 85,
    },
    totalTrips: 1500,
    tripsCreated: {
        currentMonth: 75,
        lastMonth: 125,
    },
}

export const allTrips = [{
    id: 1,
    name: "Tropical Rewind",
    imageUrls: ["/assets/images/sample1.jpg"],
    itinerary: [{ location: "Thailand" }],
    tags: ["Adventure", "Culture"],
    travelStyle: "Solo",
    estimatedPrice: "$1,000",
},
    {
        id: 2,
        name: "French Reverie",
        imageUrls: ["/assets/images/sample2.jpg"],
        itinerary: [{ location: "Paris" }],
        tags: ["Relaxation", "Culinary"],
        travelStyle: "Family",
        estimatedPrice: "$2,000",
    },
    {
        id: 3,
        name: "Zen Break",
        imageUrls: ["/assets/images/sample3.jpg"],
        itinerary: [{ location: "Japan" }],
        tags: ["Shopping", "Luxury"],
        travelStyle: "Couple",
        estimatedPrice: "$3,000",
    },
    {
        id: 4,
        name: "Adventure in Westeros",
        imageUrls: ["/assets/images/sample4.jpg"],
        itinerary: [{ location: "Croatia" }],
        tags: ["Historical", "Culture"],
        travelStyle: "Friends",
        estimatedPrice: "$4,000",
    },
];

export const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        imageUrl: "/assets/images/david.webp",
        dateJoined: formatDate("2025-01-01"),
        itineraryCreated: 10,
        status: "Admin",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        imageUrl: "/assets/images/david.webp",
        dateJoined: formatDate("2025-01-02"),
        itineraryCreated: 4,
        status: "user",
    },
    {
        id: 3,
        name: "John Will",
        email: "john.will@example.com",
        imageUrl: "/assets/images/david.webp",
        dateJoined: formatDate("2025-01-03"),
        itineraryCreated: 8,
        status: "user",
    },
    {
        id: 4,
        name: "John walt",
        email: "john.walt@example.com",
        imageUrl: "/assets/images/david.webp",
        dateJoined: formatDate("2025-01-03"),
        itineraryCreated: 8,
        status: "user",
    },
    {
        id: 5,
        name: "Sharp Array",
        email: "sharp.array@example.com",
        imageUrl: "/assets/images/david.webp",
        dateJoined: formatDate("2025-01-03"),
        itineraryCreated: 8,
        status: "Admin",
    },
    {
        id: 6,
        name: "John Castle",
        email: "john.castle@example.com",
        imageUrl: "/assets/images/david.webp",
        dateJoined: formatDate("2025-01-03"),
        itineraryCreated: 8,
        status: "user",
    },
    {
        id: 7,
        name: "John scote",
        email: "john.scote@example.com",
        imageUrl: "/assets/images/david.webp",
        dateJoined: formatDate("2025-01-03"),
        itineraryCreated: 8,
        status: "user",
    },
    {
        id: 8,
        name: "John ropier",
        email: "john.ropier@example.com",
        imageUrl: "/assets/images/david.webp",
        dateJoined: formatDate("2025-01-03"),
        itineraryCreated: 8,
        status: "user",
    },
    {
        id: 9,
        name: "John jackson",
        email: "john.jackson@example.com",
        imageUrl: "/assets/images/david.webp",
        dateJoined: formatDate("2025-01-03"),
        itineraryCreated: 8,
        status: "user",
    },
];

export const restcountries = [
    {
        "name": "Afghanistan",
        "latlng": [
            33.0,
            65.0
        ],
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
        "independent": false
    },
    {
        "name": "Åland Islands",
        "latlng": [
            60.116667,
            19.9
        ],
        "flag": "https://flagcdn.com/ax.svg",
        "independent": false
    },
    {
        "name": "Albania",
        "latlng": [
            41.0,
            20.0
        ],
        "flag": "https://flagcdn.com/al.svg",
        "independent": false
    },
    {
        "name": "Algeria",
        "latlng": [
            28.0,
            3.0
        ],
        "flag": "https://flagcdn.com/dz.svg",
        "independent": false
    },
    {
        "name": "American Samoa",
        "latlng": [
            -14.33333333,
            -170.0
        ],
        "flag": "https://flagcdn.com/as.svg",
        "independent": false
    },
    {
        "name": "Andorra",
        "latlng": [
            42.5,
            1.5
        ],
        "flag": "https://flagcdn.com/ad.svg",
        "independent": false
    },
    {
        "name": "Angola",
        "latlng": [
            -12.5,
            18.5
        ],
        "flag": "https://flagcdn.com/ao.svg",
        "independent": false
    },
    {
        "name": "Anguilla",
        "latlng": [
            18.25,
            -63.16666666
        ],
        "flag": "https://flagcdn.com/ai.svg",
        "independent": false
    },
    {
        "name": "Antarctica",
        "latlng": [
            -74.65,
            4.48
        ],
        "flag": "https://flagcdn.com/aq.svg",
        "independent": false
    },
    {
        "name": "Antigua and Barbuda",
        "latlng": [
            17.05,
            -61.8
        ],
        "flag": "https://flagcdn.com/ag.svg",
        "independent": false
    },
    {
        "name": "Argentina",
        "latlng": [
            -34.0,
            -64.0
        ],
        "flag": "https://flagcdn.com/ar.svg",
        "independent": false
    },
    {
        "name": "Armenia",
        "latlng": [
            40.0,
            45.0
        ],
        "flag": "https://flagcdn.com/am.svg",
        "independent": false
    },
    {
        "name": "Aruba",
        "latlng": [
            12.5,
            -69.96666666
        ],
        "flag": "https://flagcdn.com/aw.svg",
        "independent": false
    },
    {
        "name": "Australia",
        "latlng": [
            -27.0,
            133.0
        ],
        "flag": "https://flagcdn.com/au.svg",
        "independent": false
    },
    {
        "name": "Austria",
        "latlng": [
            47.33333333,
            13.33333333
        ],
        "flag": "https://flagcdn.com/at.svg",
        "independent": false
    },
    {
        "name": "Azerbaijan",
        "latlng": [
            40.5,
            47.5
        ],
        "flag": "https://flagcdn.com/az.svg",
        "independent": false
    },
    {
        "name": "Bahamas",
        "latlng": [
            24.25,
            -76.0
        ],
        "flag": "https://flagcdn.com/bs.svg",
        "independent": false
    },
    {
        "name": "Bahrain",
        "latlng": [
            26.0,
            50.55
        ],
        "flag": "https://flagcdn.com/bh.svg",
        "independent": false
    },
    {
        "name": "Bangladesh",
        "latlng": [
            24.0,
            90.0
        ],
        "flag": "https://flagcdn.com/bd.svg",
        "independent": false
    },
    {
        "name": "Barbados",
        "latlng": [
            13.16666666,
            -59.53333333
        ],
        "flag": "https://flagcdn.com/bb.svg",
        "independent": false
    },
    {
        "name": "Belarus",
        "latlng": [
            53.0,
            28.0
        ],
        "flag": "https://flagcdn.com/by.svg",
        "independent": false
    },
    {
        "name": "Belgium",
        "latlng": [
            50.83333333,
            4.0
        ],
        "flag": "https://flagcdn.com/be.svg",
        "independent": false
    },
    {
        "name": "Belize",
        "latlng": [
            17.25,
            -88.75
        ],
        "flag": "https://flagcdn.com/bz.svg",
        "independent": false
    },
    {
        "name": "Benin",
        "latlng": [
            9.5,
            2.25
        ],
        "flag": "https://flagcdn.com/bj.svg",
        "independent": false
    },
    {
        "name": "Bermuda",
        "latlng": [
            32.33333333,
            -64.75
        ],
        "flag": "https://flagcdn.com/bm.svg",
        "independent": false
    },
    {
        "name": "Bhutan",
        "latlng": [
            27.5,
            90.5
        ],
        "flag": "https://flagcdn.com/bt.svg",
        "independent": false
    },
    {
        "name": "Bolivia (Plurinational State of)",
        "latlng": [
            -17.0,
            -65.0
        ],
        "flag": "https://flagcdn.com/bo.svg",
        "independent": false
    },
    {
        "name": "Bonaire, Sint Eustatius and Saba",
        "latlng": [
            12.15,
            -68.266667
        ],
        "flag": "https://flagcdn.com/bq.svg",
        "independent": false
    },
    {
        "name": "Bosnia and Herzegovina",
        "latlng": [
            44.0,
            18.0
        ],
        "flag": "https://flagcdn.com/ba.svg",
        "independent": false
    },
    {
        "name": "Botswana",
        "latlng": [
            -22.0,
            24.0
        ],
        "flag": "https://flagcdn.com/bw.svg",
        "independent": false
    },
    {
        "name": "Bouvet Island",
        "latlng": [
            -54.43333333,
            3.4
        ],
        "flag": "https://flagcdn.com/bv.svg",
        "independent": false
    },
    {
        "name": "Brazil",
        "latlng": [
            -10.0,
            -55.0
        ],
        "flag": "https://flagcdn.com/br.svg",
        "independent": false
    },
    {
        "name": "British Indian Ocean Territory",
        "latlng": [
            -6.0,
            71.5
        ],
        "flag": "https://flagcdn.com/io.svg",
        "independent": false
    },
    {
        "name": "United States Minor Outlying Islands",
        "flag": "https://flagcdn.com/um.svg",
        "independent": false
    },
    {
        "name": "Virgin Islands (British)",
        "latlng": [
            18.431383,
            -64.62305
        ],
        "flag": "https://flagcdn.com/vg.svg",
        "independent": false
    },
    {
        "name": "Virgin Islands (U.S.)",
        "latlng": [
            18.34,
            -64.93
        ],
        "flag": "https://flagcdn.com/vi.svg",
        "independent": false
    },
    {
        "name": "Brunei Darussalam",
        "latlng": [
            4.5,
            114.66666666
        ],
        "flag": "https://flagcdn.com/bn.svg",
        "independent": false
    },
    {
        "name": "Bulgaria",
        "latlng": [
            43.0,
            25.0
        ],
        "flag": "https://flagcdn.com/bg.svg",
        "independent": false
    },
    {
        "name": "Burkina Faso",
        "latlng": [
            13.0,
            -2.0
        ],
        "flag": "https://flagcdn.com/bf.svg",
        "independent": false
    },
    {
        "name": "Burundi",
        "latlng": [
            -3.5,
            30.0
        ],
        "flag": "https://flagcdn.com/bi.svg",
        "independent": false
    },
    {
        "name": "Cambodia",
        "latlng": [
            13.0,
            105.0
        ],
        "flag": "https://flagcdn.com/kh.svg",
        "independent": false
    },
    {
        "name": "Cameroon",
        "latlng": [
            6.0,
            12.0
        ],
        "flag": "https://flagcdn.com/cm.svg",
        "independent": false
    },
    {
        "name": "Canada",
        "latlng": [
            60.0,
            -95.0
        ],
        "flag": "https://flagcdn.com/ca.svg",
        "independent": false
    },
    {
        "name": "Cabo Verde",
        "latlng": [
            16.0,
            -24.0
        ],
        "flag": "https://flagcdn.com/cv.svg",
        "independent": false
    },
    {
        "name": "Cayman Islands",
        "latlng": [
            19.5,
            -80.5
        ],
        "flag": "https://flagcdn.com/ky.svg",
        "independent": false
    },
    {
        "name": "Central African Republic",
        "latlng": [
            7.0,
            21.0
        ],
        "flag": "https://flagcdn.com/cf.svg",
        "independent": false
    },
    {
        "name": "Chad",
        "latlng": [
            15.0,
            19.0
        ],
        "flag": "https://flagcdn.com/td.svg",
        "independent": false
    },
    {
        "name": "Chile",
        "latlng": [
            -30.0,
            -71.0
        ],
        "flag": "https://flagcdn.com/cl.svg",
        "independent": false
    },
    {
        "name": "China",
        "latlng": [
            35.0,
            105.0
        ],
        "flag": "https://flagcdn.com/cn.svg",
        "independent": false
    },
    {
        "name": "Christmas Island",
        "latlng": [
            -10.5,
            105.66666666
        ],
        "flag": "https://flagcdn.com/cx.svg",
        "independent": false
    },
    {
        "name": "Cocos (Keeling) Islands",
        "latlng": [
            -12.5,
            96.83333333
        ],
        "flag": "https://flagcdn.com/cc.svg",
        "independent": false
    },
    {
        "name": "Colombia",
        "latlng": [
            4.0,
            -72.0
        ],
        "flag": "https://flagcdn.com/co.svg",
        "independent": false
    },
    {
        "name": "Comoros",
        "latlng": [
            -12.16666666,
            44.25
        ],
        "flag": "https://flagcdn.com/km.svg",
        "independent": false
    },
    {
        "name": "Congo",
        "latlng": [
            -1.0,
            15.0
        ],
        "flag": "https://flagcdn.com/cg.svg",
        "independent": false
    },
    {
        "name": "Congo (Democratic Republic of the)",
        "latlng": [
            0.0,
            25.0
        ],
        "flag": "https://flagcdn.com/cd.svg",
        "independent": false
    },
    {
        "name": "Cook Islands",
        "latlng": [
            -21.23333333,
            -159.76666666
        ],
        "flag": "https://flagcdn.com/ck.svg",
        "independent": false
    },
    {
        "name": "Costa Rica",
        "latlng": [
            10.0,
            -84.0
        ],
        "flag": "https://flagcdn.com/cr.svg",
        "independent": false
    },
    {
        "name": "Croatia",
        "latlng": [
            45.16666666,
            15.5
        ],
        "flag": "https://flagcdn.com/hr.svg",
        "independent": false
    },
    {
        "name": "Cuba",
        "latlng": [
            21.5,
            -80.0
        ],
        "flag": "https://flagcdn.com/cu.svg",
        "independent": false
    },
    {
        "name": "Curaçao",
        "latlng": [
            12.116667,
            -68.933333
        ],
        "flag": "https://flagcdn.com/cw.svg",
        "independent": false
    },
    {
        "name": "Cyprus",
        "latlng": [
            35.0,
            33.0
        ],
        "flag": "https://flagcdn.com/cy.svg",
        "independent": false
    },
    {
        "name": "Czech Republic",
        "latlng": [
            49.75,
            15.5
        ],
        "flag": "https://flagcdn.com/cz.svg",
        "independent": false
    },
    {
        "name": "Denmark",
        "latlng": [
            56.0,
            10.0
        ],
        "flag": "https://flagcdn.com/dk.svg",
        "independent": false
    },
    {
        "name": "Djibouti",
        "latlng": [
            11.5,
            43.0
        ],
        "flag": "https://flagcdn.com/dj.svg",
        "independent": false
    },
    {
        "name": "Dominica",
        "latlng": [
            15.41666666,
            -61.33333333
        ],
        "flag": "https://flagcdn.com/dm.svg",
        "independent": false
    },
    {
        "name": "Dominican Republic",
        "latlng": [
            19.0,
            -70.66666666
        ],
        "flag": "https://flagcdn.com/do.svg",
        "independent": false
    },
    {
        "name": "Ecuador",
        "latlng": [
            -2.0,
            -77.5
        ],
        "flag": "https://flagcdn.com/ec.svg",
        "independent": false
    },
    {
        "name": "Egypt",
        "latlng": [
            27.0,
            30.0
        ],
        "flag": "https://flagcdn.com/eg.svg",
        "independent": false
    },
    {
        "name": "El Salvador",
        "latlng": [
            13.83333333,
            -88.91666666
        ],
        "flag": "https://flagcdn.com/sv.svg",
        "independent": false
    },
    {
        "name": "Equatorial Guinea",
        "latlng": [
            2.0,
            10.0
        ],
        "flag": "https://flagcdn.com/gq.svg",
        "independent": false
    },
    {
        "name": "Eritrea",
        "latlng": [
            15.0,
            39.0
        ],
        "flag": "https://flagcdn.com/er.svg",
        "independent": false
    },
    {
        "name": "Estonia",
        "latlng": [
            59.0,
            26.0
        ],
        "flag": "https://flagcdn.com/ee.svg",
        "independent": false
    },
    {
        "name": "Ethiopia",
        "latlng": [
            8.0,
            38.0
        ],
        "flag": "https://flagcdn.com/et.svg",
        "independent": false
    },
    {
        "name": "Falkland Islands (Malvinas)",
        "latlng": [
            -51.75,
            -59.0
        ],
        "flag": "https://flagcdn.com/fk.svg",
        "independent": false
    },
    {
        "name": "Faroe Islands",
        "latlng": [
            62.0,
            -7.0
        ],
        "flag": "https://flagcdn.com/fo.svg",
        "independent": false
    },
    {
        "name": "Fiji",
        "latlng": [
            -18.0,
            175.0
        ],
        "flag": "https://flagcdn.com/fj.svg",
        "independent": false
    },
    {
        "name": "Finland",
        "latlng": [
            64.0,
            26.0
        ],
        "flag": "https://flagcdn.com/fi.svg",
        "independent": false
    },
    {
        "name": "France",
        "latlng": [
            46.0,
            2.0
        ],
        "flag": "https://flagcdn.com/fr.svg",
        "independent": false
    },
    {
        "name": "French Guiana",
        "latlng": [
            4.0,
            -53.0
        ],
        "flag": "https://flagcdn.com/gf.svg",
        "independent": false
    },
    {
        "name": "French Polynesia",
        "latlng": [
            -15.0,
            -140.0
        ],
        "flag": "https://flagcdn.com/pf.svg",
        "independent": false
    },
    {
        "name": "French Southern Territories",
        "latlng": [
            -49.25,
            69.167
        ],
        "flag": "https://flagcdn.com/tf.svg",
        "independent": false
    },
    {
        "name": "Gabon",
        "latlng": [
            -1.0,
            11.75
        ],
        "flag": "https://flagcdn.com/ga.svg",
        "independent": false
    },
    {
        "name": "Gambia",
        "latlng": [
            13.46666666,
            -16.56666666
        ],
        "flag": "https://flagcdn.com/gm.svg",
        "independent": false
    },
    {
        "name": "Georgia",
        "latlng": [
            42.0,
            43.5
        ],
        "flag": "https://flagcdn.com/ge.svg",
        "independent": false
    },
    {
        "name": "Germany",
        "latlng": [
            51.0,
            9.0
        ],
        "flag": "https://flagcdn.com/de.svg",
        "independent": false
    },
    {
        "name": "Ghana",
        "latlng": [
            8.0,
            -2.0
        ],
        "flag": "https://flagcdn.com/gh.svg",
        "independent": false
    },
    {
        "name": "Gibraltar",
        "latlng": [
            36.13333333,
            -5.35
        ],
        "flag": "https://flagcdn.com/gi.svg",
        "independent": false
    },
    {
        "name": "Greece",
        "latlng": [
            39.0,
            22.0
        ],
        "flag": "https://flagcdn.com/gr.svg",
        "independent": false
    },
    {
        "name": "Greenland",
        "latlng": [
            72.0,
            -40.0
        ],
        "flag": "https://flagcdn.com/gl.svg",
        "independent": false
    },
    {
        "name": "Grenada",
        "latlng": [
            12.11666666,
            -61.66666666
        ],
        "flag": "https://flagcdn.com/gd.svg",
        "independent": false
    },
    {
        "name": "Guadeloupe",
        "latlng": [
            16.25,
            -61.583333
        ],
        "flag": "https://flagcdn.com/gp.svg",
        "independent": false
    },
    {
        "name": "Guam",
        "latlng": [
            13.46666666,
            144.78333333
        ],
        "flag": "https://flagcdn.com/gu.svg",
        "independent": false
    },
    {
        "name": "Guatemala",
        "latlng": [
            15.5,
            -90.25
        ],
        "flag": "https://flagcdn.com/gt.svg",
        "independent": false
    },
    {
        "name": "Guernsey",
        "latlng": [
            49.46666666,
            -2.58333333
        ],
        "flag": "https://flagcdn.com/gg.svg",
        "independent": false
    },
    {
        "name": "Guinea",
        "latlng": [
            11.0,
            -10.0
        ],
        "flag": "https://flagcdn.com/gn.svg",
        "independent": false
    },
    {
        "name": "Guinea-Bissau",
        "latlng": [
            12.0,
            -15.0
        ],
        "flag": "https://flagcdn.com/gw.svg",
        "independent": false
    },
    {
        "name": "Guyana",
        "latlng": [
            5.0,
            -59.0
        ],
        "flag": "https://flagcdn.com/gy.svg",
        "independent": false
    },
    {
        "name": "Haiti",
        "latlng": [
            19.0,
            -72.41666666
        ],
        "flag": "https://flagcdn.com/ht.svg",
        "independent": false
    },
    {
        "name": "Heard Island and McDonald Islands",
        "latlng": [
            -53.1,
            72.51666666
        ],
        "flag": "https://flagcdn.com/hm.svg",
        "independent": false
    },
    {
        "name": "Vatican City",
        "latlng": [
            41.9,
            12.45
        ],
        "flag": "https://flagcdn.com/va.svg",
        "independent": false
    },
    {
        "name": "Honduras",
        "latlng": [
            15.0,
            -86.5
        ],
        "flag": "https://flagcdn.com/hn.svg",
        "independent": false
    },
    {
        "name": "Hungary",
        "latlng": [
            47.0,
            20.0
        ],
        "flag": "https://flagcdn.com/hu.svg",
        "independent": false
    },
    {
        "name": "Hong Kong",
        "latlng": [
            22.25,
            114.16666666
        ],
        "flag": "https://flagcdn.com/hk.svg",
        "independent": false
    },
    {
        "name": "Iceland",
        "latlng": [
            65.0,
            -18.0
        ],
        "flag": "https://flagcdn.com/is.svg",
        "independent": false
    },
    {
        "name": "India",
        "latlng": [
            20.0,
            77.0
        ],
        "flag": "https://flagcdn.com/in.svg",
        "independent": false
    },
    {
        "name": "Indonesia",
        "latlng": [
            -5.0,
            120.0
        ],
        "flag": "https://flagcdn.com/id.svg",
        "independent": false
    },
    {
        "name": "Ivory Coast",
        "latlng": [
            8.0,
            -5.0
        ],
        "flag": "https://flagcdn.com/ci.svg",
        "independent": false
    },
    {
        "name": "Iran (Islamic Republic of)",
        "latlng": [
            32.0,
            53.0
        ],
        "flag": "https://flagcdn.com/ir.svg",
        "independent": false
    },
    {
        "name": "Iraq",
        "latlng": [
            33.0,
            44.0
        ],
        "flag": "https://flagcdn.com/iq.svg",
        "independent": false
    },
    {
        "name": "Ireland",
        "latlng": [
            53.0,
            -8.0
        ],
        "flag": "https://flagcdn.com/ie.svg",
        "independent": false
    },
    {
        "name": "Isle of Man",
        "latlng": [
            54.25,
            -4.5
        ],
        "flag": "https://flagcdn.com/im.svg",
        "independent": false
    },
    {
        "name": "Israel",
        "latlng": [
            31.5,
            34.75
        ],
        "flag": "https://flagcdn.com/il.svg",
        "independent": false
    },
    {
        "name": "Italy",
        "latlng": [
            42.83333333,
            12.83333333
        ],
        "flag": "https://flagcdn.com/it.svg",
        "independent": false
    },
    {
        "name": "Jamaica",
        "latlng": [
            18.25,
            -77.5
        ],
        "flag": "https://flagcdn.com/jm.svg",
        "independent": false
    },
    {
        "name": "Japan",
        "latlng": [
            36.0,
            138.0
        ],
        "flag": "https://flagcdn.com/jp.svg",
        "independent": false
    },
    {
        "name": "Jersey",
        "latlng": [
            49.25,
            -2.16666666
        ],
        "flag": "https://flagcdn.com/je.svg",
        "independent": false
    },
    {
        "name": "Jordan",
        "latlng": [
            31.0,
            36.0
        ],
        "flag": "https://flagcdn.com/jo.svg",
        "independent": false
    },
    {
        "name": "Kazakhstan",
        "latlng": [
            48.0,
            68.0
        ],
        "flag": "https://flagcdn.com/kz.svg",
        "independent": false
    },
    {
        "name": "Kenya",
        "latlng": [
            1.0,
            38.0
        ],
        "flag": "https://flagcdn.com/ke.svg",
        "independent": false
    },
    {
        "name": "Kiribati",
        "latlng": [
            1.41666666,
            173.0
        ],
        "flag": "https://flagcdn.com/ki.svg",
        "independent": false
    },
    {
        "name": "Kuwait",
        "latlng": [
            29.5,
            45.75
        ],
        "flag": "https://flagcdn.com/kw.svg",
        "independent": false
    },
    {
        "name": "Kyrgyzstan",
        "latlng": [
            41.0,
            75.0
        ],
        "flag": "https://flagcdn.com/kg.svg",
        "independent": false
    },
    {
        "name": "Lao People's Democratic Republic",
        "latlng": [
            18.0,
            105.0
        ],
        "flag": "https://flagcdn.com/la.svg",
        "independent": false
    },
    {
        "name": "Latvia",
        "latlng": [
            57.0,
            25.0
        ],
        "flag": "https://flagcdn.com/lv.svg",
        "independent": false
    },
    {
        "name": "Lebanon",
        "latlng": [
            33.83333333,
            35.83333333
        ],
        "flag": "https://flagcdn.com/lb.svg",
        "independent": false
    },
    {
        "name": "Lesotho",
        "latlng": [
            -29.5,
            28.5
        ],
        "flag": "https://flagcdn.com/ls.svg",
        "independent": false
    },
    {
        "name": "Liberia",
        "latlng": [
            6.5,
            -9.5
        ],
        "flag": "https://flagcdn.com/lr.svg",
        "independent": false
    },
    {
        "name": "Libya",
        "latlng": [
            25.0,
            17.0
        ],
        "flag": "https://flagcdn.com/ly.svg",
        "independent": false
    },
    {
        "name": "Liechtenstein",
        "latlng": [
            47.26666666,
            9.53333333
        ],
        "flag": "https://flagcdn.com/li.svg",
        "independent": false
    },
    {
        "name": "Lithuania",
        "latlng": [
            56.0,
            24.0
        ],
        "flag": "https://flagcdn.com/lt.svg",
        "independent": false
    },
    {
        "name": "Luxembourg",
        "latlng": [
            49.75,
            6.16666666
        ],
        "flag": "https://flagcdn.com/lu.svg",
        "independent": false
    },
    {
        "name": "Macao",
        "latlng": [
            22.16666666,
            113.55
        ],
        "flag": "https://flagcdn.com/mo.svg",
        "independent": false
    },
    {
        "name": "North Macedonia",
        "latlng": [
            41.83333333,
            22.0
        ],
        "flag": "https://flagcdn.com/mk.svg",
        "independent": false
    },
    {
        "name": "Madagascar",
        "latlng": [
            -20.0,
            47.0
        ],
        "flag": "https://flagcdn.com/mg.svg",
        "independent": false
    },
    {
        "name": "Malawi",
        "latlng": [
            -13.5,
            34.0
        ],
        "flag": "https://flagcdn.com/mw.svg",
        "independent": false
    },
    {
        "name": "Malaysia",
        "latlng": [
            2.5,
            112.5
        ],
        "flag": "https://flagcdn.com/my.svg",
        "independent": false
    },
    {
        "name": "Maldives",
        "latlng": [
            3.25,
            73.0
        ],
        "flag": "https://flagcdn.com/mv.svg",
        "independent": false
    },
    {
        "name": "Mali",
        "latlng": [
            17.0,
            -4.0
        ],
        "flag": "https://flagcdn.com/ml.svg",
        "independent": false
    },
    {
        "name": "Malta",
        "latlng": [
            35.83333333,
            14.58333333
        ],
        "flag": "https://flagcdn.com/mt.svg",
        "independent": false
    },
    {
        "name": "Marshall Islands",
        "latlng": [
            9.0,
            168.0
        ],
        "flag": "https://flagcdn.com/mh.svg",
        "independent": false
    },
    {
        "name": "Martinique",
        "latlng": [
            14.666667,
            -61.0
        ],
        "flag": "https://flagcdn.com/mq.svg",
        "independent": false
    },
    {
        "name": "Mauritania",
        "latlng": [
            20.0,
            -12.0
        ],
        "flag": "https://flagcdn.com/mr.svg",
        "independent": false
    },
    {
        "name": "Mauritius",
        "latlng": [
            -20.28333333,
            57.55
        ],
        "flag": "https://flagcdn.com/mu.svg",
        "independent": false
    },
    {
        "name": "Mayotte",
        "latlng": [
            -12.83333333,
            45.16666666
        ],
        "flag": "https://flagcdn.com/yt.svg",
        "independent": false
    },
    {
        "name": "Mexico",
        "latlng": [
            23.0,
            -102.0
        ],
        "flag": "https://flagcdn.com/mx.svg",
        "independent": false
    },
    {
        "name": "Micronesia (Federated States of)",
        "latlng": [
            6.91666666,
            158.25
        ],
        "flag": "https://flagcdn.com/fm.svg",
        "independent": false
    },
    {
        "name": "Moldova (Republic of)",
        "latlng": [
            47.0,
            29.0
        ],
        "flag": "https://flagcdn.com/md.svg",
        "independent": false
    },
    {
        "name": "Monaco",
        "latlng": [
            43.73333333,
            7.4
        ],
        "flag": "https://flagcdn.com/mc.svg",
        "independent": false
    },
    {
        "name": "Mongolia",
        "latlng": [
            46.0,
            105.0
        ],
        "flag": "https://flagcdn.com/mn.svg",
        "independent": false
    },
    {
        "name": "Montenegro",
        "latlng": [
            42.5,
            19.3
        ],
        "flag": "https://flagcdn.com/me.svg",
        "independent": false
    },
    {
        "name": "Montserrat",
        "latlng": [
            16.75,
            -62.2
        ],
        "flag": "https://flagcdn.com/ms.svg",
        "independent": false
    },
    {
        "name": "Morocco",
        "latlng": [
            32.0,
            -5.0
        ],
        "flag": "https://flagcdn.com/ma.svg",
        "independent": false
    },
    {
        "name": "Mozambique",
        "latlng": [
            -18.25,
            35.0
        ],
        "flag": "https://flagcdn.com/mz.svg",
        "independent": false
    },
    {
        "name": "Myanmar",
        "latlng": [
            22.0,
            98.0
        ],
        "flag": "https://flagcdn.com/mm.svg",
        "independent": false
    },
    {
        "name": "Namibia",
        "latlng": [
            -22.0,
            17.0
        ],
        "flag": "https://flagcdn.com/na.svg",
        "independent": false
    },
    {
        "name": "Nauru",
        "latlng": [
            -0.53333333,
            166.91666666
        ],
        "flag": "https://flagcdn.com/nr.svg",
        "independent": false
    },
    {
        "name": "Nepal",
        "latlng": [
            28.0,
            84.0
        ],
        "flag": "https://flagcdn.com/np.svg",
        "independent": false
    },
    {
        "name": "Netherlands",
        "latlng": [
            52.5,
            5.75
        ],
        "flag": "https://flagcdn.com/nl.svg",
        "independent": false
    },
    {
        "name": "New Caledonia",
        "latlng": [
            -21.5,
            165.5
        ],
        "flag": "https://flagcdn.com/nc.svg",
        "independent": false
    },
    {
        "name": "New Zealand",
        "latlng": [
            -41.0,
            174.0
        ],
        "flag": "https://flagcdn.com/nz.svg",
        "independent": false
    },
    {
        "name": "Nicaragua",
        "latlng": [
            13.0,
            -85.0
        ],
        "flag": "https://flagcdn.com/ni.svg",
        "independent": false
    },
    {
        "name": "Niger",
        "latlng": [
            16.0,
            8.0
        ],
        "flag": "https://flagcdn.com/ne.svg",
        "independent": false
    },
    {
        "name": "Nigeria",
        "latlng": [
            10.0,
            8.0
        ],
        "flag": "https://flagcdn.com/ng.svg",
        "independent": false
    },
    {
        "name": "Niue",
        "latlng": [
            -19.03333333,
            -169.86666666
        ],
        "flag": "https://flagcdn.com/nu.svg",
        "independent": false
    },
    {
        "name": "Norfolk Island",
        "latlng": [
            -29.03333333,
            167.95
        ],
        "flag": "https://flagcdn.com/nf.svg",
        "independent": false
    },
    {
        "name": "Korea (Democratic People's Republic of)",
        "latlng": [
            40.0,
            127.0
        ],
        "flag": "https://flagcdn.com/kp.svg",
        "independent": false
    },
    {
        "name": "Northern Mariana Islands",
        "latlng": [
            15.2,
            145.75
        ],
        "flag": "https://flagcdn.com/mp.svg",
        "independent": false
    },
    {
        "name": "Norway",
        "latlng": [
            62.0,
            10.0
        ],
        "flag": "https://flagcdn.com/no.svg",
        "independent": false
    },
    {
        "name": "Oman",
        "latlng": [
            21.0,
            57.0
        ],
        "flag": "https://flagcdn.com/om.svg",
        "independent": false
    },
    {
        "name": "Pakistan",
        "latlng": [
            30.0,
            70.0
        ],
        "flag": "https://flagcdn.com/pk.svg",
        "independent": false
    },
    {
        "name": "Palau",
        "latlng": [
            7.5,
            134.5
        ],
        "flag": "https://flagcdn.com/pw.svg",
        "independent": false
    },
    {
        "name": "Palestine, State of",
        "latlng": [
            31.9,
            35.2
        ],
        "flag": "https://flagcdn.com/ps.svg",
        "independent": false
    },
    {
        "name": "Panama",
        "latlng": [
            9.0,
            -80.0
        ],
        "flag": "https://flagcdn.com/pa.svg",
        "independent": false
    },
    {
        "name": "Papua New Guinea",
        "latlng": [
            -6.0,
            147.0
        ],
        "flag": "https://flagcdn.com/pg.svg",
        "independent": false
    },
    {
        "name": "Paraguay",
        "latlng": [
            -23.0,
            -58.0
        ],
        "flag": "https://flagcdn.com/py.svg",
        "independent": false
    },
    {
        "name": "Peru",
        "latlng": [
            -10.0,
            -76.0
        ],
        "flag": "https://flagcdn.com/pe.svg",
        "independent": false
    },
    {
        "name": "Philippines",
        "latlng": [
            13.0,
            122.0
        ],
        "flag": "https://flagcdn.com/ph.svg",
        "independent": false
    },
    {
        "name": "Pitcairn",
        "latlng": [
            -25.06666666,
            -130.1
        ],
        "flag": "https://flagcdn.com/pn.svg",
        "independent": false
    },
    {
        "name": "Poland",
        "latlng": [
            52.0,
            20.0
        ],
        "flag": "https://flagcdn.com/pl.svg",
        "independent": false
    },
    {
        "name": "Portugal",
        "latlng": [
            39.5,
            -8.0
        ],
        "flag": "https://flagcdn.com/pt.svg",
        "independent": false
    },
    {
        "name": "Puerto Rico",
        "latlng": [
            18.25,
            -66.5
        ],
        "flag": "https://flagcdn.com/pr.svg",
        "independent": false
    },
    {
        "name": "Qatar",
        "latlng": [
            25.5,
            51.25
        ],
        "flag": "https://flagcdn.com/qa.svg",
        "independent": false
    },
    {
        "name": "Republic of Kosovo",
        "latlng": [
            42.666667,
            21.166667
        ],
        "flag": "https://flagcdn.com/xk.svg",
        "independent": false
    },
    {
        "name": "Réunion",
        "latlng": [
            -21.15,
            55.5
        ],
        "flag": "https://flagcdn.com/re.svg",
        "independent": false
    },
    {
        "name": "Romania",
        "latlng": [
            46.0,
            25.0
        ],
        "flag": "https://flagcdn.com/ro.svg",
        "independent": false
    },
    {
        "name": "Russian Federation",
        "latlng": [
            60.0,
            100.0
        ],
        "flag": "https://flagcdn.com/ru.svg",
        "independent": false
    },
    {
        "name": "Rwanda",
        "latlng": [
            -2.0,
            30.0
        ],
        "flag": "https://flagcdn.com/rw.svg",
        "independent": false
    },
    {
        "name": "Saint Barthélemy",
        "latlng": [
            18.5,
            -63.41666666
        ],
        "flag": "https://flagcdn.com/bl.svg",
        "independent": false
    },
    {
        "name": "Saint Helena, Ascension and Tristan da Cunha",
        "latlng": [
            -15.95,
            -5.7
        ],
        "flag": "https://flagcdn.com/sh.svg",
        "independent": false
    },
    {
        "name": "Saint Kitts and Nevis",
        "latlng": [
            17.33333333,
            -62.75
        ],
        "flag": "https://flagcdn.com/kn.svg",
        "independent": false
    },
    {
        "name": "Saint Lucia",
        "latlng": [
            13.88333333,
            -60.96666666
        ],
        "flag": "https://flagcdn.com/lc.svg",
        "independent": false
    },
    {
        "name": "Saint Martin (French part)",
        "latlng": [
            18.08333333,
            -63.95
        ],
        "flag": "https://flagcdn.com/mf.svg",
        "independent": false
    },
    {
        "name": "Saint Pierre and Miquelon",
        "latlng": [
            46.83333333,
            -56.33333333
        ],
        "flag": "https://flagcdn.com/pm.svg",
        "independent": false
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "latlng": [
            13.25,
            -61.2
        ],
        "flag": "https://flagcdn.com/vc.svg",
        "independent": false
    },
    {
        "name": "Samoa",
        "latlng": [
            -13.58333333,
            -172.33333333
        ],
        "flag": "https://flagcdn.com/ws.svg",
        "independent": false
    },
    {
        "name": "San Marino",
        "latlng": [
            43.76666666,
            12.41666666
        ],
        "flag": "https://flagcdn.com/sm.svg",
        "independent": false
    },
    {
        "name": "Sao Tome and Principe",
        "latlng": [
            1.0,
            7.0
        ],
        "flag": "https://flagcdn.com/st.svg",
        "independent": false
    },
    {
        "name": "Saudi Arabia",
        "latlng": [
            25.0,
            45.0
        ],
        "flag": "https://flagcdn.com/sa.svg",
        "independent": false
    },
    {
        "name": "Senegal",
        "latlng": [
            14.0,
            -14.0
        ],
        "flag": "https://flagcdn.com/sn.svg",
        "independent": false
    },
    {
        "name": "Serbia",
        "latlng": [
            44.0,
            21.0
        ],
        "flag": "https://flagcdn.com/rs.svg",
        "independent": false
    },
    {
        "name": "Seychelles",
        "latlng": [
            -4.58333333,
            55.66666666
        ],
        "flag": "https://flagcdn.com/sc.svg",
        "independent": false
    },
    {
        "name": "Sierra Leone",
        "latlng": [
            8.5,
            -11.5
        ],
        "flag": "https://flagcdn.com/sl.svg",
        "independent": false
    },
    {
        "name": "Singapore",
        "latlng": [
            1.36666666,
            103.8
        ],
        "flag": "https://flagcdn.com/sg.svg",
        "independent": false
    },
    {
        "name": "Sint Maarten (Dutch part)",
        "latlng": [
            18.033333,
            -63.05
        ],
        "flag": "https://flagcdn.com/sx.svg",
        "independent": false
    },
    {
        "name": "Slovakia",
        "latlng": [
            48.66666666,
            19.5
        ],
        "flag": "https://flagcdn.com/sk.svg",
        "independent": false
    },
    {
        "name": "Slovenia",
        "latlng": [
            46.11666666,
            14.81666666
        ],
        "flag": "https://flagcdn.com/si.svg",
        "independent": false
    },
    {
        "name": "Solomon Islands",
        "latlng": [
            -8.0,
            159.0
        ],
        "flag": "https://flagcdn.com/sb.svg",
        "independent": false
    },
    {
        "name": "Somalia",
        "latlng": [
            10.0,
            49.0
        ],
        "flag": "https://flagcdn.com/so.svg",
        "independent": false
    },
    {
        "name": "South Africa",
        "latlng": [
            -29.0,
            24.0
        ],
        "flag": "https://flagcdn.com/za.svg",
        "independent": false
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "latlng": [
            -54.5,
            -37.0
        ],
        "flag": "https://flagcdn.com/gs.svg",
        "independent": false
    },
    {
        "name": "Korea (Republic of)",
        "latlng": [
            37.0,
            127.5
        ],
        "flag": "https://flagcdn.com/kr.svg",
        "independent": false
    },
    {
        "name": "Spain",
        "latlng": [
            40.0,
            -4.0
        ],
        "flag": "https://flagcdn.com/es.svg",
        "independent": false
    },
    {
        "name": "Sri Lanka",
        "latlng": [
            7.0,
            81.0
        ],
        "flag": "https://flagcdn.com/lk.svg",
        "independent": false
    },
    {
        "name": "Sudan",
        "latlng": [
            15.0,
            30.0
        ],
        "flag": "https://flagcdn.com/sd.svg",
        "independent": false
    },
    {
        "name": "South Sudan",
        "latlng": [
            7.0,
            30.0
        ],
        "flag": "https://flagcdn.com/ss.svg",
        "independent": false
    },
    {
        "name": "Suriname",
        "latlng": [
            4.0,
            -56.0
        ],
        "flag": "https://flagcdn.com/sr.svg",
        "independent": false
    },
    {
        "name": "Svalbard and Jan Mayen",
        "latlng": [
            78.0,
            20.0
        ],
        "flag": "https://flagcdn.com/sj.svg",
        "independent": false
    },
    {
        "name": "Swaziland",
        "latlng": [
            -26.5,
            31.5
        ],
        "flag": "https://flagcdn.com/sz.svg",
        "independent": false
    },
    {
        "name": "Sweden",
        "latlng": [
            62.0,
            15.0
        ],
        "flag": "https://flagcdn.com/se.svg",
        "independent": false
    },
    {
        "name": "Switzerland",
        "latlng": [
            47.0,
            8.0
        ],
        "flag": "https://flagcdn.com/ch.svg",
        "independent": false
    },
    {
        "name": "Syrian Arab Republic",
        "latlng": [
            35.0,
            38.0
        ],
        "flag": "https://flagcdn.com/sy.svg",
        "independent": false
    },
    {
        "name": "Taiwan",
        "latlng": [
            23.5,
            121.0
        ],
        "flag": "https://flagcdn.com/tw.svg",
        "independent": false
    },
    {
        "name": "Tajikistan",
        "latlng": [
            39.0,
            71.0
        ],
        "flag": "https://flagcdn.com/tj.svg",
        "independent": false
    },
    {
        "name": "Tanzania, United Republic of",
        "latlng": [
            -6.0,
            35.0
        ],
        "flag": "https://flagcdn.com/tz.svg",
        "independent": false
    },
    {
        "name": "Thailand",
        "latlng": [
            15.0,
            100.0
        ],
        "flag": "https://flagcdn.com/th.svg",
        "independent": false
    },
    {
        "name": "Timor-Leste",
        "latlng": [
            -8.83333333,
            125.91666666
        ],
        "flag": "https://flagcdn.com/tl.svg",
        "independent": false
    },
    {
        "name": "Togo",
        "latlng": [
            8.0,
            1.16666666
        ],
        "flag": "https://flagcdn.com/tg.svg",
        "independent": false
    },
    {
        "name": "Tokelau",
        "latlng": [
            -9.0,
            -172.0
        ],
        "flag": "https://flagcdn.com/tk.svg",
        "independent": false
    },
    {
        "name": "Tonga",
        "latlng": [
            -20.0,
            -175.0
        ],
        "flag": "https://flagcdn.com/to.svg",
        "independent": false
    },
    {
        "name": "Trinidad and Tobago",
        "latlng": [
            11.0,
            -61.0
        ],
        "flag": "https://flagcdn.com/tt.svg",
        "independent": false
    },
    {
        "name": "Tunisia",
        "latlng": [
            34.0,
            9.0
        ],
        "flag": "https://flagcdn.com/tn.svg",
        "independent": false
    },
    {
        "name": "Turkey",
        "latlng": [
            39.0,
            35.0
        ],
        "flag": "https://flagcdn.com/tr.svg",
        "independent": false
    },
    {
        "name": "Turkmenistan",
        "latlng": [
            40.0,
            60.0
        ],
        "flag": "https://flagcdn.com/tm.svg",
        "independent": false
    },
    {
        "name": "Turks and Caicos Islands",
        "latlng": [
            21.75,
            -71.58333333
        ],
        "flag": "https://flagcdn.com/tc.svg",
        "independent": false
    },
    {
        "name": "Tuvalu",
        "latlng": [
            -8.0,
            178.0
        ],
        "flag": "https://flagcdn.com/tv.svg",
        "independent": false
    },
    {
        "name": "Uganda",
        "latlng": [
            1.0,
            32.0
        ],
        "flag": "https://flagcdn.com/ug.svg",
        "independent": false
    },
    {
        "name": "Ukraine",
        "latlng": [
            49.0,
            32.0
        ],
        "flag": "https://flagcdn.com/ua.svg",
        "independent": false
    },
    {
        "name": "United Arab Emirates",
        "latlng": [
            24.0,
            54.0
        ],
        "flag": "https://flagcdn.com/ae.svg",
        "independent": false
    },
    {
        "name": "United Kingdom of Great Britain and Northern Ireland",
        "latlng": [
            54.0,
            -2.0
        ],
        "flag": "https://flagcdn.com/gb.svg",
        "independent": false
    },
    {
        "name": "United States of America",
        "latlng": [
            38.0,
            -97.0
        ],
        "flag": "https://flagcdn.com/us.svg",
        "independent": false
    },
    {
        "name": "Uruguay",
        "latlng": [
            -33.0,
            -56.0
        ],
        "flag": "https://flagcdn.com/uy.svg",
        "independent": false
    },
    {
        "name": "Uzbekistan",
        "latlng": [
            41.0,
            64.0
        ],
        "flag": "https://flagcdn.com/uz.svg",
        "independent": false
    },
    {
        "name": "Vanuatu",
        "latlng": [
            -16.0,
            167.0
        ],
        "flag": "https://flagcdn.com/vu.svg",
        "independent": false
    },
    {
        "name": "Venezuela (Bolivarian Republic of)",
        "latlng": [
            8.0,
            -66.0
        ],
        "flag": "https://flagcdn.com/ve.svg",
        "independent": false
    },
    {
        "name": "Vietnam",
        "latlng": [
            16.16666666,
            107.83333333
        ],
        "flag": "https://flagcdn.com/vn.svg",
        "independent": false
    },
    {
        "name": "Wallis and Futuna",
        "latlng": [
            -13.3,
            -176.2
        ],
        "flag": "https://flagcdn.com/wf.svg",
        "independent": false
    },
    {
        "name": "Western Sahara",
        "latlng": [
            24.5,
            -13.0
        ],
        "flag": "https://flagcdn.com/eh.svg",
        "independent": false
    },
    {
        "name": "Yemen",
        "latlng": [
            15.0,
            48.0
        ],
        "flag": "https://flagcdn.com/ye.svg",
        "independent": false
    },
    {
        "name": "Zambia",
        "latlng": [
            -15.0,
            30.0
        ],
        "flag": "https://flagcdn.com/zm.svg",
        "independent": false
    },
    {
        "name": "Zimbabwe",
        "latlng": [
            -20.0,
            30.0
        ],
        "flag": "https://flagcdn.com/zw.svg",
        "independent": false
    }
];

