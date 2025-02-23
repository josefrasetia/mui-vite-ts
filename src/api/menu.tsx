interface MenuItem {
  key: string;
  name: string;
  icon?: string;
  child?: MenuItem[];
  title?: boolean;
  link?: string;
  badge?: string;
  linkParent?: string;
  multilevel?: boolean;
  level?: number;
  keyParent?: string;
}

const dataMenu: MenuItem[] = [
  {
    key: "home",
    name: "Home",
    icon: "home-outline",
    linkParent: "/app",
  },
  {
    key: "apps",
    name: "Applications",
    icon: "storefront-outline",
    child: [
      {
        key: "communication_apps",
        name: "Communication",
        title: true,
      },
      {
        key: "contact",
        name: "Contact",
        link: "/app/pages/contact",
        icon: "contact-outline",
      },
      {
        key: "email",
        name: "Email",
        link: "/app/pages/email",
        badge: "2",
        icon: "mail-outline",
      },
      {
        key: "social_apps",
        name: "Social",
        title: true,
      },
      {
        key: "timeline",
        name: "Timeline",
        link: "/app/pages/timeline",
        icon: "people-outline",
      },
      {
        key: "chat",
        name: "Chat",
        link: "/app/pages/chat",
        badge: "4",
        icon: "chatbubbles-outline",
      },
      {
        key: "ecommerce_app",
        name: "Ecommerce",
        title: true,
      },
      {
        key: "Itemlist",
        name: "Product Catalogues",
        link: "/app/pages/ecommerce",
        icon: "apps-outline",
      },
      {
        key: "item_detail",
        name: "Product Detail",
        link: "/app/pages/product-detail",
        icon: "card",
      },
      {
        key: "checkout",
        name: "Checkout Page",
        link: "/app/pages/checkout",
        icon: "cart-outline",
      },
      {
        key: "dynamic_invoice",
        name: "Dynamic Invoice",
        link: "/app/pages/invoice",
        icon: "document-outline",
      },
      {
        key: "productivity_app",
        name: "Productivity",
        title: true,
      },
      {
        key: "calendar",
        name: "Calendar",
        link: "/app/pages/calendar",
        icon: "calendar-outline",
      },
      {
        key: "task",
        name: "Task Board",
        link: "/app/pages/taskboard",
        icon: "checkmark-circle-outline",
      },
    ],
  },
  {
    key: "pages",
    name: "Pages",
    icon: "newspaper-outline",
    child: [
      {
        key: "account_page",
        name: "Auth Page",
        title: true,
      },
      {
        key: "login",
        name: "Login",
        link: "/login",
        icon: "person-outline",
      },
      {
        key: "login2",
        name: "Login Ver.2",
        link: "/login-v2",
        icon: "contact-outline",
      },
      {
        key: "login3",
        name: "Login Ver.3",
        link: "/login-v3",
        icon: "contact-outline",
      },
      {
        key: "register",
        name: "Register",
        link: "/register",
        icon: "key-outline",
      },
      {
        key: "register2",
        name: "Register Ver.2",
        link: "/register-v2",
        icon: "key-outline",
      },
      {
        key: "register3",
        name: "Register Ver.3",
        link: "/register-v3",
        icon: "key-outline",
      },
      {
        key: "reset",
        name: "Reset Password",
        link: "/reset-password",
        icon: "undo-outline",
      },
      {
        key: "lock",
        name: "Lock Screen",
        link: "/lock-screen",
        icon: "lock-outline",
      },
      {
        key: "generic_page",
        name: "General",
        title: true,
      },
      {
        key: "user_profile",
        name: "User Profile",
        link: "/app/pages/user-profile",
        icon: "person-outline",
      },
      {
        key: "blank",
        name: "Blank Page",
        link: "/app/pages/blank-page",
        icon: "document-outline",
      },
      {
        key: "pricing",
        name: "Pricing Page",
        link: "/app/pages/pricing",
        icon: "archive-outline",
      },
      {
        key: "gallery",
        name: "Photo Gallery",
        link: "/app/pages/photo-gallery",
        icon: "images-outline",
      },
      {
        key: "settings",
        name: "Settings",
        link: "/app/pages/settings",
        icon: "options-outline",
      },
      {
        key: "help_support",
        name: "Help & Support",
        link: "/app/pages/help-support",
        icon: "help-circle-outline",
      },
      {
        key: "maintenance",
        name: "Maintenance",
        link: "/maintenance",
        icon: "build-outline",
      },
      {
        key: "coming_soon",
        name: "Coming Soon",
        link: "/coming-soon",
        icon: "bonfire-outline",
      },
      {
        key: "blog",
        name: "Blog",
        title: true,
      },
      {
        key: "blog_list",
        name: "Blog Home",
        link: "/blog",
        icon: "home-outline",
      },
      {
        key: "blog_detail",
        name: "Article",
        link: "/blog/article",
        icon: "list-box-outline",
      },
      {
        key: "errors",
        name: "Errors",
        title: true,
      },
      {
        key: "not_found_page",
        name: "Not Found Page",
        link: "/app/pages/not-found",
        icon: "warning-outline",
      },
      {
        key: "error_page",
        name: "Error Page",
        link: "/app/pages/error",
        icon: "warning-outline",
      },
    ],
  },
  {
    key: "tables",
    name: "Tables",
    icon: "grid-outline",
    child: [
      {
        key: "common_table",
        name: "Common Table",
        title: true,
      },
      {
        key: "basic_table",
        name: "Basic",
        link: "/app/tables/basic-table",
        icon: "grid-outline",
      },
      {
        key: "data_table",
        name: "Data Tables",
        link: "/app/tables/data-table",
        icon: "cube-outline",
      },
      {
        key: "table_playground",
        name: "Table Playgound",
        link: "/app/tables/table-playground",
        icon: "list-box-outline",
      },
      {
        key: "redux_table",
        name: "Redux Table",
        title: true,
      },
      {
        key: "editable_cell",
        name: "Table Edit",
        link: "/app/tables/editable-cell",
        icon: "cube-outline",
      },
      {
        key: "tree_table",
        name: "Tree Table",
        link: "/app/tables/tree-table",
        icon: "git-merge",
      },
    ],
  },
  {
    key: "forms",
    name: "Forms Buttons",
    icon: "list-outline",
    child: [
      {
        key: "buttons_collections",
        name: "Button Collections",
        title: true,
      },
      {
        key: "buttons",
        name: "Buttons",
        link: "/app/forms/buttons",
        icon: "game-controller-a-outline",
      },
      {
        key: "toggle_button",
        name: "Toggle Button",
        link: "/app/forms/toggle-button",
        icon: "switch-outline",
      },
      {
        key: "dial_button",
        name: "Dial Button",
        link: "/app/forms/dial-button",
        icon: "add-circle-outline",
      },
      {
        key: "text_input",
        name: "Text Input",
        title: true,
      },
      {
        key: "textfields",
        name: "Textfields",
        link: "/app/forms/textfields",
        icon: "list-box-outline",
      },
      {
        key: "autocomplete",
        name: "Autocomplete & Tag",
        link: "/app/forms/autocomplete",
        icon: "list",
      },
      {
        key: "datetimepicker",
        name: "Date Time Picker",
        link: "/app/forms/date-time-picker",
        icon: "calendar-outline",
      },
      {
        key: "formik_form",
        name: "Formik Form",
        link: "/app/forms/formik-form",
        icon: "list-box-outline",
      },
      {
        key: "selection",
        name: "Selection",
        title: true,
      },
      {
        key: "checkbox_radio",
        name: "Checkbox & Radio",
        link: "/app/forms/checkbox-radio",
        icon: "checkbox-outline",
      },
      {
        key: "switches",
        name: "Switches",
        link: "/app/forms/switches",
        icon: "switch-outline",
      },
      {
        key: "selectbox",
        name: "Select",
        link: "/app/forms/selectbox",
        icon: "menu-outline",
      },
      {
        key: "advanced_input",
        name: "Advanced Input",
        title: true,
      },
      {
        key: "slider",
        name: "Slider Range",
        link: "/app/forms/slider-range",
        icon: "options-outline",
      },
      {
        key: "upload",
        name: "Upload",
        link: "/app/forms/upload",
        icon: "cloud-upload-outline",
      },
      {
        key: "ratting",
        name: "Ratting",
        link: "/app/forms/ratting",
        icon: "star-half",
      },
      {
        key: "texteditor",
        name: "WYSIWYG Editor",
        link: "/app/forms/wysiwyg-editor",
        icon: "create-outline",
      },
    ],
  },
  {
    key: "ui",
    name: "UI Collection",
    icon: "flower-outline",
    child: [
      {
        key: "material_content",
        name: "Block Container",
        title: true,
      },
      {
        key: "card_papper",
        name: "Card & Papper",
        link: "/app/ui/card-papper",
        icon: "card-outline",
      },
      {
        key: "accordion",
        name: "Accordion",
        link: "/app/ui/accordion",
        icon: "menu-outline",
      },
      {
        key: "material_navigation",
        name: "Navigation",
        title: true,
      },
      {
        key: "tab",
        name: "Tabs Navigation",
        link: "/app/ui/tabs",
        icon: "folder-outline",
      },
      {
        key: "drawer_menu",
        name: "Menu & Drawer",
        link: "/app/ui/drawer-menu",
        icon: "settings-outline",
      },
      {
        key: "breadcrumbs",
        name: "Breadcrumbs",
        link: "/app/ui/breadcrumbs",
        icon: "arrow-dropright",
      },
      {
        key: "paginations",
        name: "Paginations",
        link: "/app/ui/paginations",
        icon: "arrow-round-forward",
      },
      {
        key: "steppers",
        name: "Steppers",
        link: "/app/ui/steppers",
        icon: "glasses-outline",
      },
      {
        key: "material_popup",
        name: "Popup",
        title: true,
      },
      {
        key: "dialog_modal",
        name: "Dialog & Modal",
        link: "/app/ui/dialog-modal",
        icon: "glasses-outline",
      },
      {
        key: "popover_tooltip",
        name: "Popover & Tooltip",
        link: "/app/ui/popover-tooltip",
        icon: "photos-outline",
      },
      {
        key: "material_notif",
        name: "Notification",
        title: true,
        icon: "information-circle-outline",
      },
      {
        key: "badges",
        name: "Badges",
        link: "/app/ui/badges",
        icon: "bookmark-outline",
      },
      {
        key: "snackbar",
        name: "Messages",
        link: "/app/ui/snackbar",
        icon: "notifications-outline",
      },
      {
        key: "material_dividers",
        name: "Dividers",
        title: true,
      },
      {
        key: "list_divider",
        name: "List & Divider",
        link: "/app/ui/list",
        icon: "menu",
      },
      {
        key: "custom_dividers",
        name: "Custom Dividers",
        link: "/app/ui/dividers",
        icon: "menu-outline",
      },
      {
        key: "material_image",
        name: "Images",
        title: true,
      },
      {
        key: "avatars",
        name: "Avatars",
        link: "/app/ui/avatars",
        icon: "contact-outline",
      },
      {
        key: "image_gird",
        name: "Image Grid Gallery",
        link: "/app/ui/image-grid",
        icon: "apps-outline",
      },
      {
        key: "slider_carousel",
        name: "Slider & Carousel",
        link: "/app/ui/slider-carousel",
        icon: "images-outline",
      },
      {
        key: "material_font_icon",
        name: "Fonts & Icons",
        title: true,
      },
      {
        key: "typography",
        name: "Typography",
        link: "/app/ui/typography",
        icon: "create-outline",
      },
      {
        key: "icons",
        name: "Material Icons",
        link: "/app/ui/icons",
        icon: "heart-outline",
      },
      {
        key: "ionicons",
        name: "Ion Icons",
        link: "/app/ui/ionicons",
        icon: "ionic-outline",
      },
      {
        key: "utilities",
        name: "Utility",
        title: true,
      },
      {
        key: "progress",
        name: "Progress & Spinners",
        link: "/app/ui/progress",
        icon: "glasses-outline",
      },
      {
        key: "tags",
        name: "Tags",
        link: "/app/ui/tags",
        icon: "pricetag-outline",
      },
    ],
  },
  {
    key: "charts",
    name: "Charts",
    icon: "pie-chart-outline",
    child: [
      {
        key: "svg_chart",
        name: "SVG Chart",
        title: true,
      },
      {
        key: "line_charts",
        name: "Line",
        link: "/app/charts/line-charts",
        icon: "pulse-outline",
      },
      {
        key: "bar_charts",
        name: "Bar",
        link: "/app/charts/bar-charts",
        icon: "stats-outline",
      },
      {
        key: "area_charts",
        name: "Area",
        link: "/app/charts/area-charts",
        icon: "analytics-outline",
      },
      {
        key: "pie_charts",
        name: "Pie & Doughnut",
        link: "/app/charts/pie-charts",
        icon: "pie-outline",
      },
      {
        key: "radar_charts",
        name: "Radar",
        link: "/app/charts/radar-charts",
        icon: "ionic-outline",
      },
      {
        key: "scatter_charts",
        name: "Scatter",
        link: "/app/charts/scatter-charts",
        icon: "sunny-outline",
      },
      {
        key: "compossed_charts",
        name: "Compossed",
        link: "/app/charts/compossed-chart",
        icon: "stats-outline",
      },
      {
        key: "canvas_chart",
        name: "Canvas Chart",
        title: true,
      },
      {
        key: "doughnut_pie",
        name: "Doughnut & Pie",
        link: "/app/charts/doughnut-pie-charts",
        icon: "pie-outline",
      },
      {
        key: "bar_canvas_chart",
        name: "Bar Direction",
        link: "/app/charts/bar-direction-charts",
        icon: "stats-outline",
      },
      {
        key: "line_canvas_chart",
        name: "Line and Scatter",
        link: "/app/charts/line-scatter-charts",
        icon: "sunny-outline",
      },
      {
        key: "area_canvas_chart",
        name: "Area Filled",
        link: "/app/charts/area-filled-charts",
        icon: "analytics-outline",
      },
      {
        key: "radar_canvas_chart",
        name: "Radar and Polar",
        link: "/app/charts/radar-polar-chart",
        icon: "ionic-outline",
      },
    ],
  },
  {
    key: "maps",
    name: "Maps",
    icon: "navigate-outline",
    child: [
      {
        key: "google_map",
        name: "Google Map",
        title: true,
      },
      {
        key: "map_marker",
        name: "Map Marker",
        link: "/app/maps/map-marker",
        icon: "pin-outline",
      },
      {
        key: "map_direction",
        name: "Map Direction",
        link: "/app/maps/map-direction",
        icon: "arrow-dropright",
      },
      {
        key: "map_searchbox",
        name: "Map with Searchbox",
        link: "/app/maps/map-searchbox",
        icon: "search-outline",
      },
      {
        key: "map_traffic",
        name: "Traffic Indicator",
        link: "/app/maps/map-traffic",
        icon: "car-outline",
      },
      {
        key: "street_view",
        name: "Street View",
        link: "/app/maps/street-view",
        icon: "eye-outline",
      },
    ],
  },
  {
    key: "menu_levels",
    name: "Menu Levels",
    multilevel: true,
    icon: "menu-outline",
    level: 1,
    child: [
      {
        key: "level_1",
        name: "Level 1",
        link: "/app/level1",
      },
      {
        key: "level_2",
        keyParent: "menu_levels",
        name: "Level 2",
        level: 2,
        child: [
          {
            key: "sub_menu_1",
            keyParent: "level_2",
            name: "Sub Menu 1",
            level: 3,
            child: [
              {
                key: "deep_1",
                name: "Deeper 1",
                link: "/app/sublevel2",
              },
              {
                key: "deep_2",
                name: "Deeper 2",
                link: "/app/sublevel3",
              },
            ],
          },
          {
            key: "sub_menu_2",
            name: "Sub Menu 2",
            link: "/app/sublevel4",
          },
        ],
      },
    ],
  },
  {
    key: "blank_single",
    name: "Blank Page",
    icon: "document-outline",
    linkParent: "/app/blank-single",
  },
  {
    key: "blank_single2",
    name: "Blank Page2",
    icon: "document-outline",
    linkParent: "/app/blank-single2",
  },
];

export default dataMenu;
