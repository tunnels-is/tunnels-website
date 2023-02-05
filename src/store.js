import moment from "moment";
const DATA = "data_";

var STORE = {
    Config: {
        PORTAL: "http://login.xlinkvpn.io", // online portal
        // PORTAL: "http://europe-login.tunnels.is:30102", // online portal
        CLIENT: "http://localhost:8082", // local client

        APITimeout: 20000,
        // API: "https://api.sveinn.is/", // disabling for now to use our test api
        ID: "tunnels-is-portal-id",
        HEADERS: {
            // "X-AUTH-TOKEN": "some-authentication-token",
            "Content-Type": "application/json",
            "Accept": "*/*",
        },
        // This might change once we know more about the app structure
        WhiteLabel: {
            SiteTitle: "ALPHA TEST"
        },
        ZONES: [
            { value: "na", desc: "North America" },
            { value: "eu", desc: "Europe" },
            { value: "sea", desc: "South/East Asia" },
            { value: "au", desc: "Australia" },
        ],
    },
    LoadNewCSSToStore: function (newCSS) {
        STORE.CSS = {
            ...STORE.TEMPLATE_CSS,
            ...newCSS
        }
    },
    GetAndSaveDomain: function () {
        let host = window.location.host
        let domain = "default"

        try {
            var hostSplit = host.split('.')
            domain = hostSplit[hostSplit.length - 1]
        } catch (error) {
            console.log("ERROR PARSING DOMAIN")
            console.dir(error)
        }

        STORE.Cache.Set("domain", domain)
        return domain
    },
    GetAndSaveSubdomain: function () {
        var host = window.location.host
        let subdomain = ""

        try {
            subdomain = host.split('.')[0]
        } catch (error) {
            console.log("ERROR PARSING FIRST SUBDOMAIN")
            console.dir(error)
        }

        Store.Set("subdomain", subdomain)
        return subdomain
    },
    Cache: {
        Clear: function (key) {
            return window.localStorage.clear()
        },
        Get: function (key) {
            return window.localStorage.getItem(key)
        },
        GetBool: function (key) {
            let data = window.localStorage.getItem(key)
            if (data === "true") {
                return true
            }
            return false
        },
        Set: function (key, value) {
            window.localStorage.setItem(key, value)
        },
        Del: function (key) {
            window.localStorage.removeItem(key)
        },
        DelObject: function (key) {
            window.localStorage.removeItem(DATA + key)
            window.localStorage.removeItem(DATA + key + "_ct")
        },
        GetObject: function (key) {
            let jsonData = null
            try {
                jsonData = JSON.parse(window.localStorage.getItem(DATA + key))
                console.log("%cGET OBJECT:", 'background: lightgreen; color: black', key, jsonData)
            }
            catch (e) {
                console.log(e)
                return undefined
            }

            if (jsonData === null) {
                return undefined
            }

            return jsonData
        },
        SetObject: function (key, object) {
            try {
                console.log("%cSET OBJECT:", 'background: lightgreen; color: black', key, object)
                let data = JSON.stringify(object)
                window.localStorage.setItem(DATA + key, data)
                window.localStorage.setItem(DATA + key + "_ct", moment().unix())
            }
            catch (e) {
                console.log(e)
                alert(e)
            }

        },
    },
    Localization: {
        M: function (month, locale) {
            return STORE.MonthsAndDays.M[month][locale]
        },
        D: function (day, locale) {
            return STORE.MonthsAndDays.D[day][locale]
        },
        E: function (item, locale) {
            // console.dir(STORE.t)
            if (STORE.t[item] === undefined) {
                return "No translation found"
            }
            if (STORE.t[item][locale] === undefined) {
                return STORE.t[item]["en"]
            } else {
                return STORE.t[item][locale]
            }
        },
        // Create a func called C, and copy E for error codes
        // Instead of no translation found - return some stuff
        C: function (item, locale) {
            if (STORE.ErrorCodes[item] === undefined) {
                return "Unkown error, please try again later";
            }
            if (STORE.ErrorCodes[item][locale] === undefined) {
                return STORE.ErrorCodes[item]["en"];
            } else {
                return STORE.ErrorCodes[item][locale];
            }
        }
    },
    // format of translation objects:
    // [ITEM_TYPE]_[ITEM_NAME]
    t: {
        BUTTON_Add: {
            "en": "Add",
            "is": "Bæta við",
            "ro": "Add"
        },
        BUTTON_Save: {
            "en": "Save",
            "is": "Vista",
            "ro": "Save"
        },
        BUTTON_Confirm: {
            "en": "Confirm",
            "is": "Staðfesta",
            "ro": "Confirm"
        },
        BUTTON_Delete: {
            "en": "Delete",
            "is": "Eyða",
            "ro": "Remove"
        },
        BUTTON_Remove: {
            "en": "Remove",
            "is": "Fjarlægja",
            "ro": "Remove"
        },
        BUTTON_Edit: {
            "en": "Edit",
            "is": "Breyta",
            "ro": "Edit"
        },
        BUTTON_Login: {
            "en": "Login",
            "is": "Skrá inn",
            "ro": "Autentificare"
        },
        BUTTON_Register: {
            "en": "Register",
            "is": "Skrá inn",
            "ro": "Inregistreaza-te"
        },
        BUTTON_Exit: {
            "en": "Exit",
            "is": "",
            "ro": "Exit"
        },
        BUTTON_Logout: {
            "en": "Logout",
            "is": "",
            "ro": "Deconnectati-va"
        },
        BUTTON_Delete_Account: {
            "en": "Delete account",
            "is": "",
            "ro": "Stergeti contul"
        },
        BUTTON_Cancel_Subscription: {
            "en": "Cancel subscription",
            "is": "",
            "ro": "Anuleaza abonamentul"
        },
        BUTTON_Change_Subscription: {
            "en": "Change subscription",
            "is": "",
            "ro": "Schimba abonamentul"
        },
        NAVIGATION_LINK_Dashboard: {
            "en": "Servers",
            "is": "Servers",
            "ro": "Servers"
        },
        NAVIGATION_LINK_Support: {
            "en": "Support",
            "is": "",
            "ro": ""
        },
        NAVIGATION_LINK_Feed: {
            "en": "Twitter",
            "is": "",
            "ro": "Feed de informatii"
        },
        NAVIGATION_LINK_Stats: {
            "en": "Statistics",
            "is": "",
            "ro": "Statistici"
        },
        NAVIGATION_LINK_Account: {
            "en": "Account",
            "is": "",
            "ro": "Cont",
        },
        NAVIGATION_LINK_Logs: {
            "en": "Logs",
            "is": "Logs",
            "ro": "Logs"
        },
        NAVIGATION_LINK_LoginTokens: {
            "en": "Logins",
            "is": "-",
            "ro": "-"
        },
        NAVIGATION_LINK_AccessPoints: {
            "en": "My Networks",
            "is": "-",
            "ro": "-"
        },
        NAVIGATION_LINK_Settings: {
            "en": "Settings",
            "is": "",
            "ro": "Setari"
        },
        BUTTON_Save: {
            "en": "Save",
            "is": "",
            "ro": "Salveaza"
        },
        INPUTLABEL_DeviceName: {
            "en": "Device/Computer Name",
            "is": "Nafn tölvu",
            "en": "Device/Computer Name",
        },
        INPUTLABEL_Email: {
            "en": "Email",
            "is": "",
            "ro": "Email"
        },
        INPUTLABEL_Email_Confirm: {
            "en": "Confirm email",
            "is": "",
            "ro": "Confirma adresa de email"
        },
        INPUTLABEL_Password: {
            "en": "Password",
            "is": "",
            "ro": "Parola"
        },
        INPUTLABEL_Confirm_Password: {
            "en": "Confirm password",
            "is": "",
            "ro": "Confirma parola"
        },
        INPUTLABEL_Company_Name: {
            "en": "Company name",
            "is": "",
            "ro": "Numele companiei"
        },
        INPUTLABEL_Address: {
            "en": "Address",
            "is": "",
            "ro": "Adresa"
        },
        INPUTLABEL_Reg_Number: {
            "en": "Registration number",
            "is": "",
            "ro": "Numar de inregistrare"
        },
        INPUTLABEL_VAT_Number: {
            "en": "VAT number",
            "is": "",
            "ro": "Numar TVA"
        },
        INPUTLABEL_Phone_Number: {
            "en": "Phone number",
            "is": "",
            "ro": "Numar de telefon"
        },
        INPUTLABEL_Additional_Info: {
            "en": "Additional information",
            "is": "",
            "ro": "Informatii aditionale"
        }

    },
    MonthsAndDays: {
        M: {
            "January": { en: "January", is: "Janúar", ro: "Ianuarie" },
            "February": { en: "February", is: "Febrúar", ro: "Februarie" },
            "March": { en: "March", is: "Mars", ro: "Martie" },
            "April": { en: "April", is: "Apríl", ro: "Aprilie" },
            "May": { en: "May", is: "Maí", ro: "Mai" },
            "June": { en: "June", is: "Júní", ro: "Iunie" },
            "July": { en: "July", is: "Júlí", ro: "Iulie" },
            "August": { en: "August", is: "Ágúst", ro: "August" },
            "September": { en: "September", is: "September", ro: "Septembrie" },
            "October": { en: "October", is: "Október", ro: "Octombrie" },
            "November": { en: "November", is: "Nóvember", ro: "Noiembrie" },
            "December": { en: "December", is: "Desember", ro: "Decembrie" }
        },
        D: {
            "Sunday": { en: "Sunday", is: "Sunnudagur", ro: "Duminica" },
            "Monday": { en: "Monday", is: "Mánudagur", ro: "Luni" },
            "Tuesday": { en: "Tuesday", is: "Þriðjudagur", ro: "Marti" },
            "Wednesday": { en: "Wednesday", is: "Miðvikudagur", ro: "Miercuri" },
            "Thursday": { en: "Thursday", is: "Fimmtudagur", ro: "Joi" },
            "Friday": { en: "Friday", is: "Föstudagur", ro: "Vineri" },
            "Saturday": { en: "Saturday", is: "Laugardagur", ro: "Sambata" },
        }
    },
    ParseResponseMessage(response) {
        if (response?.data?.Message) {
            return response.data.Message
        } else {
            return "Success!"
        }
    },
    ParseResponseErrorMessage(error) {
        if (error.response?.data?.Message) {
            return error.response.data.Message
        } else {
            return "Unknown error, please try again in a moment. If the problem persists please contact customer support"
        }
    },
    CSS: {
        Pages: {
            Dashboard: {},
            APForm: {
                RemoveButton: {
                    init: { background: "#F00" },
                    hover: { background: "#F00" }
                },
                AddButton: {
                    init: {},
                    hover: { background: "#00ff13" }
                },
                ConfirmButton: {
                    init: {},
                    hover: { background: "#00ff13" }
                },
            },
            Login: {
                LoginButton: {
                    init: {},
                    hover: { background: "#00ff13" }
                },
                FormInput: {
                    init: {},
                    hover: {}
                },
                RegisterButton: {
                    init: {},
                    hover: { background: "#0daac3" }
                }

            },
            Register: {
                RegisterButton: {
                    init: {
                        background: "#018da3",
                        color: "black",
                        border: "1px solid black",
                        fontWeight: "bold"
                    },
                    hover: { background: "#0daac3" }
                }
            },
            Settings: {},
            WhiteLabel: {
                Body: {
                    color: "#000000",
                    background: "#ff33ff"
                },
                WlFormInput: {
                    init: {
                        width: "100%",
                        padding: "12px 20px",
                        margin: "8px 0",
                        boxSizing: "border-box",
                        border: "2px solid #ffff33"
                    },
                    hover: {
                        width: "100%",
                        padding: "12px 20px",
                        margin: "8px 0",
                        boxSizing: "border-box",
                        border: "2px solid #ff2222"
                    }
                },
                SaveButton: {
                    init: { background: "#fff000" },
                    hover: { background: "#ff00ff" }
                },
            },
        },
        Components: {
            Sidebar: {
                Title: {
                    color: "#00ff00",
                    textDecoration: "none"
                },
                General: {
                    background: "#212529",
                },
                NavLink: {
                    init: {
                        color: "#ffffff",
                    },
                    hover: {
                        color: "#d3d3d3"
                    }
                },
                LogoutButton: {
                    init: {
                        color: "#dc3545",
                        textAlign: "left"
                    },
                    hover: {
                        color: "#d3d3d3",
                        textAlign: "left"
                    }
                }
            }
        }
    }
};


export default STORE;